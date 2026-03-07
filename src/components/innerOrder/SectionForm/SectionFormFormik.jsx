import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "./StylesSectionForm";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GoogleIcon from "@mui/icons-material/Google";
import FormOrderFormik from "../../forms/FormOrder/FormOrderFormik";

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
    .email("Некоректна адреса")
    .lowercase()
    .trim()
    .required("Вкажіть email"),
  password: Yup.string()
    .min(8, "Мнімум 8 символів")
    .max(20)
    .required("Вкажіть пароль"),
});

const SectionFormFormik = () => {
  const formik = useFormik({
    initialValues: {
      phone: { code: "+38", number: "" },
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      //   console.log(values);
      resetForm();
    },
  });

  const errorPhone =
    (formik.touched.phone?.code && formik.errors.phone?.code) ||
    (formik.touched.phone?.number && formik.errors.phone?.number);

  return (
    <Box component="section" sx={styles.box}>
      <Accordion defaultExpanded sx={styles.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={styles.span}>
            1. Ваші контактні дані
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.AccordionDetails}>
          <Box sx={styles.middleBox}>
            {/* <FormOrder/> */}
            <FormOrderFormik formik={formik} errorPhone={errorPhone} />
            <Box sx={styles.halfBox}>
              <Stack sx={styles.Stack}>
                <Typography>
                  Якщо ви постійний клієнт, авторизуйтесь за допомогою кнопки і
                  ми автоматично заповнимо ваші дані і збережемо всю інформацію
                  по замовленню і контактні дані.
                </Typography>
                <Button variant="contained" sx={styles.width}>
                  Я постійний клієнт
                </Button>
                <Typography>
                  Або авторизуйтеся на сайті через соціальні мережі
                </Typography>
                <Button variant="outlined" sx={styles.width}>
                  <GoogleIcon
                    sx={styles.color}
                  />
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box sx={styles.buttonBox}>
            <Button
              disabled={!formik.isValid || formik.isSubmitting}
              type="submit"
              variant="contained"
              sx={styles.innerButton}
            >
              продовжити оформлення
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SectionFormFormik;
