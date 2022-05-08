import {
  createStyles,
  Group,
  Image,
  Stack,
  Title,
  Transition,
  Button,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  useNFTCollection,
  useAddress,
  useMetamask,
  useDisconnect,
  useAccount,
  useSigner,
} from "@thirdweb-dev/react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: "10vw",
  },
  title: {
    fontSize: theme.fontSizes.xl * 3,
    zIndex: "1",
    maxWidth: "80vw",
    color: theme.colorScheme === "dark" ? "white" : "black",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: theme.fontSizes.xl * 2,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.xl * 1.5,
    },
  },
  image: {
    position: "absolute",
    right: "2%",
    top: "16%",
    transform: "scale(0.9)",
    overflow: "hidden",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
  },
  grid: {},
  featured: {
    marginTop: theme.spacing.xl * 5,
  },
}));

export default function Home() {
  const [scroll, scrollTo] = useWindowScroll();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    scrollTo({ y: 0 });
  }, []);
  const { classes } = useStyles();
  const address = useAddress();
  const collection = useNFTCollection(
    "0xa71DE17C11e429dA43CeC89907bc056d0e9871a3"
  );
  const account = useAccount();

  const signer = useSigner();

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
      <Transition
        mounted={mounted}
        transition="slide-up"
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <Stack py={"xl"} style={styles}>
            <Title className={classes.title}>
              Create, sell, buy, collect magnificent NFTs
            </Title>

            <Group sx={{ zIndex: "1" }} mt={"xl"} spacing={"xl"}>
              <Link href={"/marketplace"}>
                <Button
                  gradient={{ from: "indigo", to: "cyan" }}
                  variant="gradient"
                  size="xl"
                >
                  Explore
                </Button>
              </Link>
              <Link href={"/my-nfts"}>
                <Button variant="outline" size="xl">
                  Create
                </Button>
              </Link>
            </Group>
          </Stack>
        )}
      </Transition>

      <Transition
        mounted={mounted}
        transition="slide-up"
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <Image
            style={styles}
            className={classes.image}
            src="/zombie-hand.webp"
            alt="illustration"
            width={"615"}
            height={"912"}
          />
        )}
      </Transition>

      <Stack className={classes.featured}>
        <Title>Featured</Title>
      </Stack>
    </Stack>
  );
}
