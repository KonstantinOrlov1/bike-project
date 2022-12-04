import { CardBike } from "../CardBike/CardBike";
import styles from "./styles.module.css";
import React from "react";

export const CardBikes = ({ bikeTypes, types }) => {
  return (
    <div className={styles.cards_container}>
      {bikeTypes.map((item) => {
        if (item[types] === false) return;

        return <CardBike key={item.id} type={item} />;
      })}
    </div>
  );
};