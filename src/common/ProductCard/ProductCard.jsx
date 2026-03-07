import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useNavigate } from "react-router-dom";
import { styles } from "./StylesProductCard";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import {
  addBasket,
  selectItemCount,
} from "../../features/Slice/CountInBasketSlice";
import { useDispatch, useSelector } from "react-redux";
import BasketDialog from "../dialogs/BasketDialog/BasketDialog";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  // console.log(item);
  const dispatch = useDispatch();

  const [hovered, setHovered] = useState(false);

  const countFromSlice = useSelector((state) =>
    selectItemCount(state, item.id),
  );
  // console.log(countFromSlice);

  const navigateBasket = (e) => {
    e.stopPropagation();
    navigate("/basket");
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = (e) => {
    // console.log(e);
    // console.log(item);
    e.stopPropagation();
    dispatch(addBasket(item));
    setOpen(true);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const shortTitle =
    item.title.length > 29
      ? item.title.slice(0, 29) + "..."
      : item.title + "...";

  return (
    <Box size={{ xs: 12, sm: 6 }} sx={styles.grid}>
      <Paper
        elevation={4}
        sx={{
          // maxHeight: "448px", + styles.height
          maxHeight: "458px",
          overflowY: hovered ? "auto" : "hidden",
          // overflowX:'hidden',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          navigate(`/${item.id}`, { state: { item } });
        }}
      >
        <Card sx={styles.card}>
          <CardMedia component="img" image={item.image} sx={styles.CardMedia} />

          <CardContent sx={styles.CardContent}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={hovered ? styles.title : styles.height}
            >
              {hovered ? item.title : shortTitle}
            </Typography>

            <Typography sx={styles.rating}>
              <StarRateIcon />
              rating:{item.rating.rate}
            </Typography>

            <Box sx={styles.flex}>
              <Typography variant="h5" sx={styles.price}>
                {item.price}
                <AttachMoneyIcon sx={styles.priceFont} />
              </Typography>
              {countFromSlice ? (
                <Badge badgeContent={countFromSlice} color="warning">
                  <ShoppingCartIcon sx={styles.shop} />
                </Badge>
              ) : (
                <ShoppingCartOutlinedIcon sx={styles.shop} />
              )}
            </Box>

            {hovered && (
              <Typography sx={styles.description}>
                {item.description}
              </Typography>
            )}
          </CardContent>

          <CardActions>
            {countFromSlice ? (
              <Button sx={styles.button} onClick={navigateBasket}>
                <ShoppingCartIcon />
                <Typography>В кошику</Typography>
              </Button>
            ) : (
              <Button sx={styles.button} onClick={(e) => handleClickOpen(e)}>
                <ShoppingCartOutlinedIcon />
                <Typography>Купити</Typography>
              </Button>
            )}
          </CardActions>
        </Card>
      </Paper>

      <BasketDialog open={open} handleClose={handleClose} item={item} />
    </Box>
  );
};

export default ProductCard;

