import { useSelector } from "react-redux";
import { selectBikeById } from "../../store/bikes/selectors";
import { selectEquipmentDops } from "../../store/equipment/selectors";
import { Dops } from "../Dops/Dops";
import styles from "./styles.module.css";

export const OrderItem = ({ bikeId }) => {
  const bike = useSelector((state) => selectBikeById(state, { bikeId }));

  const dops = useSelector((state) => selectEquipmentDops(state, bikeId));

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.model}>{bike.model}</div>
        <Dops dops={dops} />
      </div>
      <div className={styles.price}>{bike.price + "$"}</div>
    </div>
  );
};
