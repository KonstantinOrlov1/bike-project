import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./styles.module.css";

export const Contacts = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Контакты</h1>
      <div className={styles.container}>
        <div>
          <div className={styles.elem}>
            <span className={styles.elem_title}>Номер телефона</span>
            <b className={styles.elem_content}>+7(999)565-18-17</b>
          </div>
          <div className={styles.elem}>
            <span className={styles.elem_title}>E-mail</span>
            <b className={styles.elem_content}>konstantin_orlov_98@mail.ru</b>
          </div>
          <div className={styles.elem}>
            <span className={styles.elem_title}>Адрес шоурума</span>
            <b className={styles.elem_content}>Россия, Мск</b>
          </div>
        </div>
        <div>
          <YMaps>
            <Map
              state={{ center: [55.76, 37.64], zoom: 10 }}
              width="650px"
              height="450px"
            >
              <Placemark geometry={[55.684758, 37.738521]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};
