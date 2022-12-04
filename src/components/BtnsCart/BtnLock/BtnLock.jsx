import { useDispatch } from "react-redux";
import { equipmentSlice } from "../../../store/equipment";
import styles from "./styles.module.css";

export const BtnLock = ({ bikeId }) => {
  const dispatch = useDispatch();

  const selectLock = () => dispatch(equipmentSlice.actions.selectLock(bikeId));

  const chengeSelect = (event) => {
    if (event.target.dataset.select === "false") {
      selectLock();
      event.target.dataset.select = "true";
      event.target.classList.add(styles.select);
    } else {
      selectLock();
      event.target.dataset.select = "false";
      event.target.classList.remove(styles.select);
    }
  };

  return (
    <button
      onClick={chengeSelect}
      data-select="false"
      className={styles.btn}
    ></button>
  );
};
