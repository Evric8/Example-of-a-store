import { drawerWidth } from "../../utils/thingsForDrawer";

export const styles = {
  drawer: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      overflow: "visible",
      position: "relative",
      border: "1px solid #ccc",
    },
  },

  box: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      // width: 'auto',
    },
  },

  mb: { mb: 4 },
};
