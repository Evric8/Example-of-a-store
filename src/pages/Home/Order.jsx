import { Container } from "@mui/material";
import OrderHeader from "../../components/headers/OrderHeader/OrderHeader";
import OrderCityChoose from "../../components/innerOrder/OrderCityChoose/OrderCityChoose";
import OrderGoods from "../../components/innerOrder/OrderGoods/OrderGoods";
import SectionFormFormik from "../../components/innerOrder/SectionForm/SectionFormFormik";
import Delivery from "../../components/innerOrder/Delivery/Delivery";
import Payment from "../../components/innerOrder/Payment/Payment";
import Recipient from "../../components/innerOrder/Recipient/Recipient";
import Consultation from "../../components/innerOrder/Сonsultation/Сonsultation";
import Total from "../../components/innerOrder/Total/Total";

const Order = () => {
  return (
    <Container>
      <OrderHeader />

      <OrderCityChoose />

      <OrderGoods />

      {/* ?+ or ?-*/}
      {/* <SectionForm /> */}
      <SectionFormFormik />
      {/* ?- */}

      <Delivery />

      <Payment />

      <Recipient />

      <Consultation />

      <Total />
      
    </Container>
  );
};

export default Order;
