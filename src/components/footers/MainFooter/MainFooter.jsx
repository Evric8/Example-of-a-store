import { Badge, Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import PaymentIcon from "@mui/icons-material/Payment";
import { styles } from "./StylesMainFooter";
import { useNavigate } from "react-router-dom";
import { countBasket } from "../../../utils/math";
import { useSelector } from "react-redux";

const MainFooter = () => {
  const navigate = useNavigate();

  const basket = useSelector((state) => state.counter.basket);

  const count = countBasket(basket);

  const handleNavigateBasket = () => {
    navigate("/basket");
  };

  const handleNavigateOrder = () => {
    navigate("/order");
  };

  return (
    <Box sx={styles.box}>
      <Box sx={styles.text}>
        <HomeOutlinedIcon />
        <Typography sx={styles.display}>Головна</Typography>
      </Box>

      <Box sx={styles.text}>
        <DashboardCustomizeOutlinedIcon />
        <Typography sx={styles.display}>Каталог</Typography>
      </Box>

      <Box sx={styles.text} onClick={handleNavigateBasket}>
        <Badge badgeContent={count} color="warning">
          <ShoppingCartOutlinedIcon />
        </Badge>
        <Typography sx={styles.display}>Кошик</Typography>
      </Box>

      <Box sx={styles.text}>
        <FavoriteBorderIcon />
        <Typography sx={styles.display}>Обране</Typography>
      </Box>

      <Box sx={styles.text}>
        <GroupAddOutlinedIcon />
        <Typography sx={styles.display}>Більше</Typography>
      </Box>

      <Box sx={styles.text} onClick={handleNavigateOrder}>
        <Badge badgeContent={count} color="warning">
          <PaymentIcon />
        </Badge>
        <Typography sx={styles.display}>Оформлення</Typography>
      </Box>
    </Box>
  );
};

export default MainFooter;
