import { Box, Link } from "@mui/material";
import { StyledButton, Root, styles } from "./StylesTopHeader";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import { useTranslation } from "react-i18next";
import SelectLanguage from "../../../common/select/SelectLanguage/SelectLanguage";
import CityDialog from "../../../common/dialogs/CityDialog/CityDialog";
import useLocalStorageCity from "../../../hooks/hook.useLocalStorageCity/useLocalStorageCity";
import getLanguageField from "../../../utils/getLanguageField";
import useDialogCity from "../../../hooks/hook.useDialogCity/useDialogCity";

const TopHeader = () => {
  const { t, i18n } = useTranslation();

  const { open, handleClickOpen, handleClose } = useDialogCity();

  //add localStorige replace useState({})
  // +object or -null in useState({} or Null)
  // const [selectedCity, setSelectedCity] = useState({});
  const [selectedCity, setSelectedCity] = useLocalStorageCity(
    "selectedCity",
    {}
  );

  const language = getLanguageField(i18n.language);

  //t — це функція з бібліотеки react-i18next, яка дістає текстові значення з файлів локалізації (JSON з перекладами). Наприклад, у тебе може бути файл uk/translation.json
  //За замовчуванням t("topHeader.links") повертає рядок (якщо б у links було просто "Акції"). Але тут links — це об’єкт, тому ми вказуємо returnObjects: true, щоб отримати весь об’єкт.
  // Якщо тобі треба звернутись до всіх посилань як до об'єкта — не використовуй t() напряму, а замість цього використовуй t("topHeader.links", { returnObjects: true }):
  const links = t("topHeader.links", { returnObjects: true });
  const linksOrder = t("topHeader.linksOrder", { returnObjects: true });
  // console.log(links);
  // console.log(linksOrder);

  const cityName = selectedCity[language]?.split("(")[0] || t("topHeader.city");

  return (
    <Root>
      <Box sx={styles.mainBox}>
        <Box sx={styles.displayFlex}>
          <SelectLanguage />
          <Box sx={styles.cityBox} onClick={handleClickOpen}>
            <PlaceIcon />
            <StyledButton>{cityName}</StyledButton>
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

        <Box
          sx={styles.linkBox}
          onClick={(e) => e.preventDefault()} //=?
        >
          {linksOrder.map((key) => (
            <Link
              href="#"
              underline="hover"
              key={key}
              sx={{ color: key === "help" ? "var(--warning-color)" : "var(--link-color)" }}
            >
              {key === "help" && <CallIcon sx={styles.linkCallIcon} />}
              {links[key]}
            </Link>
          ))}
        </Box>
      </Box>
    </Root>
  );
};

export default TopHeader;
