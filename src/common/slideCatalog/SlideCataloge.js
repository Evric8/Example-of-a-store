export const styles = {
  boxShadow: {
    position: "fixed",
    top: "114px",
    left: 0,
    right: 0,
    bottom: 0,
    // півпрозоре затемнення
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // нижче ніж контент, але вище за все інше
    zIndex: 1201,
  },

  boxInSlide: {
    position: "absolute",
    top: "64px", // або твоя висота AppBar
    left: 0,
    right: 0,
    height: "34vh",
    // height: "44vh якщо украънська мова
    backgroundColor: "#ffed4b",
    zIndex: 1202,
    boxShadow: 2,
    display: "flex",
    gap: 4,
    color: "#000",
  },

  oneBoxVisible: {
    backgroundColor: "inherit",
    // адаптивні колонки
    columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
    columnGap: 3,
    // або вкажи maxHeight
    height: "96%",
    mt: 1,
    mb: 1,
  },

  boxColumn: {
    // не розбивати блок між колонками
    breakInside: "avoid",
    mb: 1,
  },

  typografy: {
    fontSize: "16px",
    textAlign: "center",
    fontWeight: 600,
  },

  muiLink: {
    display: "inline-block", // потрібно для transform
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      color: "#1976d2",
    },
  },

  liCenter: { display: "flex", justifyContent: "center", mt: 4 },

  liOl: { pl: 2, mt: 0.5, mb: 1 },
};
