import { MdOutlineMarkunreadMailbox as MailIcon } from "react-icons/md";
import {
  TextInput,
  ActionIcon,
  Stack,
  Title,
  Group,
  Button,
} from "@mantine/core";
import MediaIcons from "../MediaIcons";

export default function Newsletter() {
  return (
    <Stack sx={{ flexGrow: "1" }}>
      <Title order={4}>Sign up to our newsletter</Title>
      <Group spacing={"xs"}>
        <TextInput sx={{ flexGrow: "1" }} placeholder="your@email.com" />
        <Button radius={"sm"} color={"indigo"} variant="filled">
          Sign up
        </Button>
      </Group>
      <MediaIcons />
    </Stack>
  );
}
