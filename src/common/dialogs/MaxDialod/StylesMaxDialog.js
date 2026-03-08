export const styles = {
  boxHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pr: 3,
    mb: 2,
  },

  boxMain: {
    width: "98vw",
    m: "0 auto",
  },

  boxFooter: {
    position: "fixed",
    width: "98vw",
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#252323",
    alignItems: "center",
    color: "white",
  },

  buttonFooterThrow: {
    color: "white",
    opacity: 0.7,
    ml: 2,
    "&:hover": { backgroundColor: "#575353", opacity: 1 },
  },

  buttonFooterReady: {
    m: 2,
    backgroundColor: "#979090",
    color: "white",
    borderRadius: "12px",
    "&:hover": {
      backgroundColor: "#575353",
    },
  },
};
