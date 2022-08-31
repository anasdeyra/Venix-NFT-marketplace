import { TextInput, Stack, Title, Group, Button } from "@mantine/core";
import MediaIcons from "../MediaIcons";

export default function Newsletter() {
  return (
    <Stack sx={{ flexGrow: "1" }}>
      <Title order={4}>Sign up to our newsletter</Title>
      <Group spacing={"xs"}>
        <TextInput
          radius={"md"}
          sx={{ flexGrow: "1" }}
          placeholder="your@email.com"
        />
        <Button radius={"md"}>Sign up</Button>
      </Group>
      <MediaIcons />
    </Stack>
  );
}
