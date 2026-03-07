export const styles = {
  boxExport: {
    border: "1px dashed var(--grey-color)",
    m: 2,
    mb: 0,
    p: 2,
    borderRadius: 2,
  },

  boxHeader: {
    display: { xs: "block", md: "flex" },
    gap: 2,
    justifyContent: "space-between",
  },

  boxMain: {
    display: "flex",
    gap: 1,
    alignItems: "center",
    // width: {xs:'auto',sm:"50%"},
    width: "220px",
    mb: 2,
  },

  IconButton: {
    maxWidth: "112px",
    ml: 1,
    backgroundColor: "var(--blue-color)",
    borderRadius: "32px",
    p: "3px",
    ":hover": {
      backgroundColor: "var(--blue-color-hover)",
    },
  },

  Brightness1Icon: { color: "var(--red-color)", width: 16, height: 16 },

  typography: {
    flex: 1,
    display: "flex",
    gap: 2,
    justifyContent: "space-between",
    ml: 1,
    mr: 1,
  },

  colorGreen: { color: "var(--green-color-oder)" },

  strit: {
    display: { minMd: "block", md: "flex" },
    alignItems: "center",
    gap: 4,
    mt: 4,
    mb: 2,
  },

  courierForm: { ml: 1, minWidth: "231px", width: "50%", mb: 2, backgroundColor: "#f3f1f1" },

  form: { "& > :not(style)": { m: 1, minWidth: "231px",width:'50%', mb: 3 } },

  boxHouse: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 1,
    mb: 2,
    ml: 1,
    "& > :not(style)": { width: "14ch" },
  },

  backgroundGrey: { backgroundColor: "#f3f1f1" },

  save: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    mb: 2,
  },

  courierStack: { border: "1px dashed tomato", p: 2, borderRadius: 2 },

  up: {
    display: { sm: "flex", sx: "blok" },
    justifyContent: "start",
    alignItems: "center",
    gap: 2,
  },

  flexCenter: { display: "flex", alignItems: "center" },

  componentForm: { "& > :not(style)": { m: 1, width: "14ch" } },

  free: { color: "#27AE60", mb: 1 },

  colorRed: { color: "red" },
};
