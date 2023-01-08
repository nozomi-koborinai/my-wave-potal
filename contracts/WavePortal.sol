// WavePortal.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "hardhat/console.sol";

// contract = 他の言語で言うところのclass
// 1つのコンストラクタしか持つことができない
contract WavePortal {
    constructor() {
        console.log("Here is my first smart contract!");
    }
}