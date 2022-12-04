import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../store/cart";
import { selectCartBikeCount } from "../../store/cart/selectors";
import styles from "./styles.module.css";

export const CardBtn = ({ bikeId }) => {
  const count = useSelector((state) => selectCartBikeCount(state, bikeId));
  const dispatch = useDispatch();

  const choose = () => dispatch(cartSlice.actions.chooseBike(bikeId));
  const cancel = () => dispatch(cartSlice.actions.cancelBike(bikeId));

  const btnChange = (event) => {
    if (event.target.textContent === "Выбрыть") {
      choose();
    } else {
      cancel();
    }
  };

  if (!count) {
    return (
      <button onClick={btnChange} className={styles.btn_free}>
        Выбрыть
      </button>
    );
  }

  if (count) {
    return (
      <button
        onClick={btnChange}
        className={classNames(styles.btn_free, styles.action)}
      >
        Выбрано
      </button>
    );
  }
};
