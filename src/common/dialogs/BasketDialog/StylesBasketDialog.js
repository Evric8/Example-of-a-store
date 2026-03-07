export const styles = {
  CardMedia: {
    width: "40px",
  },

  paper: {
    position: "absolute",
    top: 200,
    backgroundColor: "white",
    width: "100%", // тепер реально працює
    maxWidth: "1200px",
    borderRadius: 3,
  },

  IconButton: {
    position: "absolute",
    right: "48%",
    top: -54,
    backgroundColor: "white",
    // color: theme.palette.grey[500],
    color: "dark",
    border: "3px solid transparent",
    "&:hover": {
      border: "3px solid #ed6c02",
      color: "#ed6c02",
      backgroundColor: "white",
      transform: "none",
    },
  },

  content: { display: "flex", gap: 2 },

  price: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },

  priceIcon: { fontSize: "medium" },

  action: { ml: 2, mr: 2},

  button: {
    width: "100%",
    "&:hover": {
      backgroundColor: "#fdd835",
      color: "#1976d2",
    },
  },
};
