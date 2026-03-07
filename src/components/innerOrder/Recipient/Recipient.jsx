import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { styles } from "./StylesRecipient";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { useState } from "react";
import OtherManForm from "../OtherManForm/OtherManForm";

// Recipient = ресипієнт = одержувач
const recipients = [
  { id: "self", lable: "Я" },
  { id: "other", lable: "Інша людина" },
];

const Recipient = () => {
  const [selected, setSelected] = useState("self");
  const handleSelect = (id) => {
    setSelected(id);
  };
  return (
    <Box component="section" sx={styles.section}>
      <Accordion sx={styles.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={styles.span}>
            4. Отримувач
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.details}>
          <Box sx={styles.box}>
            {recipients.map((r) => (
              <Box
                key={r.id}
                sx={styles.boxMain}
                onClick={() => handleSelect(r.id)}
              >
                <IconButton
                  disableRipple
                  sx={{
                    ...styles.IconButton,
                    backgroundColor: selected === r.id ? "#e95d2a" : "white",
                  }}
                >
                  <Brightness1Icon sx={styles.Brightness1Icon} />
                </IconButton>
                <Typography>{r.lable}</Typography>
              </Box>
            ))}
          </Box>
          {selected === "other" && <OtherManForm/>}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Recipient;
