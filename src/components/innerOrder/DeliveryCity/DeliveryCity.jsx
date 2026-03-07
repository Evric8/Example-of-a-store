import {
  Autocomplete,
  Box,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./StylesDeliveryCity";
import { useTranslation } from "react-i18next";
import getLanguageField from "../../../utils/getLanguageField";
import { useRef, useState } from "react";
import useDebounce from "../../../hooks/hook.useDebounce/useDebounce";
import { useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useDialogCity from "../../../hooks/hook.useDialogCity/useDialogCity";
import { formatCityOption } from "../../../utils/formatCityOption";
import { cities } from "../../../common/dialogs/CityDialog/constants";

const DeliveryCity = ({
  fetchCities,
  citiesAll,
  isFetching,
  selectedCity,
  setSelectedCity,
}) => {
  const [inputValue, setInputValue] = useState("");

  const { open, handleClose, handleOpenChange } = useDialogCity();

  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);

    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  const { t, i18n } = useTranslation();
  const language = getLanguageField(i18n.language);
  const cityNow = i18n.languages[0] === "ru" ? "cityRu" : "city";

  const debounce = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debounce.trim().length >= 3) {
      fetchCities(debounce);
    }
  }, [debounce, fetchCities]);

  const cityName = selectedCity[language]?.split("(")[0] || t("basket.city");

  // основна зміна — завжди створюємо новий об’єкт
  const handleOnChange = (event, newValue) => {
    if (!newValue) {
      setSelectedCity({});
      setInputValue("");
      return;
    }
    const updatedCity = { ...newValue };
    // console.log(updatedCity);
    setSelectedCity(updatedCity);
    setInputValue(updatedCity[language] || "");
    handleClose();
  };

  const handleOnInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleClickInputValue = (city) => {
    setInputValue(city[language]);
    setSelectedCity(city);
  };

  return (
    <Stack spacing={1} sx={styles.Stack}>
      <Box sx={styles.innerStack}>
        <Typography sx={styles.Typography}>Місто доставки:</Typography>
        <Box sx={styles.BoxLink} onClick={(e) => e.preventDefault()}>
          {cities.map((item) => (
            <Link
              key={item.ref}
              component="button"
              variant="body2"
              sx={styles.link}
              onClick={() => {
                // console.log(item[language]);
                handleClickInputValue(item);
              }}
            >
              {item[language]}
            </Link>
          ))}

          <Link
            component="button"
            variant="body2"
            sx={styles.link}
            onClick={(e) => {
              // console.log(e);
              handleOpenChange();
            }}
          >
            Інше місто
          </Link>
        </Box>
      </Box>

      <Box sx={styles.innerBox} onClick={handleOpenChange}>
        <Typography sx={styles.innerTypografy}>{cityName}</Typography>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Box>

      {open && (
        <Box ref={modalRef}>
          <Autocomplete
            disablePortal
            sx={styles.Autocomplete}
            options={citiesAll || []}
            loading={isFetching}
            value={selectedCity}
            onChange={handleOnChange}
            inputValue={inputValue || ""}
            onInputChange={handleOnInputChange}
            noOptionsText={
              inputValue.trim().length < 3
                ? t("noOptionsText.input")
                : t("noOptionsText.none")
            }
            getOptionLabel={(option) =>
              typeof option === "string"
                ? option
                : option[language] || option.description || ""
            }
            isOptionEqualToValue={(option, value) =>
              option && value ? option.ref === value.ref : false
            }
            renderOption={(props, option) => {
              const { main, details } = formatCityOption(option[language]);
              return (
                <Box component="li" {...props} key={option.ref}>
                  <Box>
                    <Typography>
                      <b>
                        {main} ({option[cityNow]})
                      </b>
                    </Typography>
                    {details && (
                      <Typography variant="body2">{details}</Typography>
                    )}
                  </Box>
                </Box>
              );
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      )}
    </Stack>
  );
};

export default DeliveryCity;
