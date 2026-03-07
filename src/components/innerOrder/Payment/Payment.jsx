import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { styles } from "./StylesPayment";
import { useState } from "react";

const payments = [
  {
    id: 0,
    title: "Оплата при отриманні",
    desc: "Сплачуйте своє замовлення готівкою, банківською карткою або онлайн під час отримання",
  },
  {
    id: 1,
    title: "Онлайн оплата",
    desc: "Visa, MasterCard, Apple Pay, Google Pay, PrivatPay",
  },
  {
    id: 2,
    title: "Банківський переказ",
    desc: "Оплата для юридичних осіб через розрахунковий рахунок",
  },
  {
    id: 3,
    title: "Оплата частинами",
    desc: "Оформіть покупку зараз — сплачуйте частинами через зручний банк",
  },
  {
    id: 4,
    title: "Кредит",
    desc: "Оберіть класичний кредит від провідних банків України",
  },
];

const Payment = () => {
  const [selected, setSelected] = useState(null);
  
  return (
    <Box component="section" sx={styles.box}>
      <Accordion sx={styles.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={styles.span}>
            3. Оплата
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.AccordionDetails}>
          <Stack spacing={2} sx={{ m: 2 }}>
            {payments.map((p) => (
              <Box key={p.id} sx={styles.Box} onClick={() => setSelected(p.id)}>
                <Box sx={styles.boxMain}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                      ...styles.IconButton,
                      backgroundColor: selected === p.id ? "#e95d2a" : "white",
                    }}
                  >
                    <Brightness1Icon sx={styles.Brightness1Icon} />
                  </IconButton>
                  <Typography>{p.title}</Typography>
                </Box>
                <Typography sx={styles.Typography}>{p.desc}</Typography>
              </Box>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Payment;
