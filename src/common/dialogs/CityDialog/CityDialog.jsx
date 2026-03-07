import { useState, useEffect } from "react";
import {
  useGetCityRefQuery,
  useLazyGetCitiesBySearchQuery,
} from "../../../features/NovaPoshtaApi/NovaPoshtaApi.js";
import styles from "./stylesCityDialog.js";
import { cities, listCities } from "./constants.js";
import { formatCityOption } from "../../../utils/formatCityOption.js";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Slide, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import { useCallback } from "react";
import useDebounce from "../../../hooks/hook.useDebounce/useDebounce.js";
import { useTranslation } from "react-i18next";

const CityDialog = ({
  open,
  handleClose,
  language,
  setSelectedCity,
  selectedCity,
}) => {
  const [fetchCities, { data: citiesAll = [], isFetching }] =
    useLazyGetCitiesBySearchQuery();
  // console.log(citiesAll);

  // const { data: ref} = useGetCityRefQuery("e221d64c-391c-11dd-90d9-001a92567626");
  // console.log(ref?.data[0]);//якщо не має в transformResponse
  // console.log(ref);

  const [inputValue, setInputValue] = useState("");

  const debounce = useDebounce(inputValue, 500);

  // useEffect(() => {
  //   if (inputValue.trim().length >= 3) {
  //     fetchCities(debounce);
  //   }
  // }, [inputValue, fetchCities]);
  useEffect(() => {
    if (debounce.trim().length >= 3) {
      fetchCities(debounce);
    }
  }, [debounce, fetchCities]);
  // console.log(debounce);

  const { t, i18n } = useTranslation();
  const cityNow = i18n.languages[0] === "ru" ? "cityRu" : "city";

  const handleCityChange = (event, newValue) => {
    if (!newValue) {
      // setSelectedCity(null);
      setSelectedCity({});
      return;
    }
    setSelectedCity(newValue);
    setInputValue(newValue[language]);
    // console.log("Вибране місто:", newValue);
  };

  // const handleInputChange1 = (event) => {
  // if (event) setInputValue(event.target.value)};
  // const handleInputChange2 = (event) =>
  // event && setInputValue(event.target.value);
  // const handleInputChange3 = (event) =>
  // setInputValue(event?.target?.value ?? '');
  // MUI передає не просто event, а (event, newInputValue, reason). Ти зараз дістаєш з event.target.value, але краще відразу використати newInputValue:
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    // console.log(event, newInputValue);
  };

  const handleClickInputValue = (city) => {
    // console.log(city);
    setInputValue(city[language]);
    setSelectedCity(city);
  };

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={false}
      slots={{
        transition: Slide,
        paper: Paper,
      }}
      slotProps={{
        transition: {
          ...styles.transition,
        },
        paper: {
          sx: {
            ...styles.paper,
          },
        },
      }}
    >
      <DialogTitle sx={styles.title} id="customized-dialog-title">
        {t("DialogTitle.title")}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          ...styles.closeIcon,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers sx={styles.content}>
        <Box>
          <Autocomplete
            sx={styles.mb}
            options={citiesAll || []}
            loading={isFetching}
            value={selectedCity}
            onChange={handleCityChange}
            inputValue={inputValue || ""}
            onInputChange={handleInputChange}
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
            // краще додати isOptionEqualToValue, щоб MUI правильно визначав вибраний елемент і не плутав масиви з різними полями. Щоб працював коректно при порівнянні об’єктів.
            isOptionEqualToValue={(option, value) => option.ref === value.ref}
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
            renderInput={(params) => (
              <TextField
                {...params}
                label={t("renderInput.label")}
                placeholder={t("renderInput.placeholder")}
              />
            )}
          />
        </Box>

        <Box sx={styles.boxCities}>
          {cities.map((city, index) => {
            return (
              <Typography
                key={index}
                sx={styles.boxCity}
                onClick={() => handleClickInputValue(city)}
              >
                {city[language]}
              </Typography>
            );
          })}
        </Box>

        <Box component="ol" sx={styles.ol}>
          {listCities.map((city, index) => (
            <li key={index} onClick={() => handleClickInputValue(city)}>
              <Typography sx={styles.li}>{city[language]}</Typography>
            </li>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default CityDialog;

/* filterOptions вже не потрібно бо все обробляється в  useLazyGetCitiesBySearchQuery() через useEffect()
filterOptions={(options, state) => {
 // console.log(state)
  const search = state.inputValue.trim().toLowerCase();
  return search.length < 3 ? [] : options.filter((option) => option.description.toLowerCase().includes(search)
  );
}}  */
