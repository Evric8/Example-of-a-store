import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckIcon from "@mui/icons-material/Check";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  checkedBaskedId,
  removeBasket,
} from "../../../features/Slice/CountInBasketSlice";
import { useTranslation } from "react-i18next";
import { styles } from "./StyledInnerBasket";
import ButtonsGroupCount from "../../../common/buttons/buttonsGroupCount/ButtonsGroupCount";
import BasketFooter from "../../footers/BasketFooter/BasketFooter";

const InnerBasket = () => {
  const count = useSelector((state) => state.counter.basket);
  // console.log(count);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleRemove = (id) => {
    dispatch(removeBasket(id));
  };

  const handleChecked = (id) => {
    dispatch(checkedBaskedId(id));
  };

  return (
    <Box>
      <Card sx={styles.card}>
        <Typography variant="h5" sx={styles.title}>
          {count.length ? t("basket.yourBasket") : t("basket.yourBasketEmpty")}
        </Typography>
      </Card>

      {count &&
        count.map((item, index) => {
          // console.log(item);
          return (
            <Card key={item.id + item.title + index} sx={styles.cardFull}>
              <Box sx={styles.boxWrapper}>
                {item.checked ? (
                  <CheckBoxIcon
                    onClick={() => handleChecked(item.id)}
                    sx={styles.checkBoxIcon}
                  />
                ) : (
                  <CheckBoxOutlineBlankIcon
                    onClick={() => handleChecked(item.id)}
                    sx={styles.checkBoxOut}
                  />
                )}

                <CardMedia
                  component="img"
                  image={item.image}
                  sx={styles.cardMedia}
                />
                <Box>
                  <Box sx={styles.typography}>
                    <CheckIcon />
                    <Typography>{t("basket.today")}</Typography>
                  </Box>
                  <Typography
                    //  gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {item.title}
                  </Typography>

                  <Typography sx={styles.price}>
                    {item.price} <AttachMoneyIcon sx={styles.priceIcon} />
                  </Typography>

                  <Typography>
                    {t("basket.code")} {item.id}
                  </Typography>
                </Box>
              </Box>

              <ButtonsGroupCount item={item} />

              <Box sx={styles.bottons}>
                <Button variant="outlined">
                  <FavoriteBorderIcon sx={styles.mr} />
                  {t("basket.select")}
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleRemove(item.id)}
                >
                  <DeleteForeverIcon sx={styles.mr} />
                  {t("basket.remove")}
                </Button>
              </Box>
            </Card>
          );
        })}

      <BasketFooter count={count} />
    </Box>
  );
};

export default InnerBasket;
