/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SemaphoreWhistleblowing,
  SemaphoreWhistleblowingInterface,
} from "../../../contracts/extensions/SemaphoreWhistleblowing";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8[]",
        name: "depths",
        type: "uint8[]",
      },
      {
        internalType: "address[]",
        name: "verifierAddresses",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    inputs: [],
    name: "Semaphore__YouAreUsingTheSameNillifierTwice",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "editor",
        type: "address",
      },
    ],
    name: "EntityCreated",
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
        name: "entityId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "leak",
        type: "bytes32",
      },
    ],
    name: "LeakPublished",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
    ],
    name: "NullifierHashAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
    ],
    name: "addWhistleblower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "editor",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "depth",
        type: "uint8",
      },
    ],
    name: "createEntity",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leak",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
      {
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]",
      },
    ],
    name: "publishLeak",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "proofSiblings",
        type: "uint256[]",
      },
      {
        internalType: "uint8[]",
        name: "proofPathIndices",
        type: "uint8[]",
      },
    ],
    name: "removeWhistleblower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cdc38038062001cdc8339818101604052810190620000379190620002f5565b80518251146200007e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000075906200038f565b60405180910390fd5b60005b82518160ff1610156200017a57818160ff1681518110620000cb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160026000858460ff168151811062000114577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160ff1660ff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600101905062000081565b505050620005a9565b60006200019a6200019484620003da565b620003b1565b90508083825260208201905082856020860282011115620001ba57600080fd5b60005b85811015620001ee5781620001d388826200026d565b845260208401935060208301925050600181019050620001bd565b5050509392505050565b60006200020f620002098462000409565b620003b1565b905080838252602082019050828560208602820111156200022f57600080fd5b60005b85811015620002635781620002488882620002de565b84526020840193506020830192505060018101905062000232565b5050509392505050565b6000815190506200027e8162000575565b92915050565b600082601f8301126200029657600080fd5b8151620002a884826020860162000183565b91505092915050565b600082601f830112620002c357600080fd5b8151620002d5848260208601620001f8565b91505092915050565b600081519050620002ef816200058f565b92915050565b600080604083850312156200030957600080fd5b600083015167ffffffffffffffff8111156200032457600080fd5b6200033285828601620002b1565b925050602083015167ffffffffffffffff8111156200035057600080fd5b6200035e8582860162000284565b9150509250929050565b60006200037760478362000438565b9150620003848262000500565b606082019050919050565b60006020820190508181036000830152620003aa8162000368565b9050919050565b6000620003bd620003d0565b9050620003cb82826200048a565b919050565b6000604051905090565b600067ffffffffffffffff821115620003f857620003f7620004c0565b5b602082029050602081019050919050565b600067ffffffffffffffff821115620004275762000426620004c0565b5b602082029050602081019050919050565b600082825260208201905092915050565b600062000456826200045d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b6200049582620004ef565b810181811067ffffffffffffffff82111715620004b757620004b6620004c0565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f53656d6170686f726557686973746c65626c6f77696e673a20706172616d657460008201527f657273206c6973747320646f6573206e6f742068617665207468652073616d6560208201527f206c656e67746800000000000000000000000000000000000000000000000000604082015250565b620005808162000449565b81146200058c57600080fd5b50565b6200059a816200047d565b8114620005a657600080fd5b50565b61172380620005b96000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638fe035871161005b5780638fe03587146100ea5780639b24b3b014610106578063b9c78c2b14610136578063ca7e534c146101665761007d565b8063337ee54b146100825780635027000d1461009e57806375e618c9146100ba575b600080fd5b61009c60048036038101906100979190610e4c565b610182565b005b6100b860048036038101906100b39190610ed7565b6102ce565b005b6100d460048036038101906100cf9190610e23565b61036e565b6040516100e19190611450565b60405180910390f35b61010460048036038101906100ff9190610e9b565b61039b565b005b610120600480360381019061011b9190610e23565b610433565b60405161012d919061140c565b60405180910390f35b610150600480360381019061014b9190610e23565b610453565b60405161015d919061140c565b60405180910390f35b610180600480360381019061017b9190610dbf565b610473565b005b600073ffffffffffffffffffffffffffffffffffffffff16600260008360ff1660ff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561022b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022290611315565b60405180910390fd5b610237838260006105a4565b82600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f5340f46ccfdbf46cea681e7481c711c8838cbcda1356cab6f31a2d0b2cd3525a846040516102c1919061140c565b60405180910390a2505050565b85600360006102db610700565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548114610357576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034e90611335565b60405180910390fd5b610365878787878787610708565b50505050505050565b60006001600083815260200190815260200160002060000160009054906101000a900460ff169050919050565b81600360006103a8610700565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548114610424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041b90611335565b60405180910390fd5b61042e8383610823565b505050565b600060016000838152602001908152602001600020600101549050919050565b600060016000838152602001908152602001600020600201549050919050565b8160036000610480610700565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481146104fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f390611335565b60405180910390fd5b60006105078461036e565b9050600061051485610433565b90506000600260008460ff1660ff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610562888389898986610932565b857ff3fa3ff7a3348de75b04ecec5ac199157e2b877c68518dd37b48751b986ad7898960405161059291906112fa565b60405180910390a25050505050505050565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183106105fd576040517fa61c78ca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006106088461036e565b60ff1614610642576040517f8121725b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600084815260200190815260200160002073__$0c6eb7207c37accf1552a1c47686411ac0$__63b4bdd117909184846040518463ffffffff1660e01b8152600401610691939291906113d5565b60006040518083038186803b1580156106a957600080fd5b505af41580156106bd573d6000803e3d6000fd5b50505050827fc3082aa494e9088c2c9f0fb62a0b6bd46e6699acb94cfba35be29b95a93f68c883836040516106f392919061146b565b60405180910390a2505050565b600033905090565b60006107138761036e565b60ff16141561074e576040517f029f057900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600087815260200190815260200160002073__$0c6eb7207c37accf1552a1c47686411ac0$__630629596f909187878787876040518763ffffffff1660e01b81526004016107a39695949392919061137e565b60006040518083038186803b1580156107bb57600080fd5b505af41580156107cf573d6000803e3d6000fd5b5050505060006107de87610433565b9050867fe270325ded177064d7bda473e6519ef40a291058c41286f71a6e4872f1e9ab5c8783604051610812929190611427565b60405180910390a250505050505050565b600061082e8361036e565b60ff161415610869576040517f029f057900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600083815260200190815260200160002073__$0c6eb7207c37accf1552a1c47686411ac0$__63168703fa9091836040518363ffffffff1660e01b81526004016108b6929190611355565b60006040518083038186803b1580156108ce57600080fd5b505af41580156108e2573d6000803e3d6000fd5b5050505060006108f183610433565b9050827f03fd27265b7dd1f55558bedc22a58fa3b10afb1be776e614bd5a7ba7b94994068383604051610925929190611427565b60405180910390a2505050565b60008085815260200190815260200160002060009054906101000a900460ff1615610989576040517f948d067400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061099487610c82565b90508173ffffffffffffffffffffffffffffffffffffffff16635fe8c13b6040518060400160405280866000600881106109f7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020135815260200186600160088110610a3b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201358152506040518060400160405280604051806040016040528089600260088110610a93577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020135815260200189600360088110610ad7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201358152508152602001604051806040016040528089600460088110610b29577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020135815260200189600560088110610b6d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020135815250815250604051806040016040528088600660088110610bbd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020135815260200188600760088110610c01577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002013581525060405180608001604052808c81526020018b81526020018781526020018a8152506040518563ffffffff1660e01b8152600401610c4994939291906112b3565b60006040518083038186803b158015610c6157600080fd5b505afa158015610c75573d6000803e3d6000fd5b5050505050505050505050565b6000600882604051602001610c979190611298565b6040516020818303038152906040528051906020012060001c901c9050919050565b600081359050610cc881611691565b92915050565b600081905082602060080282011115610ce657600080fd5b92915050565b60008083601f840112610cfe57600080fd5b8235905067ffffffffffffffff811115610d1757600080fd5b602083019150836020820283011115610d2f57600080fd5b9250929050565b60008083601f840112610d4857600080fd5b8235905067ffffffffffffffff811115610d6157600080fd5b602083019150836020820283011115610d7957600080fd5b9250929050565b600081359050610d8f816116a8565b92915050565b600081359050610da4816116bf565b92915050565b600081359050610db9816116d6565b92915050565b6000806000806101608587031215610dd657600080fd5b6000610de487828801610d80565b9450506020610df587828801610d95565b9350506040610e0687828801610d95565b9250506060610e1787828801610cce565b91505092959194509250565b600060208284031215610e3557600080fd5b6000610e4384828501610d95565b91505092915050565b600080600060608486031215610e6157600080fd5b6000610e6f86828701610d95565b9350506020610e8086828701610cb9565b9250506040610e9186828701610daa565b9150509250925092565b60008060408385031215610eae57600080fd5b6000610ebc85828601610d95565b9250506020610ecd85828601610d95565b9150509250929050565b60008060008060008060808789031215610ef057600080fd5b6000610efe89828a01610d95565b9650506020610f0f89828a01610d95565b955050604087013567ffffffffffffffff811115610f2c57600080fd5b610f3889828a01610cec565b9450945050606087013567ffffffffffffffff811115610f5757600080fd5b610f6389828a01610d36565b92509250509295509295509295565b6000610f7e8383611011565b60408301905092915050565b6000610f96838361123e565b60208301905092915050565b6000610fae8383611289565b60208301905092915050565b610fc3816114bc565b610fcd8184611511565b9250610fd882611494565b8060005b83811015611009578151610ff08782610f72565b9650610ffb836114dd565b925050600181019050610fdc565b505050505050565b61101a816114c7565b611024818461151c565b925061102f8261149e565b8060005b838110156110605781516110478782610f8a565b9650611052836114ea565b925050600181019050611033565b505050505050565b611071816114c7565b61107b8184611527565b92506110868261149e565b8060005b838110156110b757815161109e8782610f8a565b96506110a9836114ea565b92505060018101905061108a565b505050505050565b6110c8816114d2565b6110d28184611532565b92506110dd826114a8565b8060005b8381101561110e5781516110f58782610f8a565b9650611100836114f7565b9250506001810190506110e1565b505050505050565b6000611122838561153d565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561115157600080fd5b6020830292506111628385846115da565b82840190509392505050565b600061117a838561154e565b9350611185826114b2565b8060005b858110156111be5761119b8284611570565b6111a58882610fa2565b97506111b083611504565b925050600181019050611189565b5085925050509392505050565b6111d481611599565b82525050565b6111eb6111e682611599565b6115e9565b82525050565b60006111fe60358361155f565b9150611209826115f3565b604082019050919050565b600061122160318361155f565b915061122c82611642565b604082019050919050565b8082525050565b611247816115c3565b82525050565b611256816115c3565b82525050565b611265816115c3565b82525050565b611274816115cd565b82525050565b611283816115cd565b82525050565b611292816115cd565b82525050565b60006112a482846111da565b60208201915081905092915050565b6000610180820190506112c96000830187611068565b6112d66040830186610fba565b6112e360c0830185611068565b6112f16101008301846110bf565b95945050505050565b600060208201905061130f60008301846111cb565b92915050565b6000602082019050818103600083015261132e816111f1565b9050919050565b6000602082019050818103600083015261134e81611214565b9050919050565b600060408201905061136a6000830185611237565b611377602083018461125c565b9392505050565b60006080820190506113936000830189611237565b6113a0602083018861125c565b81810360408301526113b3818688611116565b905081810360608301526113c881848661116e565b9050979650505050505050565b60006060820190506113ea6000830186611237565b6113f7602083018561127a565b611404604083018461125c565b949350505050565b6000602082019050611421600083018461124d565b92915050565b600060408201905061143c600083018561124d565b611449602083018461124d565b9392505050565b6000602082019050611465600083018461126b565b92915050565b6000604082019050611480600083018561126b565b61148d602083018461124d565b9392505050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b600060029050919050565b600060029050919050565b600060049050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061157f6020840184610daa565b905092915050565b6000611592826115a3565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b6000819050919050565b7f53656d6170686f726557686973746c65626c6f77696e673a206465707468207660008201527f616c7565206973206e6f7420737570706f727465640000000000000000000000602082015250565b7f53656d6170686f726557686973746c65626c6f77696e673a2063616c6c65722060008201527f6973206e6f742074686520656469746f72000000000000000000000000000000602082015250565b61169a81611587565b81146116a557600080fd5b50565b6116b181611599565b81146116bc57600080fd5b50565b6116c8816115c3565b81146116d357600080fd5b50565b6116df816115cd565b81146116ea57600080fd5b5056fea26469706673582212207f967fd7d1fe7ce565626dd6b39821a56a3e29d38e1ea4bd942b0f3166e7ce8e64736f6c63430008040033";

