import { TextField } from "@mui/material";
import { getIn } from "formik";

const FormField = ({ type = "text", label, name, formik, ...props }) => {

  const value = getIn(formik.values, name);
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);
  // тут бачиш value
  // console.log(name, value);

  return (
    <TextField
      fullWidth
      type={type}
      label={label}
      name={name}
      value={value || ''}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={touched && Boolean(error)}
      helperText={touched && error}
      {...props}
    />
  );
};

export default FormField;
