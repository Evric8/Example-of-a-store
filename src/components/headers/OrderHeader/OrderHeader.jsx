import { Box, IconButton, Stack, Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { styles } from "./StylesOrderHeader";

const OrderHeader = () => {
  return (
    <Box
      component="section"
      sx={styles.box}
    >
      <Stack spacing={2}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          translate="no"
          sx={styles.IconButton}
        >
          SHOP
          <Brightness1Icon sx={styles.Brightness1Icon} />
        </IconButton>
        <Typography variant="h5">Оформлення замовлення</Typography>
        <Stack direction="row" spacing={2}>
          <Typography>Центр підтримки:</Typography>
          <Typography variant="subtitle1" sx={styles.tel}>
            0-800-303-505
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default OrderHeader;
