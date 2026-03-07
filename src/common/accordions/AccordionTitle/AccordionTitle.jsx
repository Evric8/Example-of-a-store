import {
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { checkboxStyle } from "../../../utils/muiStyles";
import { styles } from "./StylesAccordionTitle";

const AccordionTitle = (props) => {
  const {
    search,
    handleSearchChange,
    searchFilter,
    filters,
    handleTitleChecked,
  } = props;

  return (
    <>
      <AccordionDetails sx={styles.flex}>
        <TextField
          fullWidth
          label={
            <Typography style={styles.alignItems}>
              <SearchIcon />
              Пошук
            </Typography>
          }
          id="fullWidth"
          value={search}
          onChange={handleSearchChange}
        ></TextField>
      </AccordionDetails>
      <AccordionDetails>
        <FormGroup>
          {searchFilter.length === 0 ? (
            <Typography sx={styles.auto}>Нічого не знайдено</Typography>
          ) : (
            searchFilter.map((item) => {
              return (
                <FormControlLabel
                  key={item + item.length}
                  control={<Checkbox sx={checkboxStyle} />}
                  //checked - this привязка до filters.titlte
                  checked={filters.title.includes(item)}
                  label={item}
                  value={item}
                  onChange={handleTitleChecked}
                />
              );
            })
          )}
        </FormGroup>
      </AccordionDetails>
    </>
  );
};

export default AccordionTitle;
