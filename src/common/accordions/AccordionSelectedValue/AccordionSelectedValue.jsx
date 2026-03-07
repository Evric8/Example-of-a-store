import {
  AccordionDetails,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { radioStyle } from "../../../utils/muiStyles";

const AccordionSelectedValue = (props) => {
  const { filters, handleChangeSelectedValue, products } = props;
  return (
    <AccordionDetails>
      <FormControl>
        <RadioGroup
          // defaultValue="По популярності" or value={value}
          value={filters.selectedValue}
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChangeSelectedValue}
        >
          {products.map((item) => {
            return (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio sx={radioStyle} />}
                label={item}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </AccordionDetails>
  );
};

export default AccordionSelectedValue;
