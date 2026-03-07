export const styles = {
  //Самовивіз і відділення
  boxExport: {
    border: "1px dashed var(--grey-color)",
    m: 2,
    p: 2,
    borderRadius: 2,
  },

  boxMain: {
    display: "flex",
    gap: 1,
    alignItems: "center",
    width: "220px",
    mb: 2,
  },

  colorGreen: { color: "var(--green-color-oder)" },

  boxSelect: { display: "flex", gap: 6, mt: 4, mb: 2 },

  warning: {
    m: "0 auto",
    backgroundColor: "var(--warning-color)",
    pt: 2,
    pr: 8,
    pb: 2,
    pl: 8,
    borderRadius: 2,
  },

  //відділення
  boxHeader: {
    display: { xs: "block", md: "flex" },
    gap: 2,
    justifyContent: "space-between",
  },

  typography: {
    flex: 1,
    display: "flex",
    gap: 2,
    justifyContent: "space-between",
    ml: 1,
    mr: 1,
  },

  FormControl: { width: "50%" },

  // постав тут ширину Select або зроби авто
  width: { width: "38%" },

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
};
