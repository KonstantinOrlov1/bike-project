import React from "react";
import { useState } from "react";
import { ModalContainer } from "../ModalContainer/ModalContainer";
import img1 from "./imgs/img1.png";
import styles from "./styles.module.css";

export const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>О нас</h1>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <p className={styles.text}>
            Это современный и удобный сервис, позволяющий Вам взять в аренду и
            насладиться удовольствием от использования{" "}
            <b className={styles.modal} onClick={openModalHandler}>
              новинок техники и крутых гаджетов
            </b>{" "}
            по цене, несравнимо меньшей, чем стоимость покупки.
          </p>
          <p className={styles.text}>
            Мы стремимся сделать процесс аренды максимально понятным и удобным
            для Вас и оказываем всестороннюю поддержку нашим клиентам, начиная с
            момента формирования заказа и заканчивая вопросами эксплуатации
            техники. Нам важно мнение каждого из Вас, поэтому мы тщательно
            подходим к вопросам поддержания уровня нашего сервиса и состояния
            нашего оборудования и заботимся о том, чтобы каждый наш клиент
            всегда получал желаемое.
          </p>
        </div>
        <img src={img1} alt="Велосипедисты" className={styles.btn} />
      </div>

      {isOpen ? (
        <div className={styles.back} onClick={openModalHandler}>
          <ModalContainer />
        </div>
      ) : null}
    </div>
  );
};
