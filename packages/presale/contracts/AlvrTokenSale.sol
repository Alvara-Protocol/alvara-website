// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract AlvrTokenSale is Ownable, Pausable {
    address public alvara;
    uint256 public optionCnt;

    mapping(uint256 => uint256) public minimumTokens;
    mapping(uint256 => uint256) public maximumTokens;
    mapping(address => mapping(uint256 => uint256)) public vests;
    mapping(address => mapping(uint256 => uint256)) public tokens;
    mapping(address => mapping(uint256 => uint256)) public claimed;
    mapping(address => uint256) public nonce;
    mapping(uint256 => address) public investors;
    mapping(address => bool) public isInvestor;
    mapping(address => bool) public isBlocked;

    // option => index => Schedule
    mapping(uint256 => mapping(uint256 => Schedule)) public schedules;

    uint256 public investorCnt;
    uint256 public totalVested;
    address public treasuryWallet;
    address public txSigner;
    uint256 public constant fullPercent = 10000;

    struct Schedule {
        uint256 timestamp;
        uint256 release;
    }
    struct Investments {
        address investor;
        uint256[] amounts;
        uint256[] tokens;
    }

    bool public claimable;

    modifier whenNotClaimable() {
        require(!claimable, "Claimable");
        _;
    }

    modifier whenClaimable() {
        require(claimable, "Not Claimable");
        _;
    }

    constructor(
        address alvara_,
        address treasuryWallet_,
        address txSigner_
    ) {
        optionCnt = 3;
        alvara = alvara_;
        treasuryWallet = treasuryWallet_;
        txSigner = txSigner_;

        // TODO Update
        schedules[0][0] = Schedule(1665671980245, 3000);
        schedules[0][1] = Schedule(1665672980245, 7000);

        schedules[1][0] = Schedule(1665671980245, 2000);
        schedules[1][1] = Schedule(1665672980245, 8000);

        schedules[2][0] = Schedule(1665671980245, 4000);
        schedules[2][1] = Schedule(1665672980245, 6000);

        minimumTokens[0] = 5000 * 10**18;
        minimumTokens[1] = 13333 * 10**18;
        minimumTokens[2] = 200000 * 10**18;

        maximumTokens[0] = 100000 * 10**18;
        maximumTokens[1] = 666666 * 10**18;
        maximumTokens[2] = 52000000000 * 10**18;
    }

    function setTxSigner(address txSigner_) external onlyOwner {
        require(txSigner_ != address(0), "Invalid address");
        txSigner = txSigner_;
    }

    function setClaimable() external onlyOwner {
        claimable = true;
    }

    function setUnclaimable() external onlyOwner {
        claimable = false;
    }

    function pauseSale() external onlyOwner {
        _pause();
    }

    function unpauseSale() external onlyOwner {
        _unpause();
    }

    function setSchedule(
        uint256 option,
        uint256 index,
        Schedule memory schedule
    ) external onlyOwner {
        require(option < optionCnt, "Invalid option");

        schedules[option][index] = schedule;
    }

    function setOptionMinAmount(uint256 option, uint256 amount)
        external
        onlyOwner
    {
        minimumTokens[option] = amount;
    }

    function setOptionMaxAmount(uint256 option, uint256 amount)
        external
        onlyOwner
    {
        maximumTokens[option] = amount;
    }

    function _claimed(address investor_, uint256 option_)
        internal
        view
        returns (uint256)
    {
        return claimed[investor_][option_];
    }

    function _minimum(uint256 option_) internal view returns (uint256) {
        return minimumTokens[option_];
    }

    function _maximum(uint256 option_) internal view returns (uint256) {
        return maximumTokens[option_];
    }

    function _tokens(address investor_, uint256 option_)
        internal
        view
        returns (uint256)
    {
        return tokens[investor_][option_];
    }

    function _useNonce(address investor_) internal returns (uint256) {
        return nonce[investor_]++;
    }

    function _addInvestorChecked(address investor_) internal {
        require(investor_ != address(0), "Invalid address");
        if (isInvestor[investor_]) return;
        investors[investorCnt++] = investor_;
        isInvestor[investor_] = true;
    }

    function setAlvara(address alvara_) external onlyOwner {
        require(alvara_ != address(0), "Invalid address");
        alvara = alvara_;
    }

    function setOptionCnt(uint256 optionCnt_) external onlyOwner {
        require(optionCnt_ != 0, "Invalid count");
        optionCnt = optionCnt_;
    }

    function setOptionRange(
        uint256 option_,
        uint256 minimum_,
        uint256 maximum_
    ) external onlyOwner {
        require(option_ < optionCnt, "Invalid option");
        require(minimum_ < maximum_, "Invalid min & max");

        minimumTokens[option_] = minimum_;
        maximumTokens[option_] = maximum_;
    }

    function _vested(address investor_, uint256 option_)
        internal
        view
        returns (uint256)
    {
        return vests[investor_][option_];
    }

    function _addTokens(
        address investor_,
        uint256 option_,
        uint256 tokens_
    ) internal returns (uint256) {
        require(
            _minimum(option_) <= _tokens(investor_, option_) + tokens_,
            "Vest more than minimum vest amount"
        );
        require(
            _maximum(option_) >= _tokens(investor_, option_) + tokens_,
            "Exceeds maximum vest amount"
        );

        tokens[investor_][option_] += tokens_;

        return tokens_;
    }

    function _addVest(
        address investor_,
        uint256 option_,
        uint256 amount_,
        uint256 tokens_
    ) internal returns (uint256) {
        if (amount_ == 0 && tokens_ == 0) return amount_;

        _addTokens(investor_, option_, tokens_);
        vests[msg.sender][option_] += amount_;

        return amount_;
    }

    function _verifySignature(
        bytes32 hashedMessage_,
        uint8 v_,
        bytes32 r_,
        bytes32 s_
    ) internal view {
        address signer = ecrecover(hashedMessage_, v_, r_, s_);

        require(signer == txSigner, "Invalid signature");
    }

    function _getHashedMessage(
        address investor_,
        uint256 amount_,
        uint256[] memory amounts_,
        uint256[] memory tokens_
    ) internal returns (bytes32 hashedMessage) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";

        bytes32 hashedContent = keccak256(
            abi.encodePacked(
                investor_,
                amount_,
                amounts_,
                tokens_,
                _useNonce(investor_)
            )
        );

        hashedMessage = keccak256(abi.encodePacked(prefix, hashedContent));
    }

    function _blockUser(address user_) internal {
        isBlocked[user_] = true;
    }

    function _unblockUser(address user_) internal {
        isBlocked[user_] = false;
    }

    function blockUsers(address[] memory users_) external onlyOwner {
        for (uint256 i = 0; i < users_.length; i++) {
            _blockUser(users_[i]);
        }
    }

    function unblockUsers(address[] memory users_) external onlyOwner {
        for (uint256 i = 0; i < users_.length; i++) {
            _unblockUser(users_[i]);
        }
    }

    function _replaceUser(address oldUser_, address newUser_) internal {
        _blockUser(oldUser_);
        _addInvestorChecked(newUser_);

        for (uint256 option_ = 0; option_ < optionCnt; option_++) {
            uint256 temp = vests[oldUser_][option_];
            vests[oldUser_][option_] = 0;
            vests[newUser_][option_] = temp;

            temp = tokens[oldUser_][option_];
            tokens[oldUser_][option_] = 0;
            tokens[newUser_][option_] = temp;

            temp = claimed[oldUser_][option_];
            claimed[oldUser_][option_] = 0;
            claimed[newUser_][option_] = temp;
        }
    }

    function _replaceUserChecked(address oldUser_, address newUser_) internal {
        require(
            oldUser_ != address(0) && newUser_ != address(0),
            "Invalid address"
        );
        require(
            isInvestor[oldUser_] && !isBlocked[oldUser_],
            "Invalid previous user"
        );
        require(
            !isInvestor[newUser_] && !isBlocked[newUser_],
            "Invalid next user"
        );

        _replaceUser(oldUser_, newUser_);
    }

    function replaceUsers(
        address[] memory oldUsers_,
        address[] memory newUsers_
    ) external onlyOwner {
        require(
            oldUsers_.length == newUsers_.length,
            "Mismatching array length"
        );

        for (uint256 i = 0; i < oldUsers_.length; i++) {
            _replaceUserChecked(oldUsers_[i], newUsers_[i]);
        }
    }

    /**
     * @dev Add vest by deposit ETH
     * @param amounts_ Option amount
     */
    function addVest(
        uint256[] memory amounts_,
        uint256[] memory tokens_,
        uint8 v_,
        bytes32 r_,
        bytes32 s_
    ) external payable whenNotPaused whenNotClaimable {
        _addInvestorChecked(msg.sender);
        _verifySignature(
            _getHashedMessage(msg.sender, msg.value, amounts_, tokens_),
            v_,
            r_,
            s_
        );

        uint256 vestAmount_ = 0;
        for (uint256 option_ = 0; option_ < optionCnt; option_++) {
            vestAmount_ += _addVest(
                msg.sender,
                option_,
                amounts_[option_],
                tokens_[option_]
            );
        }

        totalVested += vestAmount_;

        require(vestAmount_ == msg.value, "Invalid amounts");
        payable(treasuryWallet).transfer(msg.value); // to be confirmed
    }

    function getAllInvestors() external view returns (Investments[] memory) {
        Investments[] memory investments_ = new Investments[](investorCnt);
        for (uint256 i = 0; i < investorCnt; i++) {
            address investor_ = investors[i];
            uint256[] memory amounts_ = new uint256[](optionCnt);
            uint256[] memory tokens_ = new uint256[](optionCnt);
            for (uint256 option_ = 0; option_ < optionCnt; option_++) {
                amounts_[option_] = _vested(investor_, option_);
                tokens_[option_] = _tokens(investor_, option_);
            }
            investments_[i] = Investments(investor_, amounts_, tokens_);
        }

        return investments_;
    }

    function _increaseClaimedChecked(
        address investor_,
        uint256 option_,
        uint256 tokens_
    ) internal returns (uint256) {
        require(
            _tokens(investor_, option_) >=
                _claimed(investor_, option_) + tokens_,
            "Exceeds claimable"
        );

        claimed[investor_][option_] += tokens_;
        return tokens_;
    }

    function _scheduleCnt(uint256 option_) internal view returns (uint256) {
        uint256 i = 0;
        while (schedules[option_][i].release > 0) i++;
        return i;
    }

    /**
     * @dev Calculate option release amount by given timestamp
     */
    function _calcOptionRelease(
        address investor_,
        uint256 option_,
        uint256 timestamp_
    ) internal view returns (uint256) {
        uint256 i = 0;
        uint256 release_;

        while (
            schedules[option_][i].release > 0 &&
            schedules[option_][i].timestamp <= timestamp_
        ) {
            release_ = schedules[option_][i].release;
            i++;
        }

        return (_tokens(investor_, option_) * release_) / fullPercent;
    }

    function _calcRelease(address investor_, uint256 timestamp_)
        internal
        view
        returns (uint256)
    {
        uint256 release_ = 0;
        for (uint256 option_ = 0; option_ < optionCnt; option_++) {
            release_ += _calcOptionRelease(investor_, option_, timestamp_);
        }

        return release_;
    }

    function _calcInvestorClaim(address investor_)
        internal
        view
        returns (uint256)
    {
        uint256 claimed_ = 0;
        for (uint256 option_ = 0; option_ < optionCnt; option_++) {
            claimed_ += _claimed(investor_, option_);
        }

        return claimed_;
    }

    function unclaimed(address investor_) external view returns (uint256) {
        return
            _calcRelease(investor_, block.timestamp) -
            _calcInvestorClaim(investor_);
    }

    function _claimOption(
        address investor_,
        uint256 option_,
        uint256 timestamp_
    ) internal {
        /// Available claim amount for given option
        uint256 claim_ = _calcOptionRelease(investor_, option_, timestamp_) -
            _claimed(investor_, option_);

        _increaseClaimedChecked(investor_, option_, claim_);
        IERC20(alvara).transfer(investor_, claim_);
    }

    function _claim(address investor_, uint256 timestamp_) internal {
        for (uint256 option_ = 0; option_ < optionCnt; option_++) {
            _claimOption(investor_, option_, timestamp_);
        }
    }

    function claim() external whenNotPaused whenClaimable {
        _claim(msg.sender, block.timestamp);
    }
}
