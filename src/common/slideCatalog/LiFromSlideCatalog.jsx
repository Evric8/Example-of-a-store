import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetProductsQuery } from "../../features/FakeStoreApi/ProductsApi";
import MuiLink from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "../slideCatalog/SlideCataloge";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const LiFromSlideCatalog = ({ category, toggleDrawer }) => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const { t } = useTranslation();

  if (isLoading || !data) {
    return (
      <Box sx={styles.liCenter}>
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
      <Box sx={styles.liCenter}>
        <Typography>{t("data.error")}</Typography>
      </Box>
    );

  const filteredData = useMemo(
    () => data?.filter((item) => item.category === category),
    [data, category],
  );

  return (
    <Box component="ol" sx={styles.liOl}>
      {filteredData.map((i) => (
        <li key={i.id}>
          <MuiLink
            component={RouterLink}
            to={`/${i.id}`}
            underline="none"
            color="inherit"
            sx={styles.muiLink}
            onClick={() => toggleDrawer(false)}
          >
            {i.title.slice(0, 20) + "..."}
          </MuiLink>
        </li>
      ))}
    </Box>
  );
};

export default LiFromSlideCatalog;
