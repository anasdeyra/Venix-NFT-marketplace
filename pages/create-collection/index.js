import {
  Button,
  Container,
  Input,
  InputWrapper,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { useSDK, useAddress } from "@thirdweb-dev/react";
import { useState } from "react";

function useCreateCollection() {
  const sdk = useSDK();
  const address = useAddress();

  return async function create({ name, description, image, fee }) {
    return sdk.deployer.deployNFTCollection({
      name,
      description,
      image: image[0],
      primary_sale_recipient: address,
      seller_fee_basis_points: fee * 100,
    });
  };
}

export default function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const createCollection = useCreateCollection();

  const onSubmit = (data) => {
    setIsLoading(true);
    createCollection(data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        // console.log(err?.reason);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container size={"sm"} my={"4xl"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title mb={44}>Create a collection</Title>
        <Stack>
          <TextInput
            {...register("name", { required: true })}
            label="Collection name"
            placeholder="Collection name"
          />
          <Textarea
            {...register("description", { required: true })}
            label="Collection description"
            placeholder="Collection description"
            minRows={3}
          />
          <InputWrapper label="Collection image">
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
            Create collection
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
