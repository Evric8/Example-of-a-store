export const styles = {
  root: { border: "solid 2px var(--yellow-background-color)", mb: 1 },

  box: { display: "flex", justifyContent: "space-between", m: 1 },

  IconButton: {
    ml: 0.1,
    backgroundColor: "var(--blue-color)",
    borderRadius: "32px",
    p: "3px",
    ":hover": {
      backgroundColor: "var(--blue-color-hover)",
    },
  },

  Brightness1Icon: { color: "var(--red-color)", ml: "3px" },

  bottons: { display: "flex", gap: 1 },

  activLang: {
    backgroundColor: "var(--green-color)",
    color: "white",
  },

  boxCity: { display: "flex", justifyContent: "end", gap: 1 },

  size: { fontSize: "0.8rem", ml: 0.5 },

  basket: { display: "flex", gap: 2, mb: 1 },

  icon:{ ml: 1 },

  bold: { pl: 2, fontWeight: "bold" },
};
