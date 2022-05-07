import {
  Container,
  createStyles,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Title,
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
import Button from "../components/Button";

const useStyles = createStyles((theme) => ({
  container: {},
  title: {
    fontSize: theme.fontSizes.xl * 3,
    marginTop: theme.spacing.xl * 6,
  },
  image: {
    position: "absolute",
    right: "-8%",
    top: "22%",
    transform: "scale(1.5)",
    overflow: "hidden",
  },
  grid: {},
  featured: {
    marginTop: theme.spacing.xl * 5,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const address = useAddress();
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
    <Stack spacing={"xl"} className={classes.container}>
      <SimpleGrid className={classes.grid} cols={2}>
        <Stack>
          <Title className={classes.title}>
            Create, sell, buy, collect magneficent NFTs
          </Title>
          <Group mt={"xl"} spacing={"xl"}>
            <Button size="xl">Explore</Button>
            <Button variant="subtle" size="xl">
              Create
            </Button>
          </Group>
        </Stack>
        <Image className={classes.image} src="/bg.png" alt="illustration" />
      </SimpleGrid>
      <Container className={classes.featured}>
        {" "}
        <Title>Featured</Title>
      </Container>
    </Stack>
  );
}
