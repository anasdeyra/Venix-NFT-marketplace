import { Title } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { useMarketplace } from "@thirdweb-dev/react";
import { useEffect } from "react";

export default function Marketplace() {
  const marketplace = useMarketplace(
    process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS
  );

  const [listings, listingsHandlers] = useListState([]);
  async function getListings() {
    const s = await marketplace.getActiveListings();
    listingsHandlers.setState(s);
    console.log(s);
  }
  useEffect(() => {
    getListings();
  }, []);

  return <Title>market</Title>;
}
