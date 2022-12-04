import { CardBtn } from "../CardBtn/CardBtn";
import styles from "./styles.module.css";

export const BikeFooter = ({ bike }) => {
  if (bike.status === "free") {
    return (
      <div className={styles.root}>
        <div className={styles.model_free}>{bike.model}</div>
        <div className={styles.price_free}>{bike.price + "$"}</div>
        <CardBtn bikeId={bike.id} />
      </div>
    );
  }

  if (bike.status === "busy")
    return (
      <div className={styles.root}>
        <div className={styles.model_busy}>{bike.model}</div>
        <div className={styles.price_busy}>{bike.price + "$"}</div>
        <button className={styles.btn_busy} disabled>
          Занят
        </button>
      </div>
    );

  return;
};
