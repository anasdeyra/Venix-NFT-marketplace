import { useAddress, useDisconnect, useSigner } from "@thirdweb-dev/react";
import {
  Divider,
  Menu,
  UnstyledButton,
  createStyles,
  Tooltip,
  Text,
  ActionIcon,
  Center,
  Group,
  Stack,
  Badge,
  MenuLabel,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useClipboard } from "@mantine/hooks";
import {
  MdContentCopy as CopyIcon,
  MdExpandMore as ChevronDown,
} from "react-icons/md";
import Link from "next/link";

import {
  FaSignOutAlt as SignOutIcon,
  FaImages as NFTIcon,
  FaCog as SettingsIcon,
  FaUser as ProfileIcon,
} from "react-icons/fa";
import Avatar from "../Avatar";

const useStyles = createStyles((theme) => ({
  userCard: {
    display: "flex",
    gap: theme.spacing.xs,
    padding: theme.spacing.xs,
    borderRadius: theme.radius.xl,

    alignItems: "center",
  },
  text: {
    maxWidth: "166px",
    display: "inline-block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
}));

export default function UserCard() {
  const address = useAddress();
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure();
  const disconnect = useDisconnect();
  const signer = useSigner();
  const { colorScheme } = useMantineColorScheme();

  const profileButton = (
    <UnstyledButton
      className={classes.userCard}
      sx={(theme) =>
        colorScheme === "dark"
          ? {
              background: theme.colors.dark[6],
              "&:hover": {
                background: theme.colors.dark[5],
              },
            }
          : {
              background: theme.colors.gray[0],
              "&:hover": {
                background: theme.colors.gray[1],
              },
            }
      }
      onClick={() => {
        opened ? close() : open();
      }}
    >
      <Avatar address={address} />
      <Text weight={"bold"} size="sm" className={classes.text}>
        Aansdeyra
      </Text>
      <ChevronDown size={"18px"} />
    </UnstyledButton>
  );

  return (
    address && (
      <>
        <Menu
          control={profileButton}
          opened={opened}
          onOpen={open}
          onClose={close}
          placement={"end"}
          size="lg"
        >
          <Menu.Label>
            <Stack spacing={"xs"}>
              <Center>
                <Avatar address={address} size="128px" />
              </Center>
              <Center>
                <Text size="sm">Anasdeyra</Text>
              </Center>
              <Stack spacing={0}>
                <AddressSection address={address} />
                <Badge color={"indigo"}>
                  {signer?.provider?._network?.name} network
                </Badge>
              </Stack>
            </Stack>
          </Menu.Label>
          <Divider />
          <MenuLabel>Actions</MenuLabel>
          <Menu.Item icon={<ProfileIcon />}>
            <Link href={"/profile"}>Profile</Link>
          </Menu.Item>

          <Menu.Item icon={<NFTIcon />}>
            <Link href={"/mynfts"}>My NFTs</Link>
          </Menu.Item>

          <Menu.Item icon={<SettingsIcon />}>
            <Link href={"/settings"}>Settings</Link>
          </Menu.Item>
          <Divider />
          <Menu.Item icon={<SignOutIcon />} onClick={disconnect} color={"red"}>
            Disconnect
          </Menu.Item>
        </Menu>
      </>
    )
  );
}

function AddressSection({ address }) {
  const { copy, copied } = useClipboard({ timeout: 2000 });
  const { classes } = useStyles();
  return (
    <Group noWrap>
      <Text size="xs" color={"dimmed"} className={classes.text}>
        {address}
      </Text>
      <Tooltip
        className={classes.tooltip}
        position="bottom"
        label={<Text size="xs">{copied ? "copied!" : "copy"} </Text>}
      >
        <ActionIcon
          onClick={() => {
            copy(address);
          }}
          size={"md"}
          variant="hover"
          radius={"xl"}
          color={"gray"}
        >
          <CopyIcon />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
