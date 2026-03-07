//no need
import { Routes, Route } from "react-router-dom";
import MensClothing from "../components/category/MensClothing/MensClothing";
import WomansClothing from "../components/category/WomansClothing/WomansClothing";
import TvElectronics from "../components/category/TvElectronics/TvElectronics";
import Jewelery from "../components/category/Jewelery/Jewelery";

const HomeRouters = () => {
  return (
    <Routes>
      <Route path="Men's clothing" element={<MensClothing />} />
      <Route path="Woman's clothing" element={<WomansClothing />} />
      <Route path="Tv electronics" element={<TvElectronics />} />
      <Route path="Jewelery" element={<Jewelery />} />
    </Routes>
  );
};

export default HomeRouters;
