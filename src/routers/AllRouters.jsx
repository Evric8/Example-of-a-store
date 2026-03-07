import { Routes, Route } from "react-router-dom";
import PrimaryHome from "../components/main/PrimaryHome/PrimaryHome";
import MainProductId from "../components/main/MainProductId/MainProductId";
import CategoryProduct from "../components/category/CategoryProduct/CategoryProduct";

const AllRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrimaryHome />} />
        <Route path="/:id" element={<MainProductId />} />
        <Route path="/category/:categoryName" element={<CategoryProduct />} />
      </Routes>
    </>
  );
};

export default AllRouters;
