import {
  Autocomplete,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./StylesOrderCityChoose";
import { useTranslation } from "react-i18next";
import useLocalStorageCity from "../../../hooks/hook.useLocalStorageCity/useLocalStorageCity";
import getLanguageField from "../../../utils/getLanguageField";
import { useLazyGetCitiesBySearchQuery } from "../../../features/NovaPoshtaApi/NovaPoshtaApi";
import { useRef, useState } from "react";
import useDebounce from "../../../hooks/hook.useDebounce/useDebounce";
import { useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useDialogCity from "../../../hooks/hook.useDialogCity/useDialogCity";
import { formatCityOption } from "../../../utils/formatCityOption";

const OrderCityChoose = () => {
  const [selectedCity, setSelectedCity] = useLocalStorageCity(
    "selectedCity",
    {}
  );

  const [inputValue, setInputValue] = useState("");

  const { open, handleClose, handleOpenChange } =
    useDialogCity();

  //+
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
  //-

  const [fetchCities, { data: citiesAll = [], isFetching }] =
    useLazyGetCitiesBySearchQuery();

  const { t, i18n } = useTranslation();
  // console.log(i18n);
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
    // нове посилання
    const updatedCity = { ...newValue }; 
    setSelectedCity(updatedCity);
    setInputValue(updatedCity[language] || "");
    // console.log("Вибране місто:", JSON.parse(JSON.stringify(updatedCity)));
    handleClose();
  };

  const handleOnInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    // console.log("Обране місто:", JSON.parse(JSON.stringify(newInputValue)));
  };

  return (
    <Box component="section" sx={styles.box}>
      <Stack spacing={1} sx={styles.Stack}>
        <Typography sx={styles.Typography}>Місто доставки:</Typography>

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
                const { key, ...rest } = props;
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
    </Box>
  );
};

export default OrderCityChoose;
