import {
  Autocomplete,
  Box,
  Checkbox,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./StylesDeliveryCourier";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { useState } from "react";

const DeliveryCourier = ({ data, formattedDate, selectedCity }) => {
  const [address, setAddress] = useState({
    street: null,
    streetInput: "",
    house: "",
    apartment: "",
    saveAddress: true,
  });

  //Тепер всі options унікальні (тобто key)
  const dataStreet = [
    ...new Set(data?.map((d) => d.address.split(",").splice(1).join())),
  ];
  // console.log(dataStreet[0]);
  // console.log(data);

  const isCity = !!selectedCity.ref;
  // console.log(isCity);

  const updateAddress = (field, value) => {
    setAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleChangeCheked = (e) => {
    const value = e.target.checked;
    // console.log(value);
    if (!value) {
      setAddress({
        street: null,
        streetInput: "",
        house: "",
        apartment: "",
        saveAddress: false,
      });
    } else {
      updateAddress("saveAddress", true);
    }
  };

  return (
    <Box sx={styles.boxExport}>
      {/* header */}
      <Box sx={styles.boxHeader}>
        <Box sx={styles.boxMain}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={styles.IconButton}
          >
            <Brightness1Icon sx={styles.Brightness1Icon} />
          </IconButton>
          <Typography> Кур'єр Нова Пошта </Typography>
        </Box>

        <Box sx={styles.typography}>
          <Typography sx={styles.colorGreen}>
            доставимо {formattedDate}
          </Typography>
          <Typography sx={styles.colorGreen}>259$</Typography>
        </Box>
      </Box>
      {/* main */}
      <Box sx={styles.strit}>
        {isCity ? (
          <Autocomplete
            disabled={!address.saveAddress}
            freeSolo
            options={dataStreet}
            sx={styles.courierForm}
            value={address.street}
            inputValue={address.streetInput}
            onChange={(event, newValue) => {
              updateAddress("street", newValue);
            }}
            onInputChange={(event, newValue) => {
              updateAddress("streetInput", newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Вкажіть  вулицю" />
            )}
          />
        ) : (
          <Box component="form" sx={styles.form} noValidate autoComplete="off">
            <TextField
              disabled={!address.saveAddress}
              id="outlined-basic"
              label="Вкажіть  вулицю"
              variant="outlined"
              sx={styles.backgroundGrey}
              value={address.streetInput}
              onChange={(e) => {
                updateAddress("streetInput", e.target.value);
              }}
            />
          </Box>
        )}

        <Box
          component="form"
          sx={styles.boxHouse}
          noValidate
          autoComplete="off"
        >
          <TextField
            disabled={!address.saveAddress}
            id="delivery-house"
            label="Будинок"
            variant="outlined"
            sx={styles.backgroundGrey}
            value={address.house}
            onChange={(e) => updateAddress("house", e.target.value)}
          />
          <TextField
            disabled={!address.saveAddress}
            id="delivery-apartment"
            label="Квартира"
            variant="outlined"
            sx={styles.backgroundGrey}
            value={address.apartment}
            onChange={(e) => updateAddress("apartment", e.target.value)}
          />
        </Box>
      </Box>

      {/* checked */}
      <Box sx={styles.save}>
        <Checkbox
          // defaultChecked
          checked={address.saveAddress}
          onChange={handleChangeCheked}
        />
        <Typography>Зберегти адресу</Typography>
      </Box>

      {/* add */}
      <Stack sx={styles.courierStack}>
        <Typography>Додаткові послуги при доставці:</Typography>
        <Box sx={styles.up}>
          <Box sx={styles.flexCenter}>
            <Checkbox />
            <Typography>Підйом на поверх</Typography>
          </Box>
          <Box
            component="form"
            sx={styles.componentForm}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="delivery-floor"
              label="Поверх"
              variant="outlined"
              sx={styles.backgroundGrey}
            />
          </Box>

          <Box sx={styles.flexCenter}>
            <Checkbox />
            <Typography>Ліфт</Typography>
          </Box>
        </Box>
        <Typography sx={styles.free}>безкоштовно</Typography>
        <Typography>
          <Typography component="span" sx={styles.colorRed}>
            Зверніть увагу:{" "}
          </Typography>
          у разі відсутності або несправності ліфта послуга «підйом на поверх»
          доступна:
        </Typography>
        <Typography>• для посилок до 30 кг: не вище 5-го поверху.</Typography>
        <Typography>• для посилок від 30 кг: не вище 1-го поверху.</Typography>
      </Stack>
    </Box>
  );
};

export default DeliveryCourier;
