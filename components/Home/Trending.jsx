import { createStyles, Group, Stack, Title } from "@mantine/core";
import { FaChartLine as TrendUp } from "react-icons/fa";
import NFTCard from "../NFTCard";

const useStyles = createStyles((theme) => ({
  icon: {
    color: "white",
    fontSize: theme.headings.sizes.h1,
  },
  NFTGrid: {
    gap: theme.spacing.xl * 1.5,
  },
}));

export default function Trending() {
  const { classes } = useStyles();
  return (
    <Stack spacing={"xl"}>
      <Group>
        <Title order={1}>Trending</Title>
        <TrendUp color="white" size={"32px"} />
      </Group>
      <Group className={classes.NFTGrid}>
        <NFTCard
          priceETH={"3.1"}
          priceUSD={"35K"}
          title={"Bored Ape #2560"}
          link={
            "https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
          }
          owner={"anasdeyra"}
          image="https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
        />
        <NFTCard
          priceETH={"3.1"}
          priceUSD={"35K"}
          title={"Bored Ape #2560"}
          link={
            "https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
          }
          owner={"anasdeyra"}
          image="https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
        />
        <NFTCard
          priceETH={"3.1"}
          priceUSD={"35K"}
          title={"Bored Ape #2560"}
          link={
            "https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
          }
          owner={"anasdeyra"}
          image="https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
        />
        <NFTCard
          priceETH={"3.1"}
          priceUSD={"35K"}
          title={"Bored Ape #2560"}
          link={
            "https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
          }
          owner={"anasdeyra"}
          image="https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
        />
        <NFTCard
          priceETH={"3.1"}
          priceUSD={"35K"}
          title={"Bored Ape #2560"}
          link={
            "https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
          }
          owner={"anasdeyra"}
          image="https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
        />
        <NFTCard
          priceETH={"3.1"}
          priceUSD={"35K"}
          title={"Bored Ape #2560"}
          link={
            "https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
          }
          owner={"anasdeyra"}
          image="https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e"
        />
      </Group>
    </Stack>
  );
}
