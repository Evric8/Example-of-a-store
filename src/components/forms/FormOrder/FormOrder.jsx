import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  Typography,
  Box,
  Button,
  Stack,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import LineFlags from "../../../common/flags/LineFlag/LineFlags";
import { FlagUK } from "../../../common/flags/flagUK/FlagUK";
import FormField from "../FormField/FormField";
import { styles } from "./StylesFormOrder";
import FormError from "../FormError/FormError";
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
    value: "+49",
    label: "Germany",
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

const validation = Yup.object().shape({
  phone: Yup.object({
    code: Yup.string().required("Оберіть код країни"),
    number: Yup.string()
      .required("Вкажіть номер телефону")
      .matches(/^[0-9]{7,15}$/, "Некоректний номер"),
  }),
  firstName: Yup.string()
    .min(2, "Закоротке ім'я")
    .max(50, "Задовге ім'я")
    .required("Вкажіть ім'я"),
  lastName: Yup.string()
    .min(2, "Закоротке прізвище")
    .max(50, "Задовге прізвище")
    .required("Вкажіть прізвище"),
  middleName: Yup.string()
    .min(2, "Закоротке по батькові")
    .max(50, "Задовге по батькові")
    .required("Вкажіть по батькові"),
  email: Yup.string()
    //Якщо значення поля email не є дійсною електронною адресою, виводиться повідомлення 'Invalid email address'.
    .email("Invalid email address Некоректна адреса")
    .lowercase()
    .trim()
    .required("Вкажіть email"),
  password: Yup.string()
    .min(8, "Мнімум 8 символів")
    .max(20)
    .required("Вкажіть пароль"),
});

const FormOrder = () => {
  /*const formik = useFormik({
    initialValues: { title: ""},
    validateYupSchema: validation });
  ⚖️ Різниця: useFormik → все робиш через змінну formik.   <Formik> → Formik сам дає тобі formik у пропсах.   Функціонально однаково, тут питання стилю коду.*/

  return (
    <Box sx={styles.box}>
      <Box sx={styles.boxInner}>
        <FlagUK />

        <Typography>
          Будь ласка, заповнюйте всі поля українською мовою
        </Typography>
      </Box>

      <Formik
        initialValues={{
          phone: { code: "+38", number: "" },
          firstName: "", //ім'я
          lastName: "", //прізвище
          middleName: "", //по батькові
          email: "",
          password: "",
        }}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          // тут dispatch(addUser(values)) чи API виклик
          console.log(values);
          // очистити форму
          resetForm();
        }}
      >
        {(formik) => {
          const errorPhone =
            (formik.touched.phone?.code && formik.errors.phone?.code) ||
            (formik.touched.phone?.number && formik.errors.phone?.number);

          return (
            <Box component="form" onSubmit={formik.handleSubmit}>
              <Box sx={styles.formikBox}>
                {/* Поле з кодом країни + телефон */}
                <Box sx={styles.boxPhone(errorPhone)}>
                  <Select
                    variant="standard"
                    //Прибирає нижню лінію
                    disableUnderline
                    sx={styles.select}
                    value={formik.values.phone.code}
                    name="phone.code"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    renderValue={(selected) => {
                      const country = countryCodes.find(
                        (c) => c.value === selected,
                      );
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
                    //щоб на мобілках одразу викликався цифровий клавіатурний блок   inputMode="tel"
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

                <FormField
                  type="text"
                  label="email"
                  name="email"
                  formik={formik}
                />

                <FormField
                  type="password"
                  label="Пароль"
                  name="password"
                  formik={formik}
                />

                <Button
                  //щоб користувач не міг відправити невалідну форму
                  disabled={!formik.isValid || formik.isSubmitting}
                  type="submit"
                  variant="contained"
                  sx={styles.translate}
                >
                  продовжити оформлення
                </Button>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
};

export default FormOrder;

//В сумі:      name = каже Formik, з яким саме полем ми працюємо.      value = зв’язок з даними (formik.values).       onChange = оновлює values при зміні.     onBlur = включає валідацію після втрати фокусу.

// 👉 Дуже важливо для Formik. Це «шлях» до поля у formik.values.  Formik розуміє вкладені об’єкти, тому "phone.code" означає: «поле code всередині об’єкта phone». Тобто formik.values.phone.code буде прив’язане до цього Select.      ///name="phone.code"
// Formik сам обробляє зміну значення (він дивиться на event.target.name і оновлює правильне поле у values). Тому коли юзер обирає інший код країни, у formik.values.phone.code одразу оновлюється.   ///onChange={formik.handleChange}
//formik.setFieldValue("phone.code", "+1") — це метод Formik, який дозволяє точково оновити будь-яке поле у values, навіть якщо воно глибоко вкладене.    onChange={(e) => formik.setFieldValue("phone.code", e.target.value)}

// {formik.touched.phone?.code && formik.errors.phone?.code && (<Box sx={styles.errorBox}>{formik.errors.phone.code}</Box>)} or <FormError/>

//Крок 1. Встановлюєш бібліотеку
//npm install react-country-flag
//Крок 2. Міняєш countryCodes
//Крок 3. Оновлений Select у твоєму FormOrder
