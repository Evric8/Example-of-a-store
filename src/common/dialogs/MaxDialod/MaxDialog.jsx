import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import AccordionPrice from "../../accordions/AccordionPrice/AccordionPrice";
import AccordionPrimary from "../../accordions/AccordionPrimary/AccordionPrimary";
import AccordionTitle from "../../accordions/AccordionTitle/AccordionTitle";
import AccordionSelectedValue from "../../accordions/AccordionSelectedValue/AccordionSelectedValue";
import { styles } from "./StylesMaxDialog";

function MaxDialog(props) {
  const { onClose, open, category, setFilters, filters, products } = props;

  const [search, setSearch] = useState("");
  // console.log(!search.trim(), !!!search.trim());

  //  Memoізація фільтрованих значень js. Так ти уникаєш непотрібних обчислень на кожен ререндер.
  // Оновлюється ця змінна searchFilter тільки тоді, коли змінюється search або category.
  const searchFilter = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    // console.log(!normalizedSearch); //true при фокусі

    const categoryTitles = category.map((e) => e.title);

    if (!normalizedSearch) return categoryTitles;

    const includesSearch = categoryTitles.filter((t) =>
      t.trim().toLowerCase().includes(normalizedSearch),
    );

    return includesSearch.length ? includesSearch : [];
    //try/catch = захист від помилок
    // try {
    //   const normalizedSearch = search.trim().toLowerCase();
    //   const categoryTitles = category.map((e) => e.title);

    //   if (!normalizedSearch) return categoryTitles;

    //   const includesSearch = categoryTitles.filter((t) =>
    //     t.trim().toLowerCase().includes(normalizedSearch)
    //   );

    //   return includesSearch.length ? includesSearch : [];
    // } catch (e) {
    //   console.error("Помилка в searchFilter:", e);
    //   return [];
    // }
  }, [search, category]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      price: [value === "" ? "" : Number(value), prev.price[1]],
    }));
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      price: [prev.price[0], value === "" ? "" : Number(value)],
    }));
  };

  const handleTitleChecked = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setFilters((prev) => ({
      ...prev,
      title: checked
        ? [...prev.title, value]
        : prev.title.filter((t) => t !== value),
    }));
  };

  const handleChangeSelectedValue = (e) => {
    setFilters((prev) => ({
      ...prev,
      selectedValue: e.target.value,
    }));
  };

  const handleFilterThrow = () => {
    setFilters({
      selectedValue: "По популярності",
      category: "Усі",
      title: [],
      price: [0, 10000],
      rating: {
        count: "Усі",
        rate: "Усі",
      },
    });
  };

  return (
    <Dialog fullScreen onClose={onClose} open={open}>
      <Box sx={styles.boxHeader}>
        <DialogTitle>Фільтри</DialogTitle>
        <CloseIcon onClick={onClose} />
      </Box>

      <Box sx={styles.boxMain}>
        <AccordionPrimary
          title="Ціна"
          children={
            <AccordionPrice
              filters={filters}
              handleMinPriceChange={handleMinPriceChange}
              handleMaxPriceChange={handleMaxPriceChange}
            />
          }
        />

        <AccordionPrimary
          title="Назва товару"
          children={
            <AccordionTitle
              search={search}
              filters={filters}
              searchFilter={searchFilter}
              handleSearchChange={handleSearchChange}
              handleTitleChecked={handleTitleChecked}
            />
          }
        />

        <AccordionPrimary
          title="Вибір"
          children={
            <AccordionSelectedValue
              filters={filters}
              handleChangeSelectedValue={handleChangeSelectedValue}
              products={products}
            />
          }
        />

        <Box sx={styles.boxFooter}>
          <Button sx={styles.buttonFooterThrow} onClick={handleFilterThrow}>
            <Typography>Скинути</Typography>
          </Button>
          <Button sx={styles.buttonFooterReady} onClick={onClose}>
            ГОТОВО
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default MaxDialog;

MaxDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  category: PropTypes.array.isRequired,
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};
