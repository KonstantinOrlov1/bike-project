import styles from "./styles.module.css";

export const Delivery = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Правила</h1>
      <h3 className={styles.title_two}>Условия аренды</h3>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <span className={styles.card_title}>Срок аренды</span>
          <p className={styles.text}>
            Минимальный срок аренды велосипеда составляет 1 день. При брони от 5
            дней действует скидка 10%
          </p>
        </div>
        <div className={styles.card}>
          <span className={styles.card_title}>Возраст</span>
          <p className={styles.text}>
            Достижение совершеннолетия. Клиентом проката может стать юридическое
            лицо или гражданин РФ, достигший 18 летнего возраста.
          </p>
        </div>
        <div className={styles.card}>
          <span className={styles.card_title}>Связь</span>
          <p className={styles.text}>
            Заключение договора аренды с указанием не менее 2-х действующих
            контактных телефонов.
          </p>
        </div>
      </div>

      <h3 className={styles.title_two}>Возмещение ущерба</h3>
      <div className={styles.text}>
        Для аренды оборудования Вам необходимо: предъявить паспорт гражданина РФ
        и оставить в залог документ, удостоверяющий личность (водительское
        удостоверение, загран паспорт) или внести денежный депозит,
        соответствующий стоимости прокатного оборудования.
      </div>
    </div>
  );
};
