import React from "react";
import { Input } from "@mantine/core";
import { IoSearch } from "react-icons/io5";

export default function Searchbar({ classes }) {
  return (
    <Input
      className={classes.searchbarContainer}
      icon={<IoSearch />}
      placeholder="Search a collection, item or an account"
      radius="md"
      size="md"
      variant="filled"
    />
  );
}
