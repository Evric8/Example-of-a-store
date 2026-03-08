import { Box } from "@mui/material";
import { styles } from "../FormOrder/StylesFormOrder";
import { getIn } from "formik";

const FormError = ({ name, formik }) => {
  const touched = getIn(formik.touched, name);
  const error = getIn(formik.errors, name);
  return touched && error ? <Box sx={styles.errorBox}>{error}</Box> : null;
};

export default FormError;

// const FormError = ({ name, formik }) => formik.touched[name] && formik.errors[name] ? (<Box sx={styles.errorBox}>{formik.errors[name]}</Box>) : null;

//formik.touched і formik.errors — це вкладені об’єкти, тож звернення formik.touched['phone.code'] не працює (бо там touched.phone.code).    Онови FormError так, щоб він правильно діставав вкладені значення (через getIn з formik) — тоді він працюватиме з будь-якими шляхами ("phone.code", "phone.number", "firstName" тощо)