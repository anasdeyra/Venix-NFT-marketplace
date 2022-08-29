import {
  Button,
  Container,
  Input,
  InputWrapper,
  NativeSelect,
  Select,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { useSDK, useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

async function filterCollections(filteredData) {
  const filteredCollections = await filteredData.reduce(
    async (memo, { address, metadata }) => {
      const results = await memo;

      const collection = await metadata();
      return [...results, { value: address, label: collection.name }];
    },
    []
  );
  return filteredCollections;
}

export default function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [userCollections, setUserCollections] = useState([]);

  const sdk = useSDK();
  const address = useAddress();

  const getMycollections = async () => {
    return await sdk.getContractList(address);
  };

  const onSubmit = ({ name, description, image, collection }) => {
    if (!address) return false;
    setIsLoading(true);
    const c = sdk.getNFTCollection(collection);
    c.mintTo(address, { name, description, image: image[0] })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.reason);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!address) return;
    getMycollections()
      .then((data) => {
        const filteredData = data.filter(
          ({ contractType }) => contractType === "nft-collection"
        );

        filterCollections(filteredData).then((data) => {
          setUserCollections(data);
        });
      })
      .catch((err) => {
        // console.log(err);
      });

    return () => {
      getMycollections();
    };
  }, [address]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title mb={44}>Create an NFT</Title>
        <Stack>
          <NativeSelect
            name="collection"
            {...register("collection", { required: true })}
            label="Collection"
            placeholder="Select one of your collections"
            data={userCollections}
          />
          <TextInput
            {...register("name", { required: true })}
            label="NFT name"
            placeholder="NFT name"
          />
          <Textarea
            {...register("description", { required: true })}
            label="NFT description"
            placeholder="NFT description"
            minRows={3}
          />
          <InputWrapper label="NFT image">
            <Input {...register("image", { required: true })} type={"file"} />
          </InputWrapper>
          <InputWrapper label="Royality fee %">
            <Input
              type={"number"}
              defaultValue={3}
              {...register("fee", { required: true, valueAsNumber: true })}
              placeholder="Royality fee"
            />
          </InputWrapper>
          <Button loading={isLoading} mt={"xl"} type="submit">
            Mint NFT
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
