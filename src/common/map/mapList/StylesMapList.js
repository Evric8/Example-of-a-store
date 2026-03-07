export const styles = {
  List: {
    maxWidth: "100%",
    overflow: "auto",
    maxHeight: "50%",
    p: 0,
    "& ul": { padding: 0 },
  },

  ListSubheader: {
    fontSize: 22,
    textAlign: "center",
    color: "#000000",
  },

  ListItemButton: {
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#92c1f1ff",
      color: "white",
      transform: "translateY(-2px)",
    },
    // selected
    "&.Mui-selected": {
      backgroundColor: "var(--blue-color)",
      // boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "var(--blue-color-hover)",
    },
  },

    PreviewListItemButton: {
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#92c1f1ff",
      color: "white",
      transform: "translateY(-2px)",
    },
    // selected
    "&.Mui-selected": {
      backgroundColor: "rgb(81, 163, 245)",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "var(--blue-color-hover)",
    },
  },

  ListItemText: { alignSelf: "start" },

  Button: {
    fontSize: "0.7rem",
    color: "var(--warning-color)",
    textDecoration: "underline dashed var(--warning-color)",
    "&:hover": {
      color: "white",
      backgroundColor: " var(--warning-color)",
    },
  },
};
