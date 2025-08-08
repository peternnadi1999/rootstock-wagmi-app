import {
  useAccount,
  useBalance,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { erc20Abi } from "../config/abi";
import { useState } from "react";
import { formatUnits } from "viem";

function Profile() {
  const { address, isConnected } = useAccount();
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address: address,
  });

  const {
    data: tokenBalance,
    isLoading: isTokenBalanceLoading,
    refetch,
  } = useReadContract({
    abi: erc20Abi,
    address: process.env.ERC20_ADDRESS,
    functionName: "balanceOf",
    args: [address],
  });

  const {
    writeContract,
    isPending: isMinting,
    data: hash,
    error,
  } = useWriteContract();

  const [mintAmount, setMintAmount] = useState("");

  // Wait for transaction receipt
  useWaitForTransactionReceipt({
    hash,
    onSuccess: () => {
      refetch(); // Refetch balance once transaction is confirmed
    },
  });

  const handleMint = async () => {
    try {
      await writeContract({
        abi: erc20Abi,
        address: process.env.ERC20_ADDRESS,
        functionName: "mint",
        args: [BigInt(mintAmount)],
      });
    } catch (err) {
      console.error("Minting failed:", err);
    }
  };

  return (
    <div className="flex justify-center m-auto w-1/2 items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full bg-white p-6 rounded-xl shadow-md text-center">
        {isConnected && address && (
          <>
            <p className="text-sm text-gray-800 mb-2 break-all">
              <strong>Connected Address:</strong> <br /> {address}
            </p>
            <p className="text-sm text-gray-800 mb-2">
              <strong>Balance:</strong>{" "}
              {isBalanceLoading
                ? "Loading..."
                : balance
                ? `${balance.formatted} tRBTC`
                : "Error fetching balance"}
            </p>
            <p className="text-sm text-gray-800 mb-4">
              <strong>Token Balance:</strong>{" "}
              {isTokenBalanceLoading
                ? "Loading..."
                : tokenBalance
                ? `${formatUnits(tokenBalance, 18)} Tokens`
                : "Error fetching token balance"}
            </p>

            <input
              type="number"
              placeholder="Amount to mint"
              value={mintAmount}
              onChange={(e) => setMintAmount(e.target.value)}
              className="w-full px-4 text-black py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleMint}
              disabled={isMinting || !mintAmount}
              className={`w-full py-2 px-4 rounded-md text-white transition-all ${
                isMinting || !mintAmount
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isMinting ? "Minting..." : "Mint Tokens"}
            </button>

            {error && (
              <p className="mt-3 text-red-600 font-medium">
                Error: {error.message}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;