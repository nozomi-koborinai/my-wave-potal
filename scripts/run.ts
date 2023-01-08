import { ethers, hardhatArguments } from 'hardhat';

const main = async() => {
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
  
    console.log("WavePortal address: ", wavePortal.address);
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