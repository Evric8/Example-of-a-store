import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ButtonsGroupCount from "../../../common/buttons/buttonsGroupCount/ButtonsGroupCount";
import { styles } from "./StylesOrderGoods";
import { useState } from "react";

const OrderGoods = () => {
  const [open, setOpen] = useState(true);

  const goods = useSelector((state) => state.counter.basket);
  // console.log(goods);
  
  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <Box component="section" sx={styles.box}>
      <Accordion sx={styles.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          onClick={handleOpenChange}
        >
          <Typography component="span" sx={styles.Typography}>
            Ваші товари
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={1}>
            {goods.map((i) => (
              <Box
                key={i.title}
                component="img"
                src={i.image}
                alt={i.title}
                sx={styles.goodsImage}
              />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ display: open ? "block" : "none" }}>
        <Stack spacing={2} sx={styles.m}>
          {goods &&
            open &&
            goods.map((i) => (
              <Paper key={i.title} sx={styles.paper}>
                <Stack direction="row" spacing={2} sx={styles.mb}>
                  <Badge
                    badgeContent={<ClearIcon sx={styles.ClearIcon} />}
                    sx={styles.badge}
                  >
                    <Box
                      component="img"
                      src={i.image}
                      alt={i.title}
                      sx={styles.boxBadge}
                    />
                  </Badge>

                  <Stack spacing={1}>
                    <Typography sx={styles.title}>{i.title}</Typography>

                    <Typography sx={styles.price}>
                      {i.price}
                      <AttachMoneyIcon sx={styles.AttachMoneyIcon} />
                    </Typography>
                  </Stack>
                </Stack>
                <ButtonsGroupCount item={i} />
              </Paper>
            ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default OrderGoods;
