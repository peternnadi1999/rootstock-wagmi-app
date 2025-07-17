import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { config } from "./config/wagmiConfig";
import "@rainbow-me/rainbowkit/styles.css";
import Profile from "./components/Profile";
import WalletConnectButton from "./components/WalletConnectButton";

const queryClient = new QueryClient();

// Define a custom theme
const customTheme = {
	...darkTheme(), // Start with darkTheme as a base
	colors: {
		accentColor: "#4CAF50", // Custom green accent
		connectButtonBackground: "#2E7D32", // Darker green for button
		modalBackground: "#1B5E20", // Darker green modal background
		modalText: "#FFFFFF", // White text for contrast
	},
	radii: {
		connectButton: "8px", // Rounded corners for button
		modal: "12px", // Rounded modal edges
	},
	fonts: {
		body: "Arial, sans-serif", // Custom font
	},
	shadows: {
		connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft button shadow
		dialog: "0 12px 32px rgba(0, 0, 0, 0.25)", // Stronger modal/dialog shadow
		profileDetailsAction: "0px 2px 6px rgba(0, 0, 0, 0.08)", // Light tap/click effect
		selectedOption: "0px 0px 0px 2px rgba(21, 32, 166, 0.5)", // Blue ring for selected
		selectedWallet: "0px 0px 0px 2px rgba(126, 217, 87, 0.5)", // Green ring for highlight
		walletLogo: "0px 1px 4px rgba(0, 0, 0, 0.12)", // Gentle lift for logos
	},
};

function App() {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider modalSize="" theme={customTheme}>
					<div className="bg-gray-100 w-full">
						<div className="flex justify-between pt-12 w-11/12 m-auto items-center">
							<h1 className="text-center text-lg font-bold text-black ">
								Rootstock Wagmi App
							</h1>
							<WalletConnectButton />
						</div>
						<Profile />
					</div>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default App;
