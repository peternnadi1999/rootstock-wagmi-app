# Rootstock Wagmi App

Welcome to the **Rootstock Wagmi App**, a React-based decentralized application (dApp) that leverages Wagmi Hooks and RainbowKit to interact with the Rootstock blockchain. This project demonstrates how to connect wallets, fetch account balances, and interact with smart contracts (e.g., an ERC-20 token) on the Rootstock Testnet, using Vite as the build tool and Tailwind CSS for styling.

## Overview

This app showcases:
- **React** with **Vite**: A fast and modern build tool for a seamless development experience.
- **Wagmi Hooks**: For blockchain interactions, including wallet connections, balance fetching, and smart contract calls.
- **RainbowKit**: A polished UI for wallet connections (e.g., MetaMask, WalletConnect).
- **Rootstock Blockchain**: An EVM-compatible sidechain to Bitcoin, using tRBTC on the Testnet.
- **Tailwind CSS**: Utility-first CSS framework for responsive and customizable styling.

The app allows users to connect their wallets, view their tRBTC and token balances, and mint tokens from a deployed ERC-20 contract.

## Features

- Connect to wallets using MetaMask or WalletConnect via RainbowKit.
- Display the connected wallet address and tRBTC balance.
- Fetch and display the balance of an ERC-20 token.
- Mint new tokens via a smart contract interaction.
- Responsive design with Tailwind CSS.
- Deployable to platforms like Vercel.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**: Version 16 or higher (recommended to use NVM for version management).
- **Yarn**: A package manager (install with `npm install -g yarn`).
- **MetaMask**: Browser extension for wallet interactions.
- **Rootstock Testnet tRBTC**: Obtain test RBTC from the Rootstock Testnet Faucet (`https://faucet.rootstock.io/`).
- **WalletConnect Project ID**: Sign up at `https://cloud.walletconnect.com` for a project ID.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/peternnadi1999/rootstock-wagmi-app
   cd rootstock-wagmi-app
   ```

2. **Install Dependencies**:
   Use Yarn to install the required packages:
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your WalletConnect project ID:
     ```
     VITE_WALLET_CONNECT_PROJECT_ID=your-walletconnect-project-id
     ```
   - Replace `your-walletconnect-project-id` with the ID from WalletConnect Cloud.

4. **Configure MetaMask**:
   - Add the Rootstock Testnet to MetaMask:
     - Network Name: `Rootstock Testnet`
     - RPC URL: `https://public-node.testnet.rsk.co`
     - Chain ID: `31`
     - Currency Symbol: `tRBTC`
     - Block Explorer URL: `https://explorer.testnet.rsk.co`
   - Switch to the Rootstock Testnet and fund your wallet with test RBTC from the faucet.

## Usage

1. **Start the Development Server**:
   Run the following command to start the app:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the port specified in the terminal) in your browser.

2. **Interact with the App**:
   - Click the "Connect Wallet" button (provided by RainbowKit) to connect your MetaMask or WalletConnect wallet.
   - View your tRBTC balance and ERC-20 token balance (if a contract is deployed).
   - Enter an amount and click "Mint Tokens" to mint new tokens (requires a deployed ERC-20 contract with a `mint` function).

## Project Structure

```
rootstock-wagmi-app/
├── node_modules/              # Node.js dependencies
├── public/                    # Static assets
│   └── index.html            # Vite entry point
├── src/                       # Source code
│   ├── assets/                # Static assets (e.g., images, fonts)
│   ├── components/            # React components
│   │   ├── ConnectButton.jsx  # RainbowKit ConnectButton component (custom or imported)
│   │   └── Profile.jsx        # Main component for wallet and contract interactions
│   ├── config/                # Configuration files
│   │   └── wagmiConfig.jsx    # Wagmi configuration for Rootstock (assumed name)
│   ├── App.jsx                # App entry point with providers
│   └── index.css              # Tailwind CSS imports
├── .env.local                 # Environment variables
├── .gitignore                 # Git ignore file
├── index.html                 # Vite entry point (public/)
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Lock file for dependencies
├── README.md                  # This file
└── vite.config.js             # Vite configuration
```

## Deploying the App

1. **Build the Project**:
   ```bash
   yarn build
   ```
   This generates a `dist` folder with production-ready files.

2. **Deploy to Vercel**:
   - Install the Vercel CLI globally:
     ```bash
     npm install -g vercel
     ```
   - Deploy the app:
     ```bash
     vercel
     ```
   - Follow the prompts and add the `VITE_WALLET_CONNECT_PROJECT_ID` environment variable in the Vercel dashboard.

3. **Test the Deployed App**:
   - Visit the provided Vercel URL (`https://rootstock-wagmi-rbzuueeug-peternnadi1999s-projects.vercel.app/`) and test the functionality.


- **RainbowKit Theme**: Update `App.jsx` to use a custom theme (e.g., `darkTheme()` from RainbowKit).
- **Contract Address**: Replace `ERC20_ADDRESS` in `abi.js` with your deployed ERC-20 contract address.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests. Ensure your code follows these guidelines:
- Use consistent formatting with Prettier.
- Write clear commit messages.
- Test changes thoroughly on the Rootstock Testnet.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React**: For the frontend framework (https://reactjs.org).
- **Vite**: For the fast build tool (https://vitejs.dev).
- **Wagmi**: For blockchain Hooks (https://wagmi.sh).
- **RainbowKit**: For wallet UI (https://www.rainbowkit.com).
- **Rootstock**: For the EVM-compatible blockchain (https://rootstock.io).
- **Tailwind CSS**: For styling (https://tailwindcss.com).

## Contact

For questions or support, reach out via the GitHub issues page or email `peternnadi1999@gmail.com`.


