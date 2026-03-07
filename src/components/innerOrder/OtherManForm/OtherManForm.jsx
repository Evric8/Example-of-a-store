import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "./StylesOtherManForm";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import FormField from "../../forms/FormField/FormField";

const validationPhone = Yup.object().shape({
  phone: Yup.object({
    code: Yup.string().required("Оберіть код країни"),
    number: Yup.string()
      .required("Вкажіть номер телефону")
      // .matches(/^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/, "Некоректний номер"),
      .matches(/^[0-9]{9,9}$/, "Некоректний номер"),
  }),
});

const validationFirstName = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Закоротке ім'я")
    .max(50, "Задовге ім'я")
    .required("Вкажіть ім'я"),
});

const validationLastName = Yup.object().shape({
  lastName: Yup.string()
    .min(2, "Закоротке прізвище")
    .max(50, "Задовге прізвище")
    .required("Вкажіть прізвище"),
});

const validationMiddletName = Yup.object().shape({
  middleName: Yup.string()
    .min(2, "Закоротке по батькові")
    .max(50, "Задовге по батькові")
    .required("Вкажіть по батькові"),
});

// так можна робити експорт з інших папок щоб створювати багато різних форм і не повторуватись
const validation = validationFirstName
  .concat(validationLastName)
  .concat(validationMiddletName)
  .concat(validationPhone);

const OtherManForm = () => {
  const formik = useFormik({
    initialValues: {
      phone: { code: "+38", number: "" },
      firstName: "",
      lastName: "",
      middleName: "",
    },
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      resetForm({
        values: {
          phone: { code: "+38", number: "" },
          firstName: "",
          lastName: "",
          middleName: "",
        },
      });
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <FormField
          type="text"
          label="Ім'я одержувача"
          name="firstName"
          formik={formik}
        />

        <FormField
          type="text"
          label="Прізвище одержувача"
          name="lastName"
          formik={formik}
        />

        <FormField
          type="text"
          name="middleName"
          label="По батькові одержувача"
          formik={formik}
        />

        <FormField
          type="text"
          name="phone.number"
          label="Телефон одержувача"
          formik={formik}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={styles.adornment}>
                <Typography sx={styles.typography}>+380</Typography>
              </InputAdornment>
            ),
          }}
        />

        <Button
          //щоб користувач не міг відправити невалідну форму
          disabled={!formik.isValid || formik.isSubmitting}
          type="submit"
          variant="contained"
        >
          продовжити оформлення
        </Button>
      </Stack>
    </Box>
  );
};

export default OtherManForm;
