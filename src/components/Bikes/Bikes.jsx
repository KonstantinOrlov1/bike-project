import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadBikesIfNotExist } from "../../store/bikes/middlewares/loadBikesIfNotExist";
import { selectIsBikeLoading } from "../../store/bikes/selectors";
import { selectBikesByBiketypeId } from "../../store/select/selectors";
import { Bike } from "../Bike/Bike";
import { Decor } from "../Decor/Decor";
import styles from "./styles.module.css";
import { Button } from "../Button/Button";
import { SIZES } from "../../constants/SIZES.js";
import { Load } from "../Loading/Loading";

export const Bikes = () => {
  const { biketypeid } = useParams();
  const dispatch = useDispatch();

  const bikes = useSelector((state) =>
    selectBikesByBiketypeId(state, { biketypeid })
  );

  const loading = useSelector(selectIsBikeLoading);

  useEffect(() => {
    dispatch(loadBikesIfNotExist(biketypeid));
  }, [biketypeid]);

  if (loading) {
    return (
      <div className={styles.load}>
        <Load />
      </div>
    );
  }

  if (!bikes?.length) {
    return <span>тут пусто</span>;
  }

  return (
    <div>
      <Decor />
      <div className={styles.root}>
        <div className={styles.cards}>
          {bikes.map((id) => (
            <Bike key={id} bikeId={id} />
          ))}
        </div>
        <div className={styles.btn_container}>
          <Button
            text="Далее"
            size={SIZES.l}
            className={styles.btn}
            src="/cart"
          />
        </div>
      </div>
    </div>
  );
};
