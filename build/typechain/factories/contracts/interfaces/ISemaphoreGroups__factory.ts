/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISemaphoreGroups,
  ISemaphoreGroupsInterface,
} from "../../../contracts/interfaces/ISemaphoreGroups";

const _abi = [
  {
    inputs: [],
    name: "Semaphore__GroupAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "Semaphore__GroupDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "Semaphore__GroupIdIsNotLessThanSnarkScalarField",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "depth",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "zeroValue",
        type: "uint256",
      },
    ],
    name: "GroupCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "root",
        type: "uint256",
      },
    ],
    name: "MemberAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "root",
        type: "uint256",
      },
    ],
    name: "MemberRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
    ],
    name: "getDepth",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
    ],
    name: "getNumberOfLeaves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
    ],
    name: "getRoot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISemaphoreGroups__factory {
  static readonly abi = _abi;
  static createInterface(): ISemaphoreGroupsInterface {
    return new utils.Interface(_abi) as ISemaphoreGroupsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISemaphoreGroups {
    return new Contract(address, _abi, signerOrProvider) as ISemaphoreGroups;
  }
}
