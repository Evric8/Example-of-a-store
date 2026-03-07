import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@mui/material";
import { styles } from "./StylesSelectLanguage";

export default function SelectLanguqge() {
  const { i18n } = useTranslation();
  // console.log("Current language:", i18n.language);

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box sx={styles.box}>
      <Select
        variant="standard"
        disableUnderline
        sx={styles.select}
        value={i18n.language}
        onChange={handleChange}
      >
        <MenuItem value="uk">укр</MenuItem>

        <MenuItem value="ru">
          <Tooltip title="мова окупанта" placement="right">
            <Box component="span" sx={styles.span}>
              рус
            </Box>
          </Tooltip>
        </MenuItem>

        <MenuItem value="en">en</MenuItem>
      </Select>
    </Box>
  );
}
