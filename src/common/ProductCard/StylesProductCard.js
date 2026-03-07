export const styles = {
  grid: {
    maxWidth: 200,
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    p: "1px",
  },

  CardMedia: {
    mt: 1,
    height: 179,
    objectFit: "contain",
  },

  CardContent: { p: 1 },

  height: {
    // height: "110px",
    height: "120px",
  },

  rating: {
    display: "flex",
    justifyContent: "start",
    gap: 1,
    mb: 1,
  },

  flex: {
    display: "flex",
    justifyContent: "space-between",
    mb:1,
  },

  price: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    fontWeight: "bold",
  },

  priceFont: { fontSize: "medium", pt: 0.5 },

  title: {
    height: "auto",
    mb: 3,
  },

  description: {
    height: "auto",
  },

  shop: {
    p: 0.7,
    borderRadius: "8px",
    backgroundColor: "#1976d2",
    color: "white",
    ":hover": { backgroundColor: "#1669bb" },
  },

  button: {
    display: "flex",
    gap: "10px",
    backgroundColor: "#1976d2",
    color: "white",
    ":hover": {
      backgroundColor: "#1669bb",
    },
  },
};
