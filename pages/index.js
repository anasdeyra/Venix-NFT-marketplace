import {
  Button,
  Center,
  Group,
  InputWrapper,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import {
  useNFTCollection,
  useAddress,
  useMetamask,
  useDisconnect,
} from "@thirdweb-dev/react";

export default function Home() {
  const { onSubmit, getInputProps } = useForm({
    initialValues: { name: "vegeta", description: "he loves rain" },
  });
  const address = useAddress();
  const connectWallet = useMetamask();
  const disconnectWallet = useDisconnect();
  const collection = useNFTCollection(
    "0xa71DE17C11e429dA43CeC89907bc056d0e9871a3"
  );

  async function getAll() {
    try {
      console.log(await collection?.getAll());
    } catch (error) {
      console.log(error);
    }
  }

  async function mint(e) {
    e.preventDefault();
    const [name, des, image] = e.target.elements;
    try {
      console.log(
        await collection?.mintToSelf({
          name: name.value,
          description: des.value,
          image: image.files[0],
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Center>
      <Paper
        sx={{ maxWidth: "90vw" }}
        mt={"xl"}
        radius={"xl"}
        shadow={"xs"}
        p={"xl"}
      >
        <Center>
          {address ? (
            <Button
              color={"red"}
              variant="outline"
              size="lg"
              radius={"xl"}
              onClick={() => {
                disconnectWallet();
              }}
            >
              Disconnect wallet
            </Button>
          ) : (
            <Button
              color={"indigo"}
              size="lg"
              radius={"xl"}
              onClick={() => {
                connectWallet("injected");
              }}
            >
              Connect wallet
            </Button>
          )}
        </Center>
        {address && (
          <Center>
            <Text mt={"xl"}>wallet: {address}</Text>
          </Center>
        )}
        <Button onClick={getAll}>get all</Button>
        <form onSubmit={mint}>
          <Stack>
            <InputWrapper label="name" placeholder="Your cool NFT">
              <TextInput {...getInputProps("name")} type="text" />
            </InputWrapper>
            <InputWrapper label="description" placeholder="its very cool NFT">
              <Textarea {...getInputProps("description")} />
            </InputWrapper>
            <InputWrapper label="image">
              <input type={"file"} />
            </InputWrapper>
          </Stack>
          <Button type="submit" color={"indigo"} mt={"xl"} radius={"xl"}>
            Mint
          </Button>
        </form>
      </Paper>
    </Center>
  );
}
