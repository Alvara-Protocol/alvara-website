// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/// @title A contract for Alvara token presale
/// @author Hiroyuki Takahashi
contract AlvrTokenSale is Ownable, Pausable {
    // alvara token address
    address public alvara;
    // possible option count: default is 3
    uint256 public optionCnt;
    // option -> minimum token amount
    mapping(uint256 => uint256) public minimumTokens;
    // option -> maximum token amount
    mapping(uint256 => uint256) public maximumTokens;
    // investor -> option -> vested eth
    mapping(address => mapping(uint256 => uint256)) public vests;
    // investor -> option -> allocated tokens
    mapping(address => mapping(uint256 => uint256)) public tokens;
    // investor -> option -> claimed tokens
    mapping(address => mapping(uint256 => uint256)) public claimed;
    // investor -> nonce
    mapping(address => uint256) public nonce;
    // index -> investor
    mapping(uint256 => address) public investors;
    // investor -> isBlocked
    mapping(address => bool) public isBlocked;
    // option -> index -> timestamp since tge
    mapping(uint256 => mapping(uint256 => uint256)) public schedules;
    // percent alias for 100%
    uint256 public constant fullPercent = 10_000;
    // timestamp for 30.44 days
    uint256 public constant timeMonth = 2_629_743;
    // count of investors
    uint256 public investorCnt;
    // total vested eth
    uint256 public totalVests;
    // total allocated tokens
    uint256 public totalTokens;
    // treasury wallet which eth is sent to
    address public treasuryWallet;
    // tx signer to validate the params for addVest
    address public txSigner;
    // allowed percentage to mitigate failure for min/max vest
    uint256 public allowedPercentage;
    // token generation event timestamp
    uint256 public tge;

    // struct for returning type of getAllInvestors
    struct Investments {
        address investor;
        uint256[] amounts;
        uint256[] tokens;
    }

    // false: able to vest, true: able to claim
    bool public claimable;

    modifier whenNotClaimable() {
        require(!claimable, "Claimable");
        _;
    }

    modifier whenClaimable() {
        require(claimable, "Not Claimable");
        _;
    }

    constructor(address alvara_, address treasuryWallet_, address txSigner_) {
        optionCnt = 3;
        alvara = alvara_;
        treasuryWallet = treasuryWallet_;
        txSigner = txSigner_;

        schedules[0][0] = fullPercent;

        schedules[1][0] = 0;
        schedules[1][1] = 1_666 * 1;
        schedules[1][2] = 1_666 * 2;
        schedules[1][3] = 1_666 * 3;
        schedules[1][4] = 1_666 * 4;
        schedules[1][5] = 1_666 * 5;
        schedules[1][6] = fullPercent;

        schedules[2][0] = 0;
        schedules[2][1] = 555 * 1;
        schedules[2][2] = 555 * 2;
        schedules[2][3] = 555 * 3;
        schedules[2][4] = 555 * 4;
        schedules[2][5] = 555 * 5;
        schedules[2][6] = 555 * 6;
        schedules[2][7] = 555 * 7;
        schedules[2][8] = 555 * 8;
        schedules[2][9] = 555 * 9;
        schedules[2][10] = 555 * 10;
        schedules[2][11] = 555 * 11;
        schedules[2][12] = 555 * 12;
        schedules[2][13] = 555 * 13;
        schedules[2][14] = 555 * 14;
        schedules[2][15] = 555 * 15;
        schedules[2][16] = 555 * 16;
        schedules[2][17] = 555 * 17;
        schedules[2][18] = fullPercent;

        allowedPercentage = 500;

        minimumTokens[0] = 5_000 * 10 ** 18;
        minimumTokens[1] = 10_000 * 10 ** 18;
        minimumTokens[2] = 100_000 * 10 ** 18;

        maximumTokens[0] = 100_000 * 10 ** 18;
        maximumTokens[1] = 500_000 * 10 ** 18;
        maximumTokens[2] = 1_000_000 * 10 ** 18;
    }

    function setTreasuryWallet(address treasuryWallet_) external onlyOwner {
        require(treasuryWallet_ != address(0));
        treasuryWallet = treasuryWallet_;
    }

    function setTge(uint256 tge_) external onlyOwner {
        require(tge_ > 0);
        tge = tge_;
    }

    function claimAdmin(address token_) external onlyOwner {
        if (token_ == address(0)) {
            payable(owner()).transfer(address(this).balance);
            return;
        }

        IERC20(token_).transfer(
            owner(),
            IERC20(token_).balanceOf(address(this))
        );
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
        uint256 option_,
        uint256[] memory releases_
    ) external onlyOwner {
        require(option_ < optionCnt, "Invalid option");
        require(
            releases_[releases_.length - 1] == fullPercent,
            "Should finish with full percent"
        );

        for (uint256 i = 0; i < releases_.length; i++)
            schedules[option_][i] = releases_[i];
        schedules[option_][releases_.length] = 0;
    }

    function setAllowedPercentage(
        uint256 allowedPercentage_
    ) external onlyOwner {
        require(allowedPercentage_ <= fullPercent, "Invalid percentage");
        allowedPercentage = allowedPercentage_;
    }

    function setOptionMinAmount(
        uint256 option,
        uint256 amount
    ) external onlyOwner {
        minimumTokens[option] = amount;
    }

    function setOptionMaxAmount(
        uint256 option,
        uint256 amount
    ) external onlyOwner {
        maximumTokens[option] = amount;
    }

    function _claimed(
        address investor_,
        uint256 option_
    ) internal view returns (uint256) {
        return claimed[investor_][option_];
    }

    function _minimum(uint256 option_) internal view returns (uint256) {
        return
            (minimumTokens[option_] * (fullPercent - allowedPercentage)) /
            fullPercent;
    }

    function _maximum(uint256 option_) internal view returns (uint256) {
        return
            (maximumTokens[option_] * (fullPercent + allowedPercentage)) /
            fullPercent;
    }

    function _tokens(
        address investor_,
        uint256 option_
    ) internal view returns (uint256) {
        return tokens[investor_][option_];
    }

    function _useNonce(address investor_) internal returns (uint256) {
        return nonce[investor_]++;
    }

    function _isInvestor(address investorLike_) internal view returns (bool) {
        for (uint256 i = 0; i < investorCnt; i++)
            if (investors[i] == investorLike_) return true;
        return false;
    }

    function _addInvestorChecked(address investor_) internal {
        require(!isBlocked[investor_], "Blocked investor");
        require(investor_ != address(0), "Invalid address");
        if (_isInvestor(investor_)) return;
        investors[investorCnt++] = investor_;
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

    function _vested(
        address investor_,
        uint256 option_
    ) internal view returns (uint256) {
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
    ) internal {
        if (amount_ == 0 && tokens_ == 0) return;

        _addTokens(investor_, option_, tokens_);
        vests[msg.sender][option_] += amount_;
        totalVests += amount_;
        totalTokens += tokens_;
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
            _isInvestor(oldUser_) && !isBlocked[oldUser_],
            "Invalid previous user"
        );
        require(
            !_isInvestor(newUser_) && !isBlocked[newUser_],
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
            _addVest(msg.sender, option_, amounts_[option_], tokens_[option_]);
            vestAmount_ += amounts_[option_];
        }

        require(vestAmount_ == msg.value, "Invalid amounts");
        payable(treasuryWallet).transfer(msg.value);
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

    function _calcScheduleTime(uint256 index_) internal view returns (uint256) {
        return tge + index_ * timeMonth;
    }

    function _calcOptionRelease(
        address investor_,
        uint256 option_,
        uint256 timestamp_
    ) internal view returns (uint256) {
        uint256 i = 0;
        uint256 release_;

        while (
            (schedules[option_][i] > 0 || i == 0) &&
            _calcScheduleTime(i) <= timestamp_
        ) {
            release_ = schedules[option_][i];
            i++;
        }

        return (_tokens(investor_, option_) * release_) / fullPercent;
    }

    function _calcRelease(
        address investor_,
        uint256 timestamp_
    ) internal view returns (uint256) {
        uint256 release_ = 0;
        for (uint256 option_ = 0; option_ < optionCnt; option_++) {
            release_ += _calcOptionRelease(investor_, option_, timestamp_);
        }

        return release_;
    }

    function _calcInvestorClaim(
        address investor_
    ) internal view returns (uint256) {
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

    fallback() external payable {}

    receive() external payable {}
}
