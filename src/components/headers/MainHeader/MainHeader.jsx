import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { calculateBasketSummary, countBasket } from "../../../utils/math";
import { HomeContext } from "../../../features/contexts/HomeContext";
import { useState } from "react";
import { styles } from "../MainHeader/StylesMainHeader";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, InputBase } from "@mui/material";
import SlideCatalog from "../../../common/slideCatalog/SlideCatalog";
import { useTranslation } from "react-i18next";

const icons = [
  { icon: <PermIdentityIcon />, text: "mainHeader.logIn" },
  { icon: <BalanceIcon />, text: "mainHeader.comparison" },
  { icon: <FavoriteBorderIcon />, text: "mainHeader.selected" },
  { icon: <NotificationsNoneIcon />, text: "mainHeader.message" },
];

const MainHeader = () => {
  const basket = useSelector((state) => state.counter.basket);

  const { search, handleSearchChange, open, toggleDrawer } =
    useContext(HomeContext);
  // console.log(search,!!search);
  // console.log(filteredProducts);

  const [localSearch, setLocalSearch] = useState(search || "");
  // console.log(localSearch);

  const [isFocused, setIsFocused] = useState(false);
  // console.log(isFocused);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onInputCgange = (e) => {
    setLocalSearch(e.target.value);
    // console.log(e);
  };

  const handleClearLocalSearch = () => {
    setLocalSearch("");
  };

  const count = countBasket(basket);
  // console.log(typeof(count));

  const handleNavigate = () => {
    navigate("/basket");
  };

  const { allSum } = calculateBasketSummary(basket);
  // console.log(allSum);
  // console.log(basket);
  // console.log(count);
  // console.log(calculateBasketSummary(basket));

  return (
    <Box sx={styles.box}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={styles.toolBar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={styles.iconButton}
          >
            {/*"ЦЕ НЕ ПЕРЕКЛАДАЙ" Є спеціальний HTML-атрибут: translate="no" */}
            <span translate="no">SHOP</span>
            <Brightness1Icon sx={styles.brightness1Icon} />
          </IconButton>

          <Button
            variant="contained"
            sx={styles.buttonCatalog}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
            {t("mainHeader.catalog")}
          </Button>

          {open && <SlideCatalog open={open} toggleDrawer={toggleDrawer} />}

          <Box sx={styles.boxNav}>
            <Box sx={styles.searchWrapper}>
              <Box sx={styles.searchIconWrapper}>
                <SearchIcon />
              </Box>

              <Box sx={styles.displayCenter}>
                <InputBase
                  sx={styles.searchInput}
                  placeholder={t("mainHeader.placeholder")}
                  value={localSearch}
                  onChange={onInputCgange}
                  onFocus={handleFocused}
                  onBlur={handleBlur}
                />
                <Box sx={styles.widht}>
                  {(isFocused || localSearch) && (
                    <ClearIcon onClick={handleClearLocalSearch} />
                  )}
                </Box>
              </Box>

              <Button
                sx={styles.searchButton}
                onClick={() => {
                  // Якщо потрібен додатковий пошук за натисканням
                  handleSearchChange(localSearch);
                  handleClearLocalSearch();
                }}
              >
                {isFocused ? t("mainHeader.find") : t("mainHeader.goods")}
              </Button>
            </Box>

            <Box sx={styles.boxIcon}>
              <Box sx={styles.display}>
                {icons.map((i) => {
                  return (
                    <Box key={i.text}>
                      {i.icon}
                      <Typography sx={styles.typographyIcon}>
                        {t(i.text)}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>

              <Box sx={styles.boxBasket} onClick={handleNavigate}>
                <ShoppingCartOutlinedIcon sx={styles.textAlign} />
                <Box>
                  <Typography sx={styles.font}>
                    {t("mainHeader.total")}
                  </Typography>
                  <Box sx={styles.boxSum}>
                    <Typography>{allSum}</Typography>
                    <AttachMoneyIcon sx={styles.attachMoneyIcon} />
                  </Box>
                </Box>

                <Badge badgeContent={count} color="warning" />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainHeader;

/* Dialog
import CatalogDialog from "../../../common/dialogs/CatalogDialog/CatalogDialog";
import { useRef } from "react";

//dialog start
  const [open, setOpen] = useState(false);
  const openButtonRef = useRef(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    // Затримка фокусу до завершення анімації діалогу Material UI Dialog має анімацію (~200–300ms). Якщо фокус встановлюється раніше, ніж aria-hidden зникає, виникає конфлікт. Дати час анімації завершитись. Адаптуй час під анімацію Slide- ,300)
    setTimeout(() => {
      openButtonRef.current?.focus();
    }, 300);
  };
  // уточнення
    const handleClose = () => {
    setOpen(false);
    // Затримка фокусу до завершення анімації діалогу Material UI Dialog має анімацію (~200–300ms). Якщо фокус встановлюється раніше, ніж aria-hidden зникає, виникає конфлікт. Дати час анімації завершитись. Адаптуй час під анімацію Slide- ,300) Збільшити setTimeout до 500мс+ У тебе Dialog використовує Slide з timeout: 500, але фокус повертається після 300 мс:  TransitionProps={{ timeout: 500, <-- Тут 500
    setTimeout(() => {
      openButtonRef.current?.focus();
    }, 600);
  };
  //dialog end
  // 
   {<Button
     variant="contained"
     sx={styles.buttonCatalog}
     onClick={handleClickOpen}
     ref={openButtonRef}
      >
      <MenuIcon />
         каталог
    </Button>}

    //
   {<Box>
      <CatalogDialog open={open} handleClose={handleClose} />
    </Box> }

//пояснення
  Що відбувається:
Коли відкривається Dialog (CatalogDialog), Material UI автоматично встановлює aria-hidden="true" на root-контейнер (тобто весь сайт, крім діалогу). Це потрібно, щоб зробити діалог модальним: доступним лише він, все інше — "недоступне для читачів екрана".

Але у твоєму випадку після закриття діалогу ти викликаєш:
setTimeout(() => {
  openButtonRef.current?.focus();
}, 300);
Іншими словами: ти примусово повертаєш фокус назад до кнопки, яка знаходиться всередині <div id="root">, але цей div все ще має aria-hidden="true", бо анімація закриття діалогу ще не завершилась.

✅ Рішення
🔧 Варіант 1: Збільшити setTimeout до 500 мс
У тебе Dialog використовує Slide з timeout: 500, але фокус повертається після 300 мс:
<Dialog
  ...
  TransitionProps={{
    timeout: 500, // <-- Тут 500
  }}
Тому замість:
setTimeout(() => {
  openButtonRef.current?.focus();
}, 300);
Спробуй:
setTimeout(() => {
  openButtonRef.current?.focus();
}, 500); // або 550-600 для більшої гарантії */

// Якщо проєкт великий — краще розділити переклади на кілька файлів по "namespace" (header, footer, menu, auth, basket, тощо), щоб було зручно орієнтуватися та масштабувати.
