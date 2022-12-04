import { useDispatch } from "react-redux";
import { equipmentSlice } from "../../../store/equipment";
import styles from "./styles.module.css";

export const BtnHelmet = ({ bikeId }) => {
  const dispatch = useDispatch();

  const selectHelmet = () =>
    dispatch(equipmentSlice.actions.selectHelmet(bikeId));

  const chengeSelect = (event) => {
    if (event.target.dataset.select === "false") {
      selectHelmet();
      event.target.dataset.select = "true";
      event.target.classList.add(styles.select);
    } else {
      selectHelmet();
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
