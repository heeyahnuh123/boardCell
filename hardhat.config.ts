
import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    sepolia: {
      url: process.env.SEPOLIARPC,
      //@ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at n/
    apiKey: process.env.BASE_API_KEY,
  },
}

export default config