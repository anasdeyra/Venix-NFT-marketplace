import { Center, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { useAddress } from "@thirdweb-dev/react";
import React from "react";
import Avatar from "../components/Avatar";

export default function Profile() {
  const address = useAddress();
  return (
    <Stack>
      <Center>
        <Avatar address={address} size="128px" />
      </Center>
      <Center>
        <Link passHref href="/users/anasdeyra">
          <Text component="a" variant="link" color={"indigo"}>
            @Anasdeyra
          </Text>
        </Link>
      </Center>
    </Stack>
  );
}
