import { ethers, hardhatArguments } from 'hardhat';
import { WavePortal } from '../typechain-types';

// run.js
// デバッグ用のテストコード
// 本番環境でユーザが自分のスマートコントラクトを呼び出すシチュエーションを想定して、
// コードが問題なく走るかテストする
const main = async() => {
    const [owner, randomPerson] = await ethers.getSigners();

    // getContractFactoryによってWavePotalコントラクトがコンパイルされる
    // コントラクトがコンパイルされると、コントラクトを扱うために必要なファイルがartifactsディレクトリ直下に生成される
    const waveContractFactory = await ethers.getContractFactory("WavePortal");

    // HardHatがローカルのEthereumネットワークをコントラクトのためだけに作成する
    // そして、スクリプトの実行が完了した後にそのローカルネットワークを破棄する
    // つまり、コントラクトを実行するたびに、毎回ローカルサーバを更新するかのようにブロックチェーンが新しくなる
    // ※常にゼロリセットになるためエラーのデバッグがしやすくなる
    const waveContract = await waveContractFactory.deploy();

    // Waveコントラクトが、ローカルのブロックチェーン上にデプロイされるまで待つ処理
    // Hardhat（Solidityの実行環境）は実際に自分のマシン上にマイナーを作成してブロックチェーンを構築してくれる
    const wavePortal = await waveContract.deployed();
  
    // 自分のスマートコントラクトのデプロイ先のアドレス（= wavePortal.address）をターミナルに出力している
    console.log("WavePortal address: ", wavePortal.address);
    // WavePortalコントラクトをデプロイした人（= 自分）のアドレス（= owner.address）をターミナルに出力している
    console.log("Contract deployed by:", owner.address);

    let waveCount = await waveContract.getTotalWaves();
  
    // ブロックチェーン上の書き込みが発生するので、ガス代がかかる
    let waveTxn = await waveContract.wave();

    // 承認が終わったらトランザクションの結果を取得
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();
}

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();