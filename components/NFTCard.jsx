import React from "react";
import { FaEthereum, FaDollarSign } from "react-icons/fa";
import { Card, Text, Group, Center, createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef("image");

  return {
    card: {
      position: "relative",
      height: 280,
      width: 280,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: "scale(1.1)",
      },
    },

    image: {
      ref: image,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "50%",
      transition: "transform 500ms ease",
    },

    overlay: {
      position: "absolute",
      top: "20%",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
    },

    content: {
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    owner: {
      color: theme.colors.dark[2],
    },
  };
});

export default function NFTCard({
  image,
  title,
  owner,
  priceETH,
  priceUSD,
  link,
}) {
  const { classes, theme } = useStyles();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="xl"
      component="a"
      href={link}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.owner}>
              @{owner}
            </Text>

            <Group spacing="lg">
              <Center>
                <FaEthereum size={16} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {priceETH}
                </Text>
              </Center>
              <Center>
                <FaDollarSign size={16} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {priceUSD}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}
