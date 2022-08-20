/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface ISemaphoreVotingInterface extends utils.Interface {
  functions: {
    "addVoter(uint256,uint256)": FunctionFragment;
    "castVote(bytes32,uint256,uint256,uint256[8])": FunctionFragment;
    "createPoll(uint256,address,uint8)": FunctionFragment;
    "endPoll(uint256,uint256)": FunctionFragment;
    "startPoll(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addVoter"
      | "castVote"
      | "createPoll"
      | "endPoll"
      | "startPoll"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addVoter",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createPoll",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "endPoll",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startPoll",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addVoter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createPoll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endPoll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startPoll", data: BytesLike): Result;

  events: {
    "PollCreated(uint256,address)": EventFragment;
    "PollEnded(uint256,address,uint256)": EventFragment;
    "PollStarted(uint256,address,uint256)": EventFragment;
    "VoteAdded(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PollCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PollEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PollStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteAdded"): EventFragment;
}

export interface PollCreatedEventObject {
  pollId: BigNumber;
  coordinator: string;
}
export type PollCreatedEvent = TypedEvent<
  [BigNumber, string],
  PollCreatedEventObject
>;

export type PollCreatedEventFilter = TypedEventFilter<PollCreatedEvent>;

export interface PollEndedEventObject {
  pollId: BigNumber;
  coordinator: string;
  decryptionKey: BigNumber;
}
export type PollEndedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  PollEndedEventObject
>;

export type PollEndedEventFilter = TypedEventFilter<PollEndedEvent>;

export interface PollStartedEventObject {
  pollId: BigNumber;
  coordinator: string;
  encryptionKey: BigNumber;
}
export type PollStartedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  PollStartedEventObject
>;

export type PollStartedEventFilter = TypedEventFilter<PollStartedEvent>;

export interface VoteAddedEventObject {
  pollId: BigNumber;
  vote: string;
}
export type VoteAddedEvent = TypedEvent<
  [BigNumber, string],
  VoteAddedEventObject
>;

export type VoteAddedEventFilter = TypedEventFilter<VoteAddedEvent>;

export interface ISemaphoreVoting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISemaphoreVotingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addVoter(
      pollId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    castVote(
      vote: BytesLike,
      nullifierHash: BigNumberish,
      pollId: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createPoll(
      pollId: BigNumberish,
      coordinator: string,
      depth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endPoll(
      pollId: BigNumberish,
      decryptionKey: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startPoll(
      pollId: BigNumberish,
      encryptionKey: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addVoter(
    pollId: BigNumberish,
    identityCommitment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  castVote(
    vote: BytesLike,
    nullifierHash: BigNumberish,
    pollId: BigNumberish,
    proof: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createPoll(
    pollId: BigNumberish,
    coordinator: string,
    depth: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endPoll(
    pollId: BigNumberish,
    decryptionKey: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startPoll(
    pollId: BigNumberish,
    encryptionKey: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addVoter(
      pollId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    castVote(
      vote: BytesLike,
      nullifierHash: BigNumberish,
      pollId: BigNumberish,
      proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    createPoll(
      pollId: BigNumberish,
      coordinator: string,
      depth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endPoll(
      pollId: BigNumberish,
      decryptionKey: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startPoll(
      pollId: BigNumberish,
      encryptionKey: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PollCreated(uint256,address)"(
      pollId?: null,
      coordinator?: string | null
    ): PollCreatedEventFilter;
    PollCreated(
      pollId?: null,
      coordinator?: string | null
    ): PollCreatedEventFilter;

    "PollEnded(uint256,address,uint256)"(
      pollId?: null,
      coordinator?: string | null,
      decryptionKey?: null
    ): PollEndedEventFilter;
    PollEnded(
      pollId?: null,
      coordinator?: string | null,
      decryptionKey?: null
    ): PollEndedEventFilter;

    "PollStarted(uint256,address,uint256)"(
      pollId?: null,
      coordinator?: string | null,
      encryptionKey?: null
    ): PollStartedEventFilter;
    PollStarted(
      pollId?: null,
      coordinator?: string | null,
      encryptionKey?: null
    ): PollStartedEventFilter;

    "VoteAdded(uint256,bytes32)"(
      pollId?: BigNumberish | null,
      vote?: null
    ): VoteAddedEventFilter;
    VoteAdded(pollId?: BigNumberish | null, vote?: null): VoteAddedEventFilter;
  };

  estimateGas: {
    addVoter(
      pollId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    castVote(
      vote: BytesLike,
      nullifierHash: BigNumberish,
      pollId: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createPoll(
      pollId: BigNumberish,
      coordinator: string,
      depth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endPoll(
      pollId: BigNumberish,
      decryptionKey: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startPoll(
      pollId: BigNumberish,
      encryptionKey: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addVoter(
      pollId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    castVote(
      vote: BytesLike,
      nullifierHash: BigNumberish,
      pollId: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createPoll(
      pollId: BigNumberish,
      coordinator: string,
      depth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endPoll(
      pollId: BigNumberish,
      decryptionKey: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startPoll(
      pollId: BigNumberish,
      encryptionKey: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
