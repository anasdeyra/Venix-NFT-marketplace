import { Center, Stack, Title, Group, Text } from "@mantine/core";
import { useAddress, useNFTCollection } from "@thirdweb-dev/react";
import { useEffect } from "react";
import Avatar from "../components/Avatar";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { useListState } from "@mantine/hooks";
import NFTCard from "../components/NFTCard";
export default function Mynfts() {
  const address = useAddress();

  return (
    <Stack>
      <NFTList />
    </Stack>
  );
}

const NFTList = () => {
  const address = useAddress(null);
  const web3 = createAlchemyWeb3(
    "https://eth-rinkeby.alchemyapi.io/v2/RtqQCt498A_ygtyG2rdl5KI0hFVoi0Xs"
  );
  const [nfts, { setState }] = useListState([]);

  useEffect(() => {
    console.log(address);
    if (address) {
      (async () => {
        const responnse = await web3.alchemy.getNfts({
          owner: address,
        });
        setState(responnse.ownedNfts);
        console.log(address, ": ", responnse.ownedNfts);
      })();
    }
  }, [address]);

  return (
    <Stack spacing={"xl"}>
      <Center>
        <Title>My NFTs</Title>
      </Center>
      <Group>
        {nfts?.map(({ media: [image], metadata: { name } }, i) => (
          <NFTCard
            key={i}
            owner={"anasdeyra"}
            name={name}
            image={image.gateway}
            link={image.gateway}
          />
        ))}
      </Group>
    </Stack>
  );
};
