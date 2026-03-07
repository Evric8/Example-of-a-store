import { AccordionDetails, TextField, Typography } from "@mui/material";
import { styles } from "./StylesAccordionPrice";

const AccordionPrice = (props) => {
  const { filters, handleMinPriceChange, handleMaxPriceChange } = props;

  //?? Це оператор нульового злиття (nullish coalescing operator).
  //Він повертає ліву частину, якщо вона не є null або undefined.
  //Якщо ж filters.price[1] є null або undefined, тоді буде використано значення правої частини — 10000.
  const filtersPriceStart = filters.price[0] ?? "";

  const filtersPriceEnd =
    filters.price[1] !== undefined ? filters.price[1] : 10000;

  return (
    <AccordionDetails sx={styles.display}>
      <Typography>від</Typography>
      <TextField
        id="outlined-number"
        label="Мін"
        type="number"
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        value={filtersPriceStart}
        onChange={handleMinPriceChange}
      />
      <Typography>до</Typography>
      <TextField
        id="outlined-number"
        label="Макс"
        type="number"
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        value={filtersPriceEnd}
        onChange={handleMaxPriceChange}
      />
    </AccordionDetails>
  );
};

export default AccordionPrice;
