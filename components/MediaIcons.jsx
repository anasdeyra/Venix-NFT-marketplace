import { ActionIcon, createStyles, Group } from "@mantine/core";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  icon: { "&:hover": { color: theme.colors.indigo[7] } },
}));

export default function MediaIcons({ dir, gap }) {
  const { classes } = useStyles();

  return (
    <Group spacing={gap} direction={dir}>
      {MEDIA.map(({ Icon, link }, i) => (
        <Link key={i} href={link} passHref>
          <ActionIcon
            className={classes.icon}
            variant="transparent"
            target={"_blank"}
            component="a"
          >
            <Icon size={"18px"} />
          </ActionIcon>
        </Link>
      ))}
    </Group>
  );
}

const MEDIA = [
  { Icon: FaDiscord, link: "/#" },
  { Icon: FaFacebook, link: "/#" },
  { Icon: FaYoutube, link: "/#" },
  { Icon: FaTwitter, link: "/#" },
  { Icon: FaInstagram, link: "/#" },
];
