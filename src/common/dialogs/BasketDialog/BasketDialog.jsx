import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  Box,
  CardMedia,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { styles } from "./StylesBasketDialog";
import ButtonsGroupCount from "../../buttons/buttonsGroupCount/ButtonsGroupCount";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="up" ref={ref} {...props} /> });

const BasketDialog = ({ open, handleClose, item }) => {
  // console.log(item);

  const navigate = useNavigate();

  const handleBasket = () => {
    navigate("/basket");
  };

  const handleOrder = () => {
    navigate("/order");
  };

  return (
    <Dialog
      onClick={(e) => e.stopPropagation()}
      open={open}
      //slots={{ transition: Transition }} каже, який компонент використати для анімації (наприклад, Slide або твій Transition).
      slots={{
        // transition: Transition,
        transition: Slide,
        paper: Paper,
      }}
      //slotProps={{ transition: { timeout: 800 } }} передає пропси саме цьому слоту (transition), тобто вони потраплять у <Slide />.
      slotProps={{
        transition: {
          timeout: 800,
          direction: "up",
        },
        paper: {
          sx: styles.paper,
        },
      }}
      // --Різниця між твоїм варіантом і старим у тому, що slotProps — це сучасний, більш гнучкий спосіб передавати параметри дочірнім слотам (transition, backdrop, paper і т. д.).
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Товар додано до кошика</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => styles.IconButton}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={styles.content}>
        <CardMedia component="img" image={item.image} sx={styles.CardMedia} />
        <Box>
          <Typography variant="subtitle1">{item.title}</Typography>
          <Typography sx={styles.price}>
            {item.price} <AttachMoneyIcon sx={styles.priceIcon} />
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={styles.action}>
        <ButtonsGroupCount item={item} />
      </DialogActions>

      <Stack spacing={2} sx={{ m: 2 }}>
        <Button variant="outlined" sx={styles.button} onClick={handleClose}>
          Продовжити покупки
        </Button>
        <Button variant="contained" sx={styles.button} onClick={handleBasket}>
          Перейти до кошика
        </Button>
        <Button variant="outlined" sx={styles.button} onClick={handleOrder}>
          Оформити замовлення
        </Button>
      </Stack>
    </Dialog>
  );
};

export default BasketDialog;
