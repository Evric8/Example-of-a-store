export const styles = {
  section: {
    border: "1px dashed grey",
    mb: 2,
    borderRadius: 2,
    width: "100%",
  },

  Accordion: {
    width: "100%",
    borderRadius: 2,
    boxShadow: "none",
    backgroundColor: "#f2f2f2",
  },

  span: { fontSize: "20px" },

  details: { backgroundColor: "white" },

  box: {
    mt: 1,
    display: "flex",
    gap: 6,
    justifyContent: "flex-start",
  },

  boxMain: {
    display: "flex",
    gap: 2,
    alignItems: "center",
    mb: 2,
    cursor: "pointer",
  },

  IconButton: {
    maxWidth: "112px",
    ml: 1,
    borderRadius: "32px",
    p: "3px",
    ":hover": {
      backgroundColor: "#e95d2a",
    },
    border: "2px solid var(--link-color)",
  },

  Brightness1Icon: { color: "white", width: 16, height: 16 },
};
