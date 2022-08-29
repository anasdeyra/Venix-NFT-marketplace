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
  Button,
} from "@mantine/core";
import { useDisclosure, useClipboard } from "@mantine/hooks";
import {
  MdContentCopy as CopyIcon,
  MdExpandMore as ChevronDown,
} from "react-icons/md";
import Link from "next/link";

import {
  FaSignOutAlt as SignOutIcon,
  FaPlusCircle as NFTIcon,
  FaCog as SettingsIcon,
  FaUser as ProfileIcon,
} from "react-icons/fa";
import Avatar from "../Avatar";

const useStyles = createStyles((theme) => ({
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
    <ActionIcon
      size={"lg"}
      radius="50%"
      onClick={() => {
        opened ? close() : open();
      }}
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
    >
      <Avatar size="32px" radius="50%" address={address} />
    </ActionIcon>
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
            <Link href={"/create-collection"}>Add a collection</Link>
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
