import { ethers } from 'hardhat';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contract with the account:', deployer.address);

  // Compile the Solidity contract if necessary
  const ContractFactory = await ethers.getContractFactory('ColorBoard');

  // Deploy the contract
  const contract = await ContractFactory.deploy();

  await contract.deployed();

  console.log('Contract deployed to address:', contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
