import React from "react";
import { Input } from "@mantine/core";
import { MdSearch } from "react-icons/md";

export default function Searchbar({ classes }) {
  return (
    <Input
      className={classes.searchbarContainer}
      icon={<MdSearch size={"20px"} />}
      placeholder="Search a collection, item or an account"
      radius="xl"
      size="md"
      variant="filled"
    />
  );
}
