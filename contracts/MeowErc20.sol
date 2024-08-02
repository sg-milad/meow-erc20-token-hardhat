/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Meow is ERC20 {
    constructor(uint256 initSupply) ERC20("@sg_milad", "meeoow") {
        _mint(msg.sender, initSupply);
    }
}
