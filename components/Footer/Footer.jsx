import {
  Center,
  createStyles,
  Divider,
  Footer as F,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import Logo from "../Logo";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsteller";

const useStyles = createStyles((theme) => ({
  group: {
    justifyContent: "space-between",
    gap: theme.spacing.xl * 3,
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <F p={"xl"}>
      <Stack spacing={"xl"}>
        <Group align={"start"} className={classes.group} position="center">
          <FooterLinks />
          <Newsletter />
        </Group>

        <Stack>
          <Divider labelPosition="center" label={<Logo small />} />
          <Center>
            <Text size="sm">© 2022 Venix. All rights reserved</Text>
          </Center>
        </Stack>
      </Stack>
    </F>
  );
}
