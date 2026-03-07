export const styles = {
  box: { m: 1, flex: 1 },

  boxInner: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    gap: 1,
  },

  formikBox: {
    mt: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  boxPhone: (errorPhone) => ({
    display: "flex",
    borderRadius: "4px",
    height: "56px",

    border: errorPhone
      ? "1px solid #d32f2f"
      : "1px solid rgba(181, 181, 181, 1)",
    "&:hover": {
      border: errorPhone
        ? `1px solid #d32f2f`
        : "1px solid rgba(90, 90, 90, 1)",
    },
    "&:focus-within": {
      border: errorPhone ? `2px solid #d32f2f` : "2px solid #277ad8ff",
      height: "54px",
    },
  }),

  select: { ml: 1 },

  selectBox: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    border: "none",
  },

  img: { width: 24, height: 16 },

  itemBox: { display: "flex", alignItems: "center", gap: 1 },

  textField: {
    display: "flex",
    justifyContent: "center",
  },

  input: (errorPhone) => ({
    textAlign: "center",
    "input::placeholder": errorPhone
      ? { color: "#d32f2f", opacity: 1 }
      : { color: "#757575ff", opacity: 1 },

    "&:before": { borderBottom: "none" },
    "&:after": { borderBottom: "none" },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    p: 0,
  }),

  errorBox: {
    ml: 1.5,
    mb: 1.2,
    fontSize: "0.844rem",
    lineHeight: "0px",
    color: "#d32f2f", //як MUI
    textAlign: "start",
  },

  translate: { translate: { md: "+50%", minMd: 0 } },
};

