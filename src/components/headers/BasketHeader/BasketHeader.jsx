import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SumProductsInBasket from "../../../common/SumProducsInBasket/SumProductsInBasket";
import { useTranslation } from "react-i18next";
import { styles } from "./StyledBasketHeader";
import useLocalStorageCity from "../../../hooks/hook.useLocalStorageCity/useLocalStorageCity";
import CityDialog from "../../../common/dialogs/CityDialog/CityDialog";
import getLanguageField from "../../../utils/getLanguageField";
import useDialogCity from "../../../hooks/hook.useDialogCity/useDialogCity";
import { useCallback } from "react";

const BasketHeader = () => {
  const { t, i18n } = useTranslation();

  const { open, handleClickOpen, handleClose } = useDialogCity();

  const [selectedCity, setSelectedCity] = useLocalStorageCity(
    "selectedCity",
    {}
  );

  const language = getLanguageField(i18n.language);

  //Локальні колбеки handleClickChange getLangButtonStyle можна обгорнути у useCallback, щоб не створювався кожного рендера:
  const handleClickChange = useCallback(
    (event) => {
      // console.log(event.target.value); //uk or ru
      i18n.changeLanguage(event.target.value);
    },
    [i18n]
  );

  const getLangButtonStyle = useCallback(
    (lang) => (i18n.language === lang ? styles.activLang : {}),
    [i18n.language]
  );

  const cityName = selectedCity[language]?.split("(")[0] || t("basket.city");

  return (
    <Box sx={styles.root}>
      <Box sx={styles.box}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={styles.IconButton}
          translate="no"
        >
          SHOP
          <Brightness1Icon sx={styles.Brightness1Icon} />
        </IconButton>

        <Box>
          <Box sx={styles.bottons}>
            <Button
              variant="outlined"
              value="uk"
              onClick={handleClickChange}
              sx={getLangButtonStyle("uk")}
            >
              УКР
            </Button>

            <Tooltip
              title="мова окупанта"
              placement="bottom"
              // followCursor
            >
              <Button
                variant="outlined"
                value="ru"
                onClick={handleClickChange}
                sx={getLangButtonStyle("ru")}
              >
                РУС
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.box}>
        <Typography sx={styles.size}>0-800-303-505</Typography>

        <Box sx={styles.boxCity} onClick={handleClickOpen}>
          <Typography>{cityName}</Typography>
          <DoneIcon />
        </Box>
      </Box>

      <Box>
        <CityDialog
          open={open}
          handleClose={handleClose}
          language={language}
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
        />
      </Box>

      <Box sx={styles.basket}>
        <ArrowBackIcon sx={styles.icon} />
        <Typography sx={styles.bold}>{t("basket.basket")}</Typography>

        <SumProductsInBasket />
      </Box>
    </Box>
  );
};

export default BasketHeader;
