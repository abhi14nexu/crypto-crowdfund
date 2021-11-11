import web3 from "../utils/InitWeb3";

const abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "call_deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
    ],
    name: "createProject",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getProjects",
    outputs: [
      {
        internalType: "contract Project[]",
        name: "",
        type: "address[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
const address = "0x8414Ba120ddF72c8EF498d406c3f2888B01B8402";
const instance = new web3.eth.Contract(abi, address);

export default instance;
