// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "hardhat/console.sol";

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
    uint256 public investorCnt;
    uint256 public totalVested;
    address public treasuryWallet;
    address public txSigner;
    uint256 public constant fullPercent = 10000;

    struct Schedule {
        uint256 timestamp;
        uint256 release;
    }

    mapping(uint256 => mapping(uint256 => Schedule)) public schedules;
    bool public claimable;

    constructor(
        address alvara_,
        address treasuryWallet_,
        address txSigner_
    ) {
        optionCnt = 3;
        alvara = alvara_;
        treasuryWallet = treasuryWallet_;
        txSigner = txSigner_;

        // Declare schedules
    }

    function setTxSigner(address txSigner_) external onlyOwner {
        txSigner = txSigner_;
    }

    function setClaimable() external onlyOwner {
        claimable = true;
    }

    function setUnclaimable() external onlyOwner {
        claimable = false;
    }

    modifier whenNotClaimable() {
        require(!claimable);
        _;
    }

    modifier whenClaimable() {
        require(claimable);
        _;
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
        if (isInvestor[investor_]) return;
        investors[investorCnt++] = investor_;
        isInvestor[investor_] = true;
    }

    function setAlvara(address alvara_) external onlyOwner {
        require(alvara_ != address(0));
        alvara = alvara_;
    }

    function setOptionCnt(uint256 optionCnt_) external onlyOwner {
        require(optionCnt_ != 0);
        optionCnt = optionCnt_;
    }

    function setOptionRange(
        uint256 option_,
        uint256 minimum_,
        uint256 maximum_
    ) external onlyOwner {
        require(option_ < optionCnt);
        require(minimum_ < maximum_);

        minimumTokens[option_] = minimum_;
        maximumTokens[option_] = maximum_;
    }

    function pauseSale() external onlyOwner {
        _pause();
    }

    function unPauseSale() external onlyOwner {
        _unpause();
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
        require(_minimum(option_) <= _tokens(investor_, option_) + tokens_);
        require(_maximum(option_) >= _tokens(investor_, option_) + tokens_);

        tokens[investor_][option_] += tokens_;

        return tokens_;
    }

    function _addVest(
        address investor_,
        uint256 option_,
        uint256 amount_,
        uint256 tokens_
    ) internal returns (uint256) {
        _addTokens(investor_, option_, tokens_);
        vests[msg.sender][option_] += amount_;

        return amount_;
    }

    function _verifySignature(
        bytes32 hashedMessage_,
        uint8 v_,
        bytes32 r_,
        bytes32 s_
    ) internal view  {
        address signer = ecrecover(hashedMessage_,v_, r_, s_);

        require(signer == txSigner);        
    }

    function _getHashedMessage(address investor_, uint256 amount_)
        internal
        returns (bytes32 hashedMessage)
    {
        bytes memory prefix = "\x19Ethereum Signed Message:\n84";
        hashedMessage = keccak256(
            abi.encodePacked(prefix, investor_, amount_, _useNonce(investor_))
        );
    }

    function addVest(
        uint256[] memory amounts_,
        uint256[] memory tokens_,
        uint8 v_,
        bytes32 r_,
        bytes32 s_
    ) external payable whenNotPaused {
        _addInvestorChecked(msg.sender);
        _verifySignature(_getHashedMessage(msg.sender, msg.value), v_, r_, s_);

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

        require(vestAmount_ == msg.value);
        payable(treasuryWallet).transfer(msg.value); // to be confirmed
    }

    struct Investments {
        address investor;
        uint256[] amounts;
        uint256[] tokens;
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
                _claimed(investor_, option_) + tokens_
        );

        claimed[investor_][option_] += tokens_;
        return tokens_;
    }

    function _scheduleCnt(uint256 option_) internal view returns (uint256) {
        uint256 i = 0;
        while (schedules[option_][i].release > 0) i++;
        return i;
    }

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
            i++;
            release_ = schedules[option_][i].release;
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
        uint256 claim_ = _calcOptionRelease(investor_, option_, timestamp_) -
            _claimed(investor_, option_);

        _increaseClaimedChecked(investor_, option_, claim_);
        IERC20(alvara).transfer(investor_, claim_);
    }

    function _claim(address investor_, uint256 timestamp_) internal {
        for (uint256 option_ = 0; option_ < optionCnt; option_) {
            _claimOption(investor_, option_, timestamp_);
        }
    }

    function claim() external whenNotPaused whenClaimable {
        _claim(msg.sender, block.timestamp);
    }
}
