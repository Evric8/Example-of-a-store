import { Box, Button, Container, Stack } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BasketHeader from "../../components/headers/BasketHeader/BasketHeader";
import InnerBasket from "../../components/main/InnerBasket/InnerBasket";
import { clearBasket } from "../../features/Slice/CountInBasketSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { styles } from "./StylesHome";

const Basket = () => {
  // console.log(window.innerWidth)

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleAllRemove = () => {
    dispatch(clearBasket());
  };

  return (
    <Container maxWidth="lg">
      <BasketHeader />
      <Box component="section" sx={styles.basketBox}>
        <Stack spacing={2}>
          <Button
            variant="outlined"
            sx={styles.basketButton}
            onClick={handleAllRemove}
          >
            <DeleteForeverIcon sx={styles.basketIcon} />
            {t("basket.removeAll")}
          </Button>

          <InnerBasket />
        </Stack>
      </Box>
    </Container>
  );
};

export default Basket;
