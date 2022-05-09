import {
  ActionIcon,
  createStyles,
  Group,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { NextLink } from "@mantine/next";

const useStyles = createStyles(() => ({
  link: {
    "&:hover": { textDecoration: "underline" },
    textTransform: "capitalize",
  },
  group: {
    justifyContent: "space-between",
    width: "700px",
  },
  title: {
    textTransform: "capitalize",
  },
}));

export default function FooterLinks() {
  const { classes } = useStyles();

  return (
    <Group
      align={"start"}
      className={classes.group}
      spacing={"xl"}
      position="center"
      grow
    >
      {FOOTER_LINKS.map((footerLink, i) => (
        <FooterLink key={i} {...footerLink} />
      ))}
    </Group>
  );
}

export function FooterLink({ title, links }) {
  const { classes } = useStyles();
  return (
    <Stack spacing={"lg"}>
      <Title className={classes.title} order={4}>
        {title}
      </Title>
      <Stack spacing={"xs"}>
        {links.map(({ label, link }, i) => (
          <NextLink className={classes.link} key={i} href={link}>
            {label}
          </NextLink>
        ))}
      </Stack>
    </Stack>
  );
}

const FOOTER_LINKS = [
  {
    title: "product",
    links: [
      { label: "overview", link: "/overview" },
      { label: "features", link: "/features" },
      { label: "tutorials", link: "/tutorials" },
      { label: "pricings", link: "/pricings" },
      { label: "releases", link: "/releases" },
    ],
  },
  {
    title: "company",
    links: [
      { label: "about Us", link: "/overview" },
      { label: "press", link: "/overview" },
      { label: "careers", link: "/overview" },
      { label: "contact Us", link: "/overview" },
      { label: "partners", link: "/overview" },
    ],
  },
  {
    title: "legal",
    links: [
      { label: "coockies Policy", link: "/overview" },
      { label: "privacy Policy", link: "/overview" },
      { label: "terms of Service", link: "/overview" },
      { label: "Law Enforcement", link: "/overview" },
      { label: "status", link: "/overview" },
    ],
  },
  {
    title: "follow Us",
    links: [
      { label: "discord", link: "/overview" },
      { label: "facebook", link: "/overview" },
      { label: "youtube", link: "/overview" },
      { label: "twitter", link: "/overview" },
      { label: "instagram", link: "/overview" },
    ],
  },
];
