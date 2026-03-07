const drawerWidth = 240;

export const styles = {
  flex: { display: "flex", justifyContent: "center", mt: 4 },

  box: { display: "flex" },

  drawer: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      position: "relative",
      border: "1px solid #ccc",
    },
  },

  main: {
    flexGrow: 1,
    pl: 2,
    pr: 1,
    width: "100%",
  },
};
