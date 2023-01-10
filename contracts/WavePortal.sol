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
    /*
    * NewWaveイベントの作成
    */
    event NewWave(address indexed from, uint256 timestamp, string message);
    /*
    * Waveという構造体を作成。
    * 構造体の中身は、カスタマイズすることができます。
    */
    struct Wave {
        address waver; //「👋（wave）」を送ったユーザーのアドレス
        string message; // ユーザーが送ったメッセージ
        uint256 timestamp; // ユーザーが「👋（wave）」を送った瞬間のタイムスタンプ
    }
    /*
    * 構造体の配列を格納するための変数wavesを宣言。
    * これで、ユーザーが送ってきたすべての「👋（wave）」を保持することができます。
    */
    Wave[] waves;
    constructor() {
        console.log("WavePortal - Smart Contract!");
    }
    /*
    * _messageという文字列を要求するようにwave関数を更新。
    * _messageは、ユーザーがフロントエンドから送信するメッセージです。
    */
    function wave(string memory _message) public {
        totalWaves += 1;
        // msg.sender・・・関数を呼び出した人（=自分）にwaveを送った人のウォレットアドレスが入ってくる
        // スマートコントラクトに含まれる関数を呼び出すには、ユーザは有効なウォレットを接続する必要がある
        // msg.senderでは誰が関数を呼び出したかを正確に把握し、ユーザ認証を行なっている
        console.log("%s waved w/ message %s", msg.sender, _message);
        /*
         * 「👋（wave）」とメッセージを配列に格納。
         */
        waves.push(Wave(msg.sender, _message, block.timestamp));
        /*
         * コントラクト側でemitされたイベントに関する通知をフロントエンドで取得できるようにする。
         */
        emit NewWave(msg.sender, block.timestamp, _message);
    }
    /*
     * 構造体配列のwavesを返してくれるgetAllWavesという関数を追加。
     * これで、私たちのWEBアプリからwavesを取得することができます。
     */
    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }
    function getTotalWaves() public view returns (uint256) {
        // コントラクトが出力する値をコンソールログで表示する。
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}