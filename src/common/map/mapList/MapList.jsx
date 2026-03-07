import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { styles } from "./StylesMapList";

const MapList = ({
  data,
  department,
  listRef,
  handleCloseMap,
  previewIndex,
  onPreview,
  onSelect,
}) => {
  return (
    <List sx={styles.List}>
      <ListSubheader sx={styles.ListSubheader}>Всі відділення</ListSubheader>

      {data.map((item, index) => (
        <ListItem key={item.number}>
          <ListItemButton
            ref={(el) => (listRef.current[index] = el)}
            selected={previewIndex === index || department === index}
            onClick={() => onPreview(item, index)}
            sx={
              previewIndex === index
                ? styles.PreviewListItemButton
                : styles.ListItemButton
            }
          >
            <ListItemText primary={item.description} sx={styles.ListItemText} />
            <Button
              sx={styles.Button}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(item, index);
                handleCloseMap();
              }}
            >
              {department === index ? "Вже Вибрано" : "Вибрати"}
            </Button>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MapList;
