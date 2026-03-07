import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { styles } from "./StylesDeliveryDepartment";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import MapDialog from "../../../common/dialogs/MapDialod/MapDialog";

const DeliveryDepartment = ({ data, formattedDate, selectedCity }) => {
  // console.log(data);
  // console.log(formattedDate);
  // console.log(!!selectedCity.ref);
  const isCity = !!selectedCity.ref;

  const [department, setDepartment] = useState("");
  const handleChangeDepartment = (event) => {
    // console.log(event.target.value);
    // console.log(event);
    setDepartment(event.target.value);
  };
  // console.log(!!department);

  const [isMapOpen, setIsMapOpen] = useState(false);
  const handleOpenMap = () => {
    setIsMapOpen(true)
  };
  const handleCloseMap = () => {
    setIsMapOpen(false);
  };
  
  return (
    <Box sx={styles.boxExport}>
      <Box sx={styles.boxHeader}>
        <Box sx={styles.boxMain}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={styles.IconButton}
          >
            <Brightness1Icon sx={styles.Brightness1Icon} />
          </IconButton>
          <Typography> Відділення Нова Пошта</Typography>
        </Box>
        <Box sx={styles.typography}>
          <Typography sx={styles.colorGreen}>
            доставимо {formattedDate}
          </Typography>
          <Typography sx={styles.colorGreen}>бескоштовно</Typography>
        </Box>
      </Box>

      {isCity ? (
        <Box sx={styles.boxSelect}>
          <FormControl sx={styles.FormControl}>
            <InputLabel id="demo-simple-select-label">
              Вкажіть відділення
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={department}
              label="Вкажіть відділення"
              onChange={handleChangeDepartment}
              MenuProps={{
                PaperProps: {
                  sx: styles.width,
                },
              }}
            >
              {data &&
                data.map((d, index) => (
                  <MenuItem
                    key={d.number}
                    value={index}
                    sx={{
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                  >
                    {d.description}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <Button onClick={handleOpenMap}>Подивись на Карті</Button>

          {isMapOpen && (
            <MapDialog
              isMapOpen={isMapOpen}
              handleCloseMap={handleCloseMap}
              data={data}
              department={department}
              setDepartment={setDepartment}
            />
          )}
        </Box>
      ) : (
        <Box sx={styles.boxSelect}>
          <Typography
            sx={styles.warning}
          >
            Виберіть місто доставки
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DeliveryDepartment;

