import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { PrimaryDrawer } from "../../utils/thingsForDrawer";
import { styles } from "./drawers";

const MainDrawer = () => {
  const navigate = useNavigate();
  
  return (
    <Drawer
      variant="permanent"
      sx={styles.drawer}
      open
    >
      <Box>
        <List>
          {PrimaryDrawer.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => {
                navigate(`category/${item.text.toLowerCase()}`);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MainDrawer;
