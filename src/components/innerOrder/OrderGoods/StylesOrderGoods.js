export const styles = {
  box: {
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
    "&.Mui-expanded": {
      margin: 0,
    },
  },

  Typography: { fontSize: "20px" },

  goodsImage: {
    width: "40px",
    borderRadius: 1,
    p: 1,
    backgroundColor: "white",
  },

  m: { mt: 2, ml: 2, mr: 2 },

  paper: { boxShadow: "none"},

  mb: { mb: 1 },

  ClearIcon: { width: "10px", height: "10px", color: "dark" },

  badge: {
    "& .MuiBadge-badge": {
      border: "1px solid #d9d7d7", // бордер тільки навколо бейджа
      borderRadius: "50%", // робимо круглим
      backgroundColor: "#fff", // щоб іконка не зливалась
    },
  },

  boxBadge: {
    width: "40px",
    borderRadius: 1,
    p: 1,
    border: "0.1px solid #d9d7d7",
  },

  title: { alignContent: "center", fontSize: "18px" },

  price: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },

  AttachMoneyIcon: { fontSize: "medium" },
};
