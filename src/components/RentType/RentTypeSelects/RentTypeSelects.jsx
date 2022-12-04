import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import classNames from "classnames";
import img1 from "./imgs/img1.png";
import { useDispatch, useSelector } from "react-redux";
import { selecttypeCartByPathname } from "../../../store/typeCart/selectors";
import { typyCartSlice } from "../../../store/typeCart";
import { cartSlice } from "../../../store/cart";

export const RentTypeSelects = () => {
  const dispatch = useDispatch();
  const mounted = useRef(true);

  const count = useSelector(selecttypeCartByPathname);

  useEffect(() => {
    if (!mounted.current) {
      dispatch(cartSlice.actions.clearCart());
    }
    mounted.current = !mounted;
  }, [count]);

  const selDay = () => dispatch(typyCartSlice.actions.selectDay("type"));
  const selHour = () => dispatch(typyCartSlice.actions.selectHour("type"));

  return (
    <div className={styles.options}>
      <div className={styles.option}>
        <span className={styles.option_title}>Тип аренды</span>
        <div className={styles.tabs}>
          <NavLink
            onClick={selDay}
            className={({ isActive }) =>
              classNames(styles.root, { [styles[count]]: isActive })
            }
            to="day"
          >
            По дням
          </NavLink>
          <NavLink
            onClick={selHour}
            className={({ isActive }) =>
              classNames(styles.root, { [styles[count]]: isActive })
            }
            to="hour"
          >
            2 часа
          </NavLink>
        </div>
      </div>

      <div className={classNames(styles.option, styles.prompt)}>
        <img src={img1} alt="стрелочка влево" className={styles.img} />
        <p className={styles.text}>Выберите тип аренды</p>
      </div>
    </div>
  );
};
