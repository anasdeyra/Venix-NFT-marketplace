import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FaSun as SunIcon, FaMoon as MoonIcon } from "react-icons/fa";
import { PRIMARY_COLOR } from "../../theme";

export default function ToggleColorSchemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon
      title="toggle color mode"
      size={"lg"}
      radius={"md"}
      color={PRIMARY_COLOR}
      onClick={() => {
        toggleColorScheme();
      }}
    >
      {colorScheme === "dark" ? (
        <SunIcon size={"22px"} />
      ) : (
        <MoonIcon size={"22px"} />
      )}
    </ActionIcon>
  );
}
