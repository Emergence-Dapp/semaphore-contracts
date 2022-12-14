/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISemaphoreVoting,
  ISemaphoreVotingInterface,
} from "../../../contracts/interfaces/ISemaphoreVoting";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coordinator",
        type: "address",
      },
    ],
    name: "PollCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coordinator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decryptionKey",
        type: "uint256",
      },
    ],
    name: "PollEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coordinator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "encryptionKey",
        type: "uint256",
      },
    ],
    name: "PollStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "vote",
        type: "bytes32",
      },
    ],
    name: "VoteAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
    ],
    name: "addVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vote",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]",
      },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coordinator",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "depth",
        type: "uint8",
      },
    ],
    name: "createPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "decryptionKey",
        type: "uint256",
      },
    ],
    name: "endPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "encryptionKey",
        type: "uint256",
      },
    ],
    name: "startPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISemaphoreVoting__factory {
  static readonly abi = _abi;
  static createInterface(): ISemaphoreVotingInterface {
    return new utils.Interface(_abi) as ISemaphoreVotingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISemaphoreVoting {
    return new Contract(address, _abi, signerOrProvider) as ISemaphoreVoting;
  }
}
