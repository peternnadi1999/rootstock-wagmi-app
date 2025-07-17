import { ConnectButton } from "@rainbow-me/rainbowkit";

const WalletConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div className="mb-4">
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="w-full py-2 px-4 rounded-md text-white bg-green-600 hover:bg-green-700 transition-all"
                  >
                    Connect Wallet
                  </button>
                );
              }
              return (
                <div className="flex items-center bg-green-600 rounded-2xl px-3 py-2 hover:bg-green-700 space-x-2">
                  <img
                    src="/logo.jpg" // Replace with your image path
                    alt="Custom Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <button
                    onClick={openAccountModal}
                    className="text-sm text-white hover:underline"
                  >
                    {account.displayName}
                  </button>
                  {chain.hasIcon && (
                    <div
                      onClick={openChainModal}
                      className="cursor-pointer"
                    >
                      {chain.iconUrl && (
                        <img
                          src={chain.iconUrl}
                          alt={chain.name}
                          className="w-6 h-6"
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletConnectButton;