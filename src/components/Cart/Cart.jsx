import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectCartBikeIds } from "../../store/cart/selectors";
import { selecttypeCartByPathname } from "../../store/typeCart/selectors";
import { CartItem } from "../CartItem/CartItem";
import styles from "./styles.module.css";
import { selectBikesCost } from "../../store/bikes/selectors";
import { Decor } from "../Decor/Decor";
import { CartForm } from "../Form/Form";
import { EmptyCart } from "../EmptyCart/EmptyCart";

export const Cart = () => {
  const bikes = useSelector(selectCartBikeIds);

  const sum = useSelector((state) => selectBikesCost(state, bikes));

  const pathname = useLocation().pathname.split("/")[2];
  const type = useSelector((state) =>
    selecttypeCartByPathname(state, pathname)
  );

  const typeRent = (type) =>
    type === "day" ? (
      <div className={styles.type}>По дням</div>
    ) : (
      <div className={styles.type}>Почасовая</div>
    );

  if (bikes.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className={styles.cart}>
      <div className={styles.root}>
        <h1 className={styles.title}>Заявка на аренду велосипедов</h1>
        <div className={styles.type_container}>
          <span className={styles.title_type}>Тип аренды</span>
          {typeRent(type)}
        </div>
        <div className={styles.table_header}>
          <div>Фото</div>
          <div>Название велосипедов</div>
          <div>Шлем</div>
          <div>Фонарик</div>
          <div>Замок</div>
          <div>Стоимость</div>
        </div>
        {bikes.map((id) => (
          <CartItem key={id} bikeId={id} />
        ))}

        <div className={styles.cart_footer}>
          <Link to="/rent" className={styles.link}>
            <span className={styles.link_text}>Назад к выбору велосипедов</span>
          </Link>

          <div>
            <span className={styles.itog}>Итого</span>
            <span className={styles.sum}>{sum + "$"}</span>
          </div>
        </div>
      </div>
      <Decor />
      <CartForm />
    </div>
  );
};
