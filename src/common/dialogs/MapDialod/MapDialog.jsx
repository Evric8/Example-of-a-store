import { useState, useRef, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MapLeafLet from "../../map/mapLeaflet/MapLeafLet";
import { Box } from "@mui/material";
import MapList from "../../map/mapList/MapList";
import { styles } from "./StylesMapDialog";

const MapDialog = ({
  isMapOpen,
  handleCloseMap,
  data,
  department,
  setDepartment,
}) => {
  // console.log(data);
  // console.log(department);

  const noDepartment = [data[0].latitude, data[0].longitude];

  const position =
    department !== ""
      ? [data[department].latitude, data[department].longitude]
      : noDepartment;

  const [center, setCenter] = useState(position);

  const listRef = useRef({});

  const [previewIndex, setPreviewIndex] = useState(null);

  useEffect(() => {
    if (isMapOpen && department !== "" && data[department]) {
      const item = data[department];
      setCenter([item.latitude, item.longitude]);
      // даємо DOM трохи часу щоб відкрився діалог
      setTimeout(() => {
        listRef.current[department]?.scrollIntoView({
          behavior: "auto",
          block: "center",
        });
      }, 0);
    }
  }, [isMapOpen]);

  const handleClickPosition = (i, index) => {
    setDepartment(index);
    setCenter([i.latitude, i.longitude]);
    // scroll до елемента
    listRef.current[index]?.scrollIntoView({
      //smooth — плавна анімація
      behavior: "smooth",
      //center — елемент по центру контейнера
      block: "center",
    });
  };

  const handlePreviewPosition = (item, index) => {
    setPreviewIndex(index);
    setCenter([item.latitude, item.longitude]);
    listRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleSelectDepartment = (item, index) => {
    setDepartment(index);
  };

  return (
    <Box sx={styles.width}>
      <Dialog
        maxWidth={false}
        onClose={handleCloseMap}
        aria-labelledby="customized-dialog-title"
        open={isMapOpen}
        slotProps={{
          paper: {
            sx: styles.dialog,
          },
        }}
      >
        <DialogTitle sx={styles.title} id="customized-dialog-title">
          Карта
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseMap}
          sx={(theme) => styles.IconButton(theme)}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers sx={styles.DialogContent}>
          <MapLeafLet
            data={data}
            department={department}
            center={center}
            setCenter={setCenter}
            handleClickPosition={handleClickPosition}
            previewIndex={previewIndex}
          />

          <MapList
            data={data}
            department={department}
            listRef={listRef}
            handleCloseMap={handleCloseMap}
            onPreview={handlePreviewPosition}
            onSelect={handleSelectDepartment}
            previewIndex={previewIndex}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default MapDialog;
