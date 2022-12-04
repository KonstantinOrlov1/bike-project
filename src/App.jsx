import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { RentPage } from "./pages/RentPage/RentPage";
import { About } from "./pages/About/About";
import { Delivery } from "./pages/Delivery/Deliveru";
import { Map } from "./pages/Map/Map";
import { Contacts } from "./pages/Contacts/Contacts";
import { Provider } from "react-redux";
import { store } from "./store";
import { Bikes } from "./components/Bikes/Bikes";
import { BikeType } from "./components/BikeType/BikeType";
import { Cart } from "./components/Cart/Cart";
import { Order } from "./components/Order/Order";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<About />} />
            <Route path="/rent" element={<RentPage />}>
              <Route path="day" element={<BikeType />}>
                <Route path=":biketypeid" element={<Bikes />} />
              </Route>
              <Route path="hour" element={<BikeType />}>
                <Route path=":biketypeid" element={<Bikes />} />
              </Route>
              {/* <Route index element={<Navigate to="day" replace />} /> */}
            </Route>
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
