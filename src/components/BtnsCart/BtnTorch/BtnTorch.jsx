import { useDispatch } from "react-redux";
import { equipmentSlice } from "../../../store/equipment";
import styles from "./styles.module.css";

export const BtnTorch = ({ bikeId }) => {
  const dispatch = useDispatch();

  const selectTorch = () =>
    dispatch(equipmentSlice.actions.selectTorch(bikeId));

  const chengeSelect = (event) => {
    if (event.target.dataset.select === "false") {
      selectTorch();
      event.target.dataset.select = "true";
      event.target.classList.add(styles.select);
    } else {
      selectTorch();
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
