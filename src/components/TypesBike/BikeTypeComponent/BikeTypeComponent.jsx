import { Outlet } from "react-router-dom";
import { Decor } from "../../Decor/Decor";
import { CardBikes } from "../CardBikes/CardBikes";
import styles from "./styles.module.css";

export const BikeTypeComponent = ({ bikeTypes, types }) => {
  return (
    <div>
      <Decor />
      <div className={styles.bikeType_container}>
        <span className={styles.bikeType_title}>Тип велосипеда</span>
        <CardBikes bikeTypes={bikeTypes} types={types} />
      </div>
      <Outlet />
    </div>
  );
};