type SemaphoreWhistleblowingConstructorParams =
  | [
      linkLibraryAddresses: SemaphoreWhistleblowingLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SemaphoreWhistleblowingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class SemaphoreWhistleblowing__factory extends ContractFactory {
  constructor(...args: SemaphoreWhistleblowingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        SemaphoreWhistleblowing__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: SemaphoreWhistleblowingLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$0c6eb7207c37accf1552a1c47686411ac0\\$__", "g"),
      linkLibraryAddresses[
        "@zk-kit/incremental-merkle-tree.sol/IncrementalBinaryTree.sol:IncrementalBinaryTree"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    depths: BigNumberish[],
    verifierAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SemaphoreWhistleblowing> {
    return super.deploy(
      depths,
      verifierAddresses,
      overrides || {}
    ) as Promise<SemaphoreWhistleblowing>;
  }
  override getDeployTransaction(
    depths: BigNumberish[],
    verifierAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      depths,
      verifierAddresses,
      overrides || {}
    );
  }
  override attach(address: string): SemaphoreWhistleblowing {
    return super.attach(address) as SemaphoreWhistleblowing;
  }
  override connect(signer: Signer): SemaphoreWhistleblowing__factory {
    return super.connect(signer) as SemaphoreWhistleblowing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SemaphoreWhistleblowingInterface {
    return new utils.Interface(_abi) as SemaphoreWhistleblowingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SemaphoreWhistleblowing {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SemaphoreWhistleblowing;
  }
}

export interface SemaphoreWhistleblowingLibraryAddresses {
  ["@zk-kit/incremental-merkle-tree.sol/IncrementalBinaryTree.sol:IncrementalBinaryTree"]: string;
}