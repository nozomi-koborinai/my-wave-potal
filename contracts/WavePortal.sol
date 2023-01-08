// WavePortal.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "hardhat/console.sol";

// contract = 他の言語で言うところのclass
// 1つのコンストラクタしか持つことができない
contract WavePortal {

    // 自動的に0に初期化される状態変数
    // WavePotalコントラクトのストレージに永続的に保存される
    // ※unit256は非常に大きな数を扱うことができる
    uint256 totalWaves;

    constructor() {
        console.log("Here is my first smart contract!");
    }

    function wave() public {
        totalWaves += 1;
        console.log();

        // msg.sender・・・関数を呼び出した人（=自分）にwaveを送った人のウォレットアドレスが入ってくる
        // スマートコントラクトに含まれる関数を呼び出すには、ユーザは有効なウォレットを接続する必要がある
        // msg.senderでは誰が関数を呼び出したかを正確に把握し、ユーザ認証を行なっている
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}