import React from "react";
import img1 from "./imgs/img1.jpeg";
import styles from "./styles.module.css";

export const EmptyCart = () => {
  return (
    <div>
      <h1 className={styles.title}>Вы пока ничего не выбрали</h1>
      <img src={img1} alt="Котик на велике" className={styles.img} />
    </div>
  );
};
