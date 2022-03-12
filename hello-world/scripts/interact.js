// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;


const { ethers } = require("hardhat");

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// interact.js

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    console.log("Heyy!!");
    console.log("########");
    console.log("########");
    const message = await helloWorldContract.getGreeting();
    console.log("Izu is the writer of this contract.....");
  }
  main();