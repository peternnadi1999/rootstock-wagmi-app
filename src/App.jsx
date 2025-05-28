import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { config } from "./config/wagmiConfig";
import "@rainbow-me/rainbowkit/styles.css"; // Import RainbowKit CSS
import Profile from "./components/Profile";
import ConnectsButton from "./components/ConnectButton";

// Initialize TanStack Query client
const queryClient = new QueryClient();

function App() {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider theme={darkTheme()}>
					<div className="bg-gray-100 w-full">
						<div className="flex justify-between pt-12 w-11/12 m-auto items-center">
							<h1 className="text-center text-lg font-bold text-black ">
								Rootstock Wagmi App
							</h1>
							<ConnectsButton />
						</div>
						<Profile />
					</div>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default App;
