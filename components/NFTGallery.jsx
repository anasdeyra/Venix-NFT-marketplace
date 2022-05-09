import { Group, Stack } from "@mantine/core";
import React from "react";
import NFTCard from "./NFTCard";

export default function NFTGallery({ items }) {
  return (
    <Group grow>
      {items.map(({ owner }, i) => (
        <NFTCard key={i} />
      ))}
    </Group>
  );
}
