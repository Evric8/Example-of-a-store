import  { useContext } from "react";
import { Box, Grid} from "@mui/material";
import ProductCard from "../../../common/ProductCard/ProductCard";
import { HomeContext } from "../../../features/contexts/HomeContext";

const MainProducts = () => {
  const { filteredProducts } = useContext(HomeContext);
  // console.log(filteredProducts);

  return (
    <Box>
      <Grid container spacing={2}>
        {filteredProducts.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default MainProducts;
