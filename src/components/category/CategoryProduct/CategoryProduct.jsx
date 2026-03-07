import { useMemo, useState } from "react";
import { useGetProductsQuery } from "../../../features/FakeStoreApi/ProductsApi";
import {
  Box,
  CircularProgress,
  Drawer,
  Grid,
  List,
  Typography,
} from "@mui/material";
import ProductCard from "../../../common/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import CategoryProvider from "../../../features/contexts/CategoryContext";
import HeaderCategoryProduct from "../../headers/HeaderCategoryProduct/HeaderCategoryProduct";
import { styles } from "./StylesCategotyProduct";

const CategoryProduct = () => {
  const { categoryName } = useParams();
  // console.log(categoryName);

  const { data, isLoading, error } = useGetProductsQuery();
  // console.log(data);

  const [filters, setFilters] = useState({
    selectedValue: "По популярності",
    category: "Усі",
    title: [],
    price: [0, 10000],
    rating: {
      count: "Усі",
      rate: "Усі",
    },
  });

  //memo start
  const category = useMemo(() => {
    return data?.filter((product) => product.category === categoryName);
  }, [data, categoryName]);

  const textName = useMemo(() => {
    return categoryName?.charAt(0).toUpperCase() + categoryName.slice(1);
  }, [categoryName]);

  const filteredProducts = useMemo(() => {
    const sortedProducts = (category ?? []).filter((product) => {
      const matchedCategory =
        filters.category === "Усі" || product.category === filters.category;

      const matchedTitle =
        filters.title.length === 0 || filters.title.includes(product.title);

      const matchedPrice =
        product.price >= filters.price[0] && product.price <= filters.price[1];
      //was (product.price <= filters.price[1] || '')

      const matchedRatingCount =
        filters.rating.count === "Усі" ||
        product.rating.count === Number(filters.rating.count);

      const matchedRatingRate =
        filters.rating.rate === "Усі" ||
        product.rating.rate === Number(filters.rating.rate);

      return (
        matchedCategory &&
        matchedTitle &&
        matchedPrice &&
        matchedRatingCount &&
        matchedRatingRate
      );
    });

    // toSorted працює тільки в нових браузерах. sortedProducts?.toSorted((a, b) => {
    return [...sortedProducts]?.sort((a, b) => {
      if (filters.selectedValue === "Від дешевих до дорогих")
        return a.price - b.price;
      if (filters.selectedValue === "Від дорогих до дешевих")
        return b.price - a.price;
      return 0;
    });
  }, [category, filters]);
  //memo end

  if (isLoading || !data) {
    return (
      <Box sx={styles.flex}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Typography>Немає даних</Typography>
        )}
      </Box>
    );
  }

  if (error)
    return (
      <Box sx={styles.flex}>
        <Typography>Сталася помилка при завантаженні товарів</Typography>
      </Box>
    );

  return (
    <CategoryProvider
      value={{
        category,
        textName,
        setFilters,
        filters,
      }}
    >
      <Box sx={styles.box}>
        <Drawer
          variant="permanent"
          sx={styles.drawer}
          open
        >
          <Box>
            <List>
              <Typography variant="h4" ml={2} mt={2}>
                {textName}
              </Typography>
            </List>
          </Box>
        </Drawer>

        <Box
          component="main"
          sx={styles.main}
        >
          <Box>
            <HeaderCategoryProduct />

            <Grid container spacing={2}>
              {filteredProducts?.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </CategoryProvider>
  );
};

export default CategoryProduct;
