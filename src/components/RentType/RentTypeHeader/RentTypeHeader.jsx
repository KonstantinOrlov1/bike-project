import classNames from "classnames";
import React from "react";
import styles from "./styles.module.css";
import image1 from "./imgs/image1.png";
import image2 from "./imgs/image2.png";
import image3 from "./imgs/image3.png";

export const RentTypeHeader = () => {
  return (
    <div className={styles.rentType_header}>
      <h1 className={styles.title}>Аренда велосипедов</h1>
      <div className={styles.cards}>
        <div className={classNames(styles.card1, styles.card)}>
          <img src={image1} className={styles.img1} alt="img1" />
          <div className={styles.img_content}>
            <span>Шлем</span>
            <b className={styles.img_content_sale}>Бесплатно</b>
          </div>
        </div>
        <div className={classNames(styles.card2, styles.card)}>
          <img src={image3} className={styles.img2} alt="img2" />
          <div className={styles.img_content}>
            <span>Фонарик</span>
            <b className={styles.img_content_sale}>Бесплатно</b>
          </div>
        </div>
        <div className={classNames(styles.card3, styles.card)}>
          <img src={image2} className={styles.img3} alt="img3" />
          <div className={styles.img_content}>
            <span>Замок</span>
            <b className={styles.img_content_sale}>Бесплатно</b>
          </div>
        </div>
      </div>
    </div>
  );
};
