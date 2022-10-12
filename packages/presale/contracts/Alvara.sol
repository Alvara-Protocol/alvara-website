// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Alvara is ERC20 {
    constructor() ERC20("Alvara", "ALVR") {
        _mint(msg.sender, 10000000 * 10**18);
    }
}
