import React from "react";
import Link from "next/link";
import { Stack, Transition, Title, Group, Button, Image } from "@mantine/core";

export default function Hero({ mounted, classes }) {
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

            <Group
              sx={{
                zIndex: "1",
              }}
              mt={"xl"}
              spacing={"xl"}
            >
              <Link href={"/marketplace"}>
                <Button radius={"md"} size="xl">
                  Explore Now
                </Button>
              </Link>
              <Link href={"/my-nfts"}>
                <Button radius={"md"} variant="outline" size="xl">
                  Get Started
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
    </Stack>
  );
}
