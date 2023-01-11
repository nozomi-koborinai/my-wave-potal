import { ethers, hardhatArguments } from 'hardhat';

// run.js
// デバッグ用のテストコード
// 本番環境でユーザが自分のスマートコントラクトを呼び出すシチュエーションを想定して、
// コードが問題なく走るかテストする
const main = async () => {
    const waveContractFactory = await ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    console.log("Contract added to:", waveContract.address);
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());
    /**
     * 「👋（wave）」を送る
     */
    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait(); // トランザクションが承認されるのを待つ（テスト:1回目）
    const [_, randomPerson] = await ethers.getSigners();
    waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
    await waveTxn.wait(); // トランザクションが承認されるのを待つ（テスト:2回目）
    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
  };
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