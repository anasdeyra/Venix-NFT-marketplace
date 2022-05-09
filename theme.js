export default {
  headings: { fontFamily: "Poppins, sans-serif" },
  fontFamily: "Poppins, sans-serif",
};

export const defaultProps = {
  Title: {
    sx: (theme) => ({
      color: theme.colorScheme === "dark" ? "white" : "black",
    }),
  },
  Button: {
    radius: "xl",
  },
};
