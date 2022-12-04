import { useSelector } from "react-redux";
import { selectBikesCost } from "../../store/bikes/selectors";
import { selectCartBikeIds } from "../../store/cart/selectors";
import { OrderItem } from "../OrderItem/OrderItem";
import styles from "./styles.module.css";

export const Order = () => {
  const bikes = useSelector(selectCartBikeIds);
  const sum = useSelector((state) => selectBikesCost(state, bikes));

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Ваш заказ успешно оформлен</h1>

      <div className={styles.title_container}>
        <span className={styles.title_table}>Название велосипедов</span>
        <span className={styles.title_table}>Стоимость</span>
      </div>
      {bikes.map((id) => (
        <OrderItem bikeId={id} key={id} />
      ))}

      <div className={styles.itog_container}>
        <span className={styles.itog}>Итого</span>
        <span className={styles.sum}>{sum + "$"}</span>
      </div>

      <a href="/" className={styles.link}>
        Назад на главную
      </a>
    </div>
  );
};
