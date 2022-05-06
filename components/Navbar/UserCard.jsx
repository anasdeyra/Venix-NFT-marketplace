import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import {
  Divider,
  Menu,
  UnstyledButton,
  createStyles,
  Tooltip,
  Text,
  Image,
  ActionIcon,
  Center,
  Group,
  Stack,
} from "@mantine/core";
import { useDisclosure, useClipboard } from "@mantine/hooks";
import {
  MdContentCopy as CopyIcon,
  MdExpandMore as ChevronDown,
} from "react-icons/md";

const useStyles = createStyles((theme) => ({
  userCard: {
    background: theme.colors.gray[1],
    display: "flex",
    gap: theme.spacing.xs,
    padding: theme.spacing.xs,
    borderRadius: theme.radius.xl,
    "&:hover": {
      background: theme.colors.gray[2],
    },
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

  const profileButton = (
    <UnstyledButton
      className={classes.userCard}
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
            <Stack>
              <Center>
                <Avatar address={address} size="128px" />
              </Center>
              <Center>
                <Text color={"black"} size="sm">
                  Anasdeyra
                </Text>
              </Center>
              <AddressSection address={address} />
            </Stack>
          </Menu.Label>

          <Menu.Item>Profile</Menu.Item>
          <Menu.Item>My NFTs</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
          <Divider />
          <Menu.Item onClick={disconnect} color={"red"}>
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

function Avatar({ address, size = "24px" }) {
  return (
    <Image
      width={size}
      radius={"50%"}
      src={`https://avatars.dicebear.com/api/identicon/${address}.svg`}
    />
  );
}
