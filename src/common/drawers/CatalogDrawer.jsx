import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { PrimaryDrawer } from "../../utils/thingsForDrawer";
import { styles } from "./drawers";

const CatalogDrawer = ({ handleMouseEnter, toggleDrawer }) => {
  const navigate = useNavigate();
  // console.log(PrimaryDrawer);
  // console.log(window.location.pathname);

  return (
    <Box
      sx={styles.box}
    >
      <List>
        {PrimaryDrawer.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => {
              const category = item.text.toLowerCase();
              toggleDrawer(false); // закриваєш меню
              // Якщо поточна категорія така ж — спочатку навігація на іншу, потім назад (форсуємо оновлення)
              // if (window.location.pathname === `/category/${category}`) {
              //   navigate("/"); // тимчасово на головну
              //   setTimeout(() => {
              //     navigate(`/category/${category}`);
              //   }, 0);
              // } else {
              //   navigate(`/category/${category}`);
              // }
              navigate(`/category/${category}`); // переходиш на нову категорію ← абсолютний шлях (з / на початку) 🧠 Запам’ятай: Завжди додавай / перед шляхом у navigate(...), якщо хочеш перейти на нову сторінку, а не "вглиб" поточної.
            }}
            sx={styles.mb}
            onMouseEnter={() => {
              handleMouseEnter(item.text.toLowerCase());
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default CatalogDrawer;
