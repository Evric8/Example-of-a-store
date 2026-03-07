import "./i18n"; // важливо!
import { Provider } from "react-redux";
import AllRouters from "./routers/AllRouters";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
// import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import Home from "./pages/Home/Home";
import Basket from "./pages/Home/Basket";
import Order from "./pages/Home/Order";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18next}>
            <Router>
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/order" element={<Order />} />
              </Routes>

              {/* <AllRouters /> */}
            </Router>
          </I18nextProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
