import classNames from "classnames";
import styles from "./styles.module.css";

export const ModalContainer = () => {
  return (
    <div className={classNames(styles.modal_container, styles.scene)}>
      <p>
        <b className={styles.modal_title}>Micro Travel Technology (MTT)</b> или
        «Технология микро-хода», рекламируется как новое решение по
        амортизированию задней подвески. По заявлениям разработчиков теперь
        давление в покрышках может быть использована именно для улучшения
        сцепления и уменьшению сопротивлении качению, а о амортизации
        позаботиться встроенный в раму демпфер. MTT позволит гонщикам
        прикладывать больше усилия для получение преимущества в скорости.
      </p>
    </div>
  );
};
