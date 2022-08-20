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

export interface ISemaphoreInterface extends utils.Interface {
  functions: {
    "addMember(uint256,uint256)": FunctionFragment;
    "createGroup(uint256,uint8,uint256,address)": FunctionFragment;
    "removeMember(uint256,uint256,uint256[],uint8[])": FunctionFragment;
    "updateGroupAdmin(uint256,address)": FunctionFragment;
    "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addMember"
      | "createGroup"
      | "removeMember"
      | "updateGroupAdmin"
      | "verifyProof"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMember",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup",
    values: [BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [BigNumberish, BigNumberish, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGroupAdmin",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGroupAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {
    "GroupAdminUpdated(uint256,address,address)": EventFragment;
    "ProofVerified(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GroupAdminUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProofVerified"): EventFragment;
}

export interface GroupAdminUpdatedEventObject {
  groupId: BigNumber;
  oldAdmin: string;
  newAdmin: string;
}
export type GroupAdminUpdatedEvent = TypedEvent<
  [BigNumber, string, string],
  GroupAdminUpdatedEventObject
>;

export type GroupAdminUpdatedEventFilter =
  TypedEventFilter<GroupAdminUpdatedEvent>;

export interface ProofVerifiedEventObject {
  groupId: BigNumber;
  signal: string;
}
export type ProofVerifiedEvent = TypedEvent<
  [BigNumber, string],
  ProofVerifiedEventObject
>;

export type ProofVerifiedEventFilter = TypedEventFilter<ProofVerifiedEvent>;

export interface ISemaphore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISemaphoreInterface;

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
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMember(
    groupId: BigNumberish,
    identityCommitment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createGroup(
    groupId: BigNumberish,
    depth: BigNumberish,
    zeroValue: BigNumberish,
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeMember(
    groupId: BigNumberish,
    identityCommitment: BigNumberish,
    proofSiblings: BigNumberish[],
    proofPathIndices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateGroupAdmin(
    groupId: BigNumberish,
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifyProof(
    groupId: BigNumberish,
    signal: BytesLike,
    nullifierHash: BigNumberish,
    externalNullifier: BigNumberish,
    proof: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GroupAdminUpdated(uint256,address,address)"(
      groupId?: BigNumberish | null,
      oldAdmin?: string | null,
      newAdmin?: string | null
    ): GroupAdminUpdatedEventFilter;
    GroupAdminUpdated(
      groupId?: BigNumberish | null,
      oldAdmin?: string | null,
      newAdmin?: string | null
    ): GroupAdminUpdatedEventFilter;

    "ProofVerified(uint256,bytes32)"(
      groupId?: BigNumberish | null,
      signal?: null
    ): ProofVerifiedEventFilter;
    ProofVerified(
      groupId?: BigNumberish | null,
      signal?: null
    ): ProofVerifiedEventFilter;
  };

  estimateGas: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}