import { useDispatch, useSelector } from "react-redux";
import { selectBikeById } from "../../store/bikes/selectors";
import { BtnHelmet } from "../BtnsCart/BtnHelmet/BtnHelmet";
import { BtnLock } from "../BtnsCart/BtnLock/BtnLock";
import { BtnTorch } from "../BtnsCart/BtnTorch/BtnTorch";
import img from "./imgs/img.jpg";
import styles from "./styles.module.css";
import { cartSlice } from "../../store/cart";

export const CartItem = (bikeId) => {
  const dispatch = useDispatch();
  const bike = useSelector((state) => selectBikeById(state, bikeId));

  const delet = () => dispatch(cartSlice.actions.cancelBike(bikeId.bikeId));

  return (
    <div className={styles.table_row}>
      <div>
        <img src={img} alt="bikephoto" />
      </div>
      <div>{bike.model}</div>
      <BtnHelmet bikeId={bike.id} className={styles.sel} />
      <BtnTorch bikeId={bike.id} className={styles.sel} />
      <BtnLock bikeId={bike.id} className={styles.sel} />
      <div>{bike.price + "$"}</div>
      <button onClick={delet} className={styles.btn}></button>
    </div>
  );
};
