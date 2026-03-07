export const styles = {
  Stack: {
    ml: 2,
    mr: 2,
    mb: 2,
    position: "relative",
  },

  innerStack: { display: "flex", justifyContent: "space-between" },

  Typography: { fontSize: 18,mr:1,minWidth:'134px'},

  BoxLink: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    typography: "body1",
    "& > :not(style) ~ :not(style)": {
      ml: 2,
    },
  },

  link: {
    display: { xs: "block", md: "flex" },
    color: "var(--grey-color)",
    textDecorationColor: "var(--grey-color)",
    "&:hover": {
      color: "var(--link-color)",
      textDecorationColor: "var(--link-color)",
    },
  },

  innerBox: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "4px",
    border: "1px solid var(--grey-color)",
    p: 2,
  },

  innerTypografy: { fontSize: 18 },

  Autocomplete: {
    position: "absolute",
    top: "5rem",
    zIndex: 100,
    backgroundColor: "white",
    width: "100%",
  },
};
