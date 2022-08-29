export const PRIMARY_COLOR = "orange";

export default {
  headings: { fontFamily: "Poppins, sans-serif" },
  fontFamily: "Poppins, sans-serif",
  primaryColor: PRIMARY_COLOR,
  primaryShade: 7,
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
