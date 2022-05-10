import { Title } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { useMarketplace } from "@thirdweb-dev/react";
import { useEffect } from "react";

export default function Marketplace() {
  const marketplace = useMarketplace(
    "0x6e68E975d0d6d57E8EBdBdC346b022d381F42667"
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
