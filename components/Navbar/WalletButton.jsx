import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import React from "react";
import Button from "../Button";

export default function WalletButton({ type = "flex", children }) {
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();
  const connectWallet = (
    <Button
      onClick={() => {
        connect("injected");
      }}
    >
      Connect
    </Button>
  );
  const disconnectWallet = (
    <Button color="red" variant="light" onClick={disconnect}>
      Disconnect
    </Button>
  );
  if (type === "connect" && !address) return connectWallet;
  if (type === "disconnect" && !address) return disconnectWallet;
  if (type === "flex") return address ? disconnectWallet : connectWallet;
  return <>{children}</>;
}
