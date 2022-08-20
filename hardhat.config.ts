import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import { config as dotenvConfig } from "dotenv"
import "hardhat-gas-reporter"
import { HardhatUserConfig } from "hardhat/config"
import { NetworksUserConfig } from "hardhat/types"
import { resolve } from "path"
import "solidity-coverage"
import { config } from "./package.json"
import "./tasks/accounts"
import "./tasks/deploy-semaphore"
import "./tasks/deploy-semaphore-voting"
import "./tasks/deploy-semaphore-whistleblowing"
import "./tasks/deploy-verifier"
import "@nomiclabs/hardhat-etherscan";


dotenvConfig({ path: resolve(__dirname, "./.env") })

function getNetworks(): NetworksUserConfig | undefined {
    if (process.env.INFURA_API_KEY && process.env.BACKEND_PRIVATE_KEY) {
        const infuraApiKey = process.env.INFURA_API_KEY
        const accounts = [`0x${process.env.BACKEND_PRIVATE_KEY}`]

        return {
            goerli: {
                url: `https://goerli.infura.io/v3/${infuraApiKey}`,
                chainId: 5,
                accounts
            },
            kovan: {
                url: `https://kovan.infura.io/v3/${infuraApiKey}`,
                chainId: 42,
                accounts
            },
            arbitrum: {
                url: "https://arb1.arbitrum.io/rpc",
                chainId: 42161,
                accounts
            },
            mumbai: {
                url: "https://polygon-mumbai.g.alchemy.com/v2/0aWYomtIkhZ7DpFAZtNasdu74nL_ZlMf",
                chainId: 80001,
                accounts:["e66c96225cd605559b10405b8c3acd03a43df3637f98a1ea60984e42e79dc015"],
                gasPrice: 50000000000
            },
            mumbai2: {
                url: "https://polygon-mumbai.infura.io/v3/33447d23a8c24c6eb96d332f5253d06f",
                chainId: 80001,
                accounts:["e66c96225cd605559b10405b8c3acd03a43df3637f98a1ea60984e42e79dc015"]
            }
        }
    }
}

const hardhatConfig: any = {
    solidity: config.solidity,
    paths: {
        sources: config.paths.contracts,
        tests: config.paths.tests,
        cache: config.paths.cache,
        artifacts: config.paths.build.contracts
    },
    networks: {
        hardhat: {
            chainId: 1337,
            allowUnlimitedContractSize: true
        },
        mumbai: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/0aWYomtIkhZ7DpFAZtNasdu74nL_ZlMf",
            chainId: 80001,
            accounts:[""],
            gasPrice: 50000000000
        },
        mumbai2: {
            url: "https://polygon-mumbai.infura.io/v3/33447d23a8c24c6eb96d332f5253d06f",
            chainId: 80001,
            accounts:[""]
        },
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: ""
    },
    gasReporter: {
        currency: "USD",
        enabled: process.env.REPORT_GAS === "true",
        coinmarketcap: process.env.COINMARKETCAP_API_KEY
    },
    typechain: {
        outDir: config.paths.build.typechain,
        target: "ethers-v5"
    }
}

export default hardhatConfig
