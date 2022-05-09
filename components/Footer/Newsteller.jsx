import { MdOutlineMarkunreadMailbox as MailIcon } from "react-icons/md";
import { TextInput, ActionIcon, Stack, Title, Group } from "@mantine/core";
import MediaIcons from "../MediaIcons";

export default function Newsletter() {
  return (
    <Stack sx={{ flexGrow: "1" }}>
      <Title order={4}>Sign up to our newsletter</Title>
      <Group spacing={"xs"}>
        <TextInput sx={{ flexGrow: "1" }} placeholder="your@email.com" />
        <ActionIcon color={"indigo"} variant="filled" size={"lg"}>
          <MailIcon />
        </ActionIcon>
      </Group>
      <MediaIcons />
    </Stack>
  );
}
