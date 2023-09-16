import { ethers } from 'hardhat';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Read environment variables
const rpcEndpoint = process.env.RPC_ENDPOINT;
const privateKey = process.env.PRIVATE_KEY;

if (!rpcEndpoint || !privateKey) {
  console.error('Missing environment variables. Please check your .env file.');
  process.exit(1);
}

async function main() {
  const network = 'SEPOLIA'; // Replace with the network name you want to use
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contract with the account:', deployer.address);

  const tokenContractA = await ethers.getContractFactory('IyTokenTestA');
  const contractA = await tokenContractA.deploy();

  await contractA.deployed();

  console.log('Contract A deployed to address:', contractA.address);

  const tokenContractB = await ethers.getContractFactory('IyTokenTestB');
  const contractB = await tokenContractB.deploy();

  await contractB.deployed();

  console.log('Contract B deployed to address:', contractB.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
