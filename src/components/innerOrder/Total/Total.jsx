import { Box, Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { calculateBasketSummary } from "../../../utils/math";
import SumProductsInBasket from "../../../common/SumProducsInBasket/SumProductsInBasket";
import { useTranslation } from "react-i18next";
import { styles } from "./StylesTotal";
import { useNavigate } from "react-router-dom";

const Total = () => {
  const count = useSelector((state) => state.counter.basket);
  // console.log(count);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/order", { state: { count } });
  };

  const { sum, discount, allSum } = calculateBasketSummary(count);
  // console.log(sum, discount, allSum);

  return (
    <Box component="section" sx={styles.section}>
      <Stack sx={styles.stackFooter}>
        <Box sx={styles.boxFooter}>
          <SumProductsInBasket sum={t("basket.count")} />

          <Typography variant="h6" sx={styles.footerTypography}>
            {sum}
            <AttachMoneyIcon sx={styles.footerAttachMoneyIcon} />
          </Typography>
        </Box>

        <Box sx={styles.boxDiscount}>
          <Typography>{t("basket.discount")}</Typography>
          <Typography variant="h6" sx={styles.discount}>
            {count.length ? (
              <Typography sx={styles.discountBackground}>-12 %</Typography>
            ) : null}

            {discount}
            <AttachMoneyIcon sx={styles.moneyIcon} />
          </Typography>
        </Box>

        <Box sx={styles.boxFooter}>
          <Typography>
            <b>{t("basket.total")}</b>
          </Typography>

          <Typography variant="h5" sx={styles.typographyBold}>
            {allSum}
            <AttachMoneyIcon sx={styles.moneyIcon} />
          </Typography>
        </Box>

        <Button variant="outlined" sx={styles.botton} onClick={handleOrder}>
          Підтвердити замовлення
        </Button>
      </Stack>
    </Box>
  );
};

export default Total;
