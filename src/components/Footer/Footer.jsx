import styles from "./styles.module.css";
import img1 from "./imgs/img1.svg";
import img2 from "./imgs/img2.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.left}>
          <h3 className={styles.left_title}>Аренда велосипедов</h3>
          <ul className={styles.left_list}>
            <li>Алюминий</li>
            <li>Карбон</li>
            <li>Горные/городские</li>
            <li>Городские эконом</li>
          </ul>
          <span className={styles.left_tag}>© BikePark, 2021</span>
        </div>
        <div className={styles.center}>
          <span className={styles.center_polit}>
            Политика конфиденциальности
          </span>
        </div>
        <div className={styles.right}>
          <div className={styles.right_list}>
            <span>Правила</span>
            <span>Отзывы</span>
            <span>Контакты</span>
            <span>Обратная связь</span>
          </div>
          <div className={styles.social}>
            <img src={img1} alt="facebook" className={styles.img} />
            <img src={img2} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};
