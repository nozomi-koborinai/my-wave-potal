/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WavePortal, WavePortalInterface } from "../WavePortal";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506100596040518060400160405280602081526020017f48657265206973206d7920666972737420736d61727420636f6e74726163742181525061005e60201b6100091760201c565b6101d8565b6100fa8160405160240161007291906101b6565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100fd60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610160578082015181840152602081019050610145565b60008484015250505050565b6000601f19601f8301169050919050565b600061018882610126565b6101928185610131565b93506101a2818560208601610142565b6101ab8161016c565b840191505092915050565b600060208201905081810360008301526101d0818461017d565b905092915050565b6101b3806101e76000396000f3fe6080604052600080fd5b61009f8160405160240161001d919061015b565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100a2565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156101055780820151818401526020810190506100ea565b60008484015250505050565b6000601f19601f8301169050919050565b600061012d826100cb565b61013781856100d6565b93506101478185602086016100e7565b61015081610111565b840191505092915050565b600060208201905081810360008301526101758184610122565b90509291505056fea264697066735822122042b10468c8dbbf9f84733c70f320f98e413a1a5a19ea80f5d25c96533a79858b64736f6c63430008110033";

type WavePortalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WavePortalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WavePortal__factory extends ContractFactory {
  constructor(...args: WavePortalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WavePortal> {
    return super.deploy(overrides || {}) as Promise<WavePortal>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WavePortal {
    return super.attach(address) as WavePortal;
  }
  override connect(signer: Signer): WavePortal__factory {
    return super.connect(signer) as WavePortal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WavePortalInterface {
    return new utils.Interface(_abi) as WavePortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WavePortal {
    return new Contract(address, _abi, signerOrProvider) as WavePortal;
  }
}
