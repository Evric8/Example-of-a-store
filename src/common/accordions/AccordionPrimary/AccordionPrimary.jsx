import { Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styles } from "./StylesAccordionPrimary";

const AccordionPrimary = ({ title, children }) => {
  return (
    <Accordion
      defaultExpanded
      sx={styles.acordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <Typography component="span" sx={styles.span}>
          {title}
        </Typography>
      </AccordionSummary>
      {children}
    </Accordion>
  );
};

export default AccordionPrimary;
