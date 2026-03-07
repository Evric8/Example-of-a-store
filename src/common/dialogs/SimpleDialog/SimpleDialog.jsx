import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { styles } from "./StylesSimpleDialog";

const SimpleDialog = ({ onClose, open, products, filters, setFilters }) => {
  const handleSelect = (product) => {
    onClose();
    setFilters((prev) => ({
      ...prev,
      selectedValue: product,
    }));
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      slotProps={{
        paper: {
          sx: styles.paper,
        },
      }}
    >
      <DialogTitle sx={styles.alignSelf}>Вибір</DialogTitle>
      <List sx={styles.list}>
        {products.map((product) => (
          <ListItem disablePadding key={product} sx={styles.listItem}>
            <ListItemButton
              //Щоб показати, який пункт зараз обраний:
              selected={product === filters.selectedValue}
              onClick={() => handleSelect(product)}
            >
              <ListItemText primary={product} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default SimpleDialog;

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
