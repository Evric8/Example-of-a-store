import { Box } from "@mui/material";
import MainProducts from "../MainProducts/MainProducts";
import MainDrawer from "../../../common/drawers/MainDrawer";
import { styles } from "./StylesPrimaryHome";

const PrimaryHome = () => {
  return (
    <Box sx={styles.wrapper}>
      <MainDrawer />

      <Box component="main" sx={styles.box}>
        <MainProducts />
      </Box>
    </Box>
  );
};

export default PrimaryHome;
