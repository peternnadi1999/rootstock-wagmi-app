import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { config } from "./config/wagmiConfig";
import "@rainbow-me/rainbowkit/styles.css"; // Import RainbowKit CSS
import Profile from "./components/Profile";
import WalletConnectButton from "./components/WalletConnectButton";

// Initialize TanStack Query client
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
};

function App() {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider theme={customTheme}>
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
