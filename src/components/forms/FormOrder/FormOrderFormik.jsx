import {
  Typography,
  Box,
  Stack,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { styles } from "./StylesFormOrder";
import FormField from "../FormField/FormField";
import FormError from "../FormError/FormError";
import { FlagUK } from "../../../common/flags/FlagUK/FlagUK";
import LineFlags from "../../../common/flags/LineFlag/LineFlags";
import FlagPl from "../../../common/flags/FlagPl/FlagPl";
import { FlagUSA } from "../../../common/flags/FlagUSA/FlagUSA";

const countryCodes = [
  {
    value: "+38",
    label: "Україна",
    flag: <FlagUK />,
  },
  {
    value: "+48",
    label: "Польща",
    flag: <FlagPl />,
  },
  {
    value: "+4",
    label: "FRG",
    flag: (
      <LineFlags colors={["#000000", "#DD0000", "#FFCE00"]} borderWidth={0} />
    ),
  },
  {
    value: "+1",
    label: "USA",
    flag: <FlagUSA />,
  },
];

const FormOrderFormik = ({ formik, errorPhone }) => {
  return (
    <Box sx={styles.box}>
      <Box sx={styles.boxInner}>
        <FlagUK />
        <Typography>
          Будь ласка, заповнюйте всі поля українською мовою
        </Typography>
      </Box>

      <Box component="form" onSubmit={formik.handleSubmit}>
        <Box sx={styles.formikBox}>
          {/* Поле з кодом країни + телефон */}
          <Box sx={styles.boxPhone(errorPhone)}>
            <Select
              variant="standard"
              disableUnderline
              sx={styles.select}
              value={formik.values.phone.code}
              name="phone.code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              renderValue={(selected) => {
                const country = countryCodes.find((c) => c.value === selected);
                return (
                  <Box sx={styles.selectBox}>
                    {typeof country.flag === "string" ? (
                      <img
                        src={country.flag}
                        alt={country.label}
                        style={styles.img}
                      />
                    ) : (
                      country.flag
                    )}
                    {country.value}
                  </Box>
                );
              }}
            >
              {countryCodes.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                  <Box sx={styles.itemBox}>
                    {typeof country.flag === "string" ? (
                      <img
                        src={country.flag}
                        alt={country.label}
                        style={styles.img}
                      />
                    ) : (
                      country.flag
                    )}
                    {country.label} ({country.value})
                  </Box>
                </MenuItem>
              ))}
            </Select>

            <TextField
              variant="standard"
              inputMode="tel"
              fullWidth
              type="tel"
              name="phone.number"
              placeholder="Телефон"
              value={formik.values.phone.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phone?.number &&
                Boolean(formik.errors.phone?.number)
              }
              sx={styles.textField}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: styles.input(errorPhone),
                },
              }}
            />
          </Box>
          <FormError name="phone.code" formik={formik} />
          <FormError name="phone.number" formik={formik} />

          <Stack direction="row" spacing={2}>
            <FormField
              type="text"
              label="Ім'я"
              name="firstName"
              formik={formik}
            />
            <FormField
              type="text"
              label="Прізвище"
              name="lastName"
              formik={formik}
            />
          </Stack>

          <FormField
            type="text"
            name="middleName"
            label="По батькові"
            formik={formik}
          />

          <FormField type="text" label="email" name="email" formik={formik} />

          <FormField
            type="password"
            label="Пароль"
            name="password"
            formik={formik}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FormOrderFormik;
