import React from "react";
import img1 from "./imgs/img1.jpeg";
import styles from "./styles.module.css";

export const EmptyBikes = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>На данный момент сервис недоступен</h1>
      <img src={img1} alt="Картинка работ" className={styles.img} />
    </div>
  );
};
