import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SumProductsInBasket from "../../../common/SumProducsInBasket/SumProductsInBasket";
import { useTranslation } from "react-i18next";
import { styles } from "./StylesBasketFooter";
import { calculateBasketSummary } from "../../../utils/math";

const BasketFooter = ({ count }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { sum, discount, allSum } = calculateBasketSummary(count);
  // console.log(sum, discount, allSum);

  const handleOrder = () => {
    navigate("/order", { state: { count } });
  };

  return (
    <Card sx={styles.cardFooter}>
      <Box sx={styles.boxFooter}>
        <SumProductsInBasket sum={t("basket.count")} />

        <Typography variant="h6" sx={styles.footerTypography} translate="no">
          {sum}
          <AttachMoneyIcon sx={styles.footerAttachMoneyIcon} />
        </Typography>
      </Box>

      <Box sx={styles.boxDiscount}>
        <Typography>{t("basket.discount")}</Typography>
        <Typography variant="h6" sx={styles.discount} translate="no">
          {sum ? (
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

        <Typography variant="h5" sx={styles.typographyBold} translate="no">
          {allSum}
          <AttachMoneyIcon sx={styles.moneyIcon} />
        </Typography>
      </Box>

      <Button variant="outlined" sx={styles.botton} onClick={handleOrder}>
        {t("basket.paperwork")}
      </Button>
    </Card>
  );
};

export default BasketFooter;
