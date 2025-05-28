import { createConfig, http } from "wagmi";
import { defineChain } from "viem";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

// Define the Rootstock Testnet chain
export const rootstockTestnet = defineChain({
  id: 31,
  name: "Rootstock Testnet",
  network: "rootstock-testnet",
  nativeCurrency: {
    name: "Test Smart Bitcoin",
    symbol: "tRBTC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://public-node.testnet.rsk.co"],
    },
  },
  blockExplorers: {
    default: {
      name: "Rootstock Testnet Explorer",
      url: "https://explorer.testnet.rsk.co",
    },
  },
  testnet: true,
});

// Configure Wagmi with RainbowKit
export const config = getDefaultConfig({
  appName: "Rootstock Wagmi App",
  projectId: "process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID", // Replace with your WalletConnect project ID
  chains: [rootstockTestnet],
  transports: {
    [rootstockTestnet.id]: http(),
  },
});