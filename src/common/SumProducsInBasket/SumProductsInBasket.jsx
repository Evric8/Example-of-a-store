import { useSelector } from "react-redux";
import { countBasket } from "../../utils/math";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SumProductsInBasket = ({ sum }) => {
  const count = useSelector((state) => state.counter.basket);
  // console.log(count);

  const sumProducts = countBasket(count);
  // console.log(sumProducts)

  const { t, i18n } = useTranslation();

  return (
    <>
      {sumProducts === 1 ? (
        <Typography translate="no">
          {sumProducts} {t("basket.sumProducts1")} {sum}
        </Typography>
      ) : sumProducts > 1 && sumProducts < 5 ? (
        <Typography translate="no">
          {sumProducts} {t("basket.sumProducts2")} {sum}
        </Typography>
      ) : (
        <Typography translate="no">
          {sumProducts} {t("basket.sumProducts10")} {sum}
        </Typography>
      )}
    </>
  );
};

export default SumProductsInBasket;
