import { useSelector } from "react-redux";
import { selectBikeById } from "../../store/bikes/selectors";
import styles from "./styles.module.css";
import { TIME } from "../../constants/TIME.js";
import img from "../TypesBike/CardBike/imgs/img2.png";
import { BikeFooter } from "../BikeFooter/BikeFooter";

export const Bike = ({ bikeId }) => {
  const bike = useSelector((state) => selectBikeById(state, { bikeId }));
  if (!bike) return;

  return (
    <div className={styles.root}>
      <div className={styles.time}>{TIME + "’’"}</div>
      <div className={styles.img_container}>
        <img src={img} alt="bike" className={styles.img} loading="lazy" />
      </div>
      <BikeFooter bike={bike} />
    </div>
  );
};
