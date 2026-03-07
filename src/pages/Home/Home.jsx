import { useState } from "react";
import MainHeader from "../../components/headers/MainHeader/MainHeader";
import MainFooter from "../../components/footers/MainFooter/MainFooter";
import TopHeader from "../../components/headers/TopHeader/TopHeader";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import AllRouters from "../../routers/AllRouters";
import { useGetProductsQuery } from "../../features/FakeStoreApi/ProductsApi";
import HomeContextProvider from "../../features/contexts/HomeContext";
import { useTranslation } from "react-i18next";
import { styles } from "./StylesHome";

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const { t, i18n } = useTranslation();

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  if (isLoading || !data) {
    return (
      <Box sx={styles.displaycenter}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Typography>{t("data.noData")}</Typography>
        )}
      </Box>
    );
  }

  if (isError)
    return (
      <Box sx={styles.displaycenter}>
        <Typography>{t("data.error")}</Typography>
      </Box>
    );

  const newSearch = search.trim().toLowerCase();
  // console.log(newSearch.length, !newSearch , typeof(newSearch));

  const filterSearch = data?.filter((product) => {
    return product.title.trim().toLowerCase().includes(newSearch);
  });

  const filteredProducts = !newSearch
    ? data
    : filterSearch.length
      ? filterSearch
      : [];

  const handleSearchChange = (e) => {
    // setSearch(e.target.value);
    setSearch(e);
  };

  return (
    <HomeContextProvider
      value={{
        search,
        filteredProducts,
        handleSearchChange,
        open,
        toggleDrawer,
      }}
    >
      <Box sx={styles.box}>
        <TopHeader />
        <MainHeader />
      </Box>

      <Container maxWidth="lg" sx={styles.Container}>
        <AllRouters />
      </Container>

      <MainFooter />
    </HomeContextProvider>
  );
};

export default Home;
