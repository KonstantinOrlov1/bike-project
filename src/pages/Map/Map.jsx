import styles from "./styles.module.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";

export const Map = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Где кататься</h1>
        <h3 className={styles.title_two}>Катание на природе</h3>
        <p className={styles.text}>
          Регулярные поездки на природе помогают вам тренировать мышцы ног,
          груди, спины, рук. Благодаря чему улучшается их форма и одновременно
          повышается выносливость мышц. Снижение стресса. Поездки на велосипеде
          – самый простой и быстрый способ получить дозу гормонов счастья.
        </p>
        <div className={styles.imgs_container}>
          <img className={styles.img} src={img1} alt="вел 1" />
          <img className={styles.img} src={img2} alt="вел 2" />
          <img className={styles.img} src={img3} alt="вел 3" />
        </div>
      </div>

      <div className={styles.container}>
        <h3 className={styles.title_two}>Катание в городе</h3>
        <p className={styles.text}>
          В городе велосипед является отличной альтернативой беговым упражнениям
          на дорожке. Так же является оочень удобным и быстрым способом
          добраться в нужное место. Аренда велосипедов в городе стоит оочень
          дешево.
        </p>
        <div className={styles.imgs_container}>
          <img className={styles.img} src={img4} alt="вел 4" />
          <img className={styles.img} src={img5} alt="вел 5" />
          <img className={styles.img} src={img6} alt="вел 6" />
        </div>
      </div>
    </div>
  );
};
