import { createDops } from "../../helpers/createDops";
import styles from "./styles.module.css";

export const Dops = ({ dops }) => {
  if (!dops) return;

  const arrDops = Object.entries(dops);

  return (
    <div>
      <span className={styles.dops}>Допы:</span>
      {arrDops.map((elem) => {
        if (elem[1]) {
          return <span key={elem[0]} className={styles.dop}>{createDops(elem[0])}</span>;
        }
      })}
    </div>
  );
};
