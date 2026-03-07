//no need
import { useState } from "react";
import { useGetProductsQuery } from "../../../features/FakeStoreApi/ProductsApi";
import { Box, Drawer, Grid, List, Typography } from "@mui/material";
import ProductCard from "../../../common/ProductCard/ProductCard";

const WomensClothing = () => {
  const { data } = useGetProductsQuery();
  // console.log(data);

  //??
  const [hoveredCardId, setHoveredCardId] = useState(null);

  if (!data) return <Box>Loading...</Box>;

  const WomensClothing = data.filter(
    (product) => product.category === "women's clothing",
  );

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            position: "relative",
            border: "1px solid #ccc",
          },
        }}
        open
      >
        <Box>
          <List>
            <Typography variant="h4" ml={5} mt={2}>
              Women's clothing
            </Typography>
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pl: 2,
          width: "100%",
        }}
      >
        <Box>
          <Grid container spacing={2}>
            {WomensClothing.map((item, index) => (
              <ProductCard
                item={item}
                key={item.id}
                hoveredCardId={hoveredCardId}
                setHoveredCardId={setHoveredCardId}
              />
            ))}
          </Grid>
        </Box>

        {/* <Example /> */}
      </Box>
    </Box>
  );
};

export default WomensClothing;
