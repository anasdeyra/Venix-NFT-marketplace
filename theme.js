import { DEFAULT_THEME } from "@mantine/core";

export const PRIMARY_COLOR = "blue";

export default {
  headings: { fontFamily: "Poppins, sans-serif" },
  fontFamily: "Poppins, sans-serif",
  primaryColor: PRIMARY_COLOR,
  primaryShade: 7,
  spacing: {
    ...DEFAULT_THEME.spacing,
    "2xl": DEFAULT_THEME.spacing.xl * 2,
    "3xl": DEFAULT_THEME.spacing.xl * 3,
    "4xl": DEFAULT_THEME.spacing.xl * 4,
    "5xl": DEFAULT_THEME.spacing.xl * 5,
    "6xl": DEFAULT_THEME.spacing.xl * 6,
  },
};

export const defaultProps = {
  Title: {
    sx: (theme) => ({
      color: theme.colorScheme === "dark" ? "white" : "black",
    }),
  },
  Button: {
    radius: "md",
  },
};
