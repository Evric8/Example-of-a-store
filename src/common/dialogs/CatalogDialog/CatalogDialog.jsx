//no need
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CatalogDialog = (props) => {
  const { open, handleClose } = props;
  return (
    <Dialog
      //slotProps.paper — це об'єкт, який буде переданий як пропси до внутрішнього компонента Paper, що рендериться всередині Dialog. Атрибути стилів (sx, style) працюють саме тут
      slotProps={{
        paper: {
          sx: {
            top:'-158px',
            width: "100vw",
            height: 400, // або '80vh', якщо відносно вікна
            maxWidth: "none", // важливо, якщо хочеш більшу ширину ніж стандартна
          },
        },
      }}
      open={open}
      onClose={handleClose}
      slots={{
        transition: Transition,
      }}
      //+ 500 мс — тривалість анімації
      TransitionProps={{
        timeout: 500,
      }}
      // забороняє Material UI автоматично "відновлювати фокус" після закриття діалогу (бо ми вже самі це робимо через ref.focus()).
      disableRestoreFocus
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleClose} autoFocus>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        <ListItemButton>
          <ListItemText
            // id="alert-dialog-slide-description"
            primary="Phone ringtone"
            secondary="Titania"
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItemButton>
      </List>
    </Dialog>
  );
};

export default CatalogDialog;
