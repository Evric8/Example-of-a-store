import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styles } from "./StylesDelivery";
import useLocalStorageCity from "../../../hooks/hook.useLocalStorageCity/useLocalStorageCity";
import {
  useGetWarehousesQuery,
  useLazyGetCitiesBySearchQuery,
} from "../../../features/NovaPoshtaApi/NovaPoshtaApi";
import DeliveryDepartment from "../DeliveryDepartment/DeliveryDepartment";
import DeliveryCity from "../DeliveryCity/DeliveryCity";
import DeliveryCourier from "../DeliveryCourier/DeliveryCourier";

const Delivery = () => {
  const [selectedCity, setSelectedCity] = useLocalStorageCity(
    "selectedCity",
    {}
  );

  const [fetchCities, { data: citiesAll = [], isFetching }] =
    useLazyGetCitiesBySearchQuery();
  // console.log(citiesAll);

  const { data } = useGetWarehousesQuery(selectedCity.ref);
  // console.log(data);

  const date = new Date();
  date.setDate(date.getDate() + 3);
  const formattedDate = new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long",
  }).format(date);

  return (
    <Box component="section" sx={styles.box}>
      <Accordion sx={styles.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={styles.Typography}>
            2. Доставка
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={styles.AccordionDetails}>
          {/* selectCity */}
          <DeliveryCity
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            fetchCities={fetchCities}
            citiesAll={citiesAll}
            isFetching={isFetching}
          />

          {/* department */}
          <DeliveryDepartment data={data} formattedDate={formattedDate} selectedCity={selectedCity}/>

          {/* courier */}
          <DeliveryCourier data={data} formattedDate={formattedDate} selectedCity={selectedCity}/>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Delivery;
