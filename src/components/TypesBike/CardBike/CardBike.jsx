import React from "react";
import styles from "./styles.module.css";
import img1 from "./imgs/img1.svg";
import img2 from "./imgs/img2.png";
import ReactTooltip from "react-tooltip";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

export const CardBike = ({ type }) => {
  const temp = type.description;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.card, {
          [styles.active]: isActive,
        })
      }
      to={type.id}
    >
      <img src={img2} alt="bike" className={styles.img} />
      <div className={styles.card_footer}>
        <div className={styles.title_footer}>{type.type}</div>
        <div className={styles.option_footer}>
          <b className={styles.price}>{type.price + "$"}</b>
          <div data-tip={temp} data-for="registerTip" className={styles.prompt}>
            <img
              src={img1}
              alt="вопрос"
              className={styles.qustion}
              loading="lazy"
            />
            <ReactTooltip
              id="registerTip"
              place="bottom"
              effect="solid"
              className={styles.tooltip}
            />
          </div>
        </div>
      </div>
    </NavLink>
  );
};
