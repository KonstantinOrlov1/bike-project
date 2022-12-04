import { Outlet } from "react-router-dom";
import { Cart } from "../../components/Cart/Cart";
import { Order } from "../../components/Order/Order";
import { RentType } from "../../components/RentType/RentType";
import { Decor } from "../../components/Decor/Decor";
import { ReviewForm } from "../../components/Form/Form";

export const RentPage = () => {
  return (
    <div>
      <RentType />
      <Outlet />
      {/* <Cart />
      <Decor />
      <ReviewForm /> */}
      {/* <Order /> */}
    </div>
  );
};