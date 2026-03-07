import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormOrder from "../../forms/formOrder/FormOrder";
import { styles } from "./StylesSectionForm";
import GoogleIcon from "@mui/icons-material/Google";

const SectionForm = () => {
  return (
    <Box component="section" sx={styles.box}>
      <Accordion defaultExpanded sx={styles.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={styles.span}>
            1. Ваші контактні дані SectionForm
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "white" }}>
          <Box sx={styles.middleBox}>
            <FormOrder/>
            {/* <FormOrderUseFormik /> */}
            <Box sx={styles.halfBox}>
              <Stack sx={{ gap: 3 }}>
                <Typography>
                  Якщо ви постійний клієнт, авторизуйтесь за допомогою кнопки і
                  ми автоматично заповнимо ваші дані і збережемо всю інформацію
                  по замовленню і контактні дані.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: "60%",
                  }}
                >
                  Я постійний клієнт
                </Button>
                <Typography>
                  Або авторизуйтеся на сайті через соціальні мережі
                </Typography>
                <Button variant="outlined" sx={{ width: "60%" }}>
                  <GoogleIcon
                    sx={{
                      color: "vaw{--blue-color}",
                    }}
                  />
                </Button>
              </Stack>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SectionForm;
