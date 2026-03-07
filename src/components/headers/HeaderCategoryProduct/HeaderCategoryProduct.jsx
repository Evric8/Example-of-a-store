import  { useContext, useState } from "react";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { Box, Button, Typography } from "@mui/material";
import SimpleDialog from "../../../common/dialogs/SimpleDialog/SimpleDialog";
import MaxDialog from "../../../common/dialogs/MaxDialod/MaxDialog";
import { CategoryContext } from "../../../features/contexts/CategoryContext";
import { styles } from "./StylesHeaderCategoryProduct";

const products = [
  "По популярності",
  "Від дешевих до дорогих",
  "Від дорогих до дешевих",
];

const HeaderCategoryProduct = () => {
  const { textName, category, setFilters, filters } =
    useContext(CategoryContext);
  // console.log(category);

  const [open, setOpen] = useState(false);
  const [maxOpen, setMaxOpen] = useState(false);

  const handleClickMaxOpen = () => {
    setOpen(false);
    setMaxOpen(true);
  };

  const handleMaxClose = () => {
    setMaxOpen(false);
  };

  const handleClickOpen = () => {
    setMaxOpen(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // console.log(category);
  return (
    <Box>
      <Box sx={styles.main}>
        <Box sx={styles.box}>
          <Typography sx={styles.bold}>{textName}</Typography>
          <Typography sx={styles.opacity}>
            {filters.title.length || category.length} моделей
          </Typography>
        </Box>
        
        <Box sx={styles.alignItems}>
          <SyncAltIcon sx={styles.SyncAltIcon} onClick={handleClickOpen} />
          <Button variant="contained" onClick={handleClickMaxOpen}>
            Фільтр
          </Button>
        </Box>
      </Box>

      <Box>
        {maxOpen ? (
          <MaxDialog
            open={maxOpen}
            onClose={handleMaxClose}
            category={category}
            setFilters={setFilters}
            filters={filters}
            products={products}
          />
        ) : (
          open && (
            <SimpleDialog
              filters={filters}
              setFilters={setFilters}
              open={open}
              onClose={handleClose}
              products={products}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default HeaderCategoryProduct;
