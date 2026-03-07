export const styles = {
  width: { width: "100%" },

  dialog: {
    width: "100%",
    maxWidth: "lg",
    height: "90%",
    borderRadius: "20px",
  },

  title: { ml: 1, p: 2 },
  IconButton: (theme) => ({
    position: "absolute",
    right: 10,
    top: 8,
    color: theme.palette.grey[800],
  }),

  DialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: 1,
  },
};
