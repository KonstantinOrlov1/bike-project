import { Form, Formik } from "formik";
import { CustomInput } from "./Custominput";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const validate = (values) => {
  const errors = {};

  if (values.name?.length > 12) {
    errors.name = "max length 12 symbols";
  }

  if (values?.text.toString().length === 11) {
    errors.text = "странный телефон";
  }

  return errors;
};

const initialValue = {
  name: "",
  text: "",
  rating: "",
};

export const CartForm = () => {
  // const [toNext, setToNext] = useState(false);
  const history = useNavigate();

  return (
    <Formik
      initialValues={initialValue}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: initialValue });
        history("/order");
      }}
    >
      <Form className={styles.root}>
        <div className={styles.container}>
          <div className={styles.right}>
            <div className={styles.component}>
              <span className={styles.title}>Контактные данные</span>
              <CustomInput placeholder="Имя*" name="name" type="text" />
              <CustomInput
                placeholder="Номер телефона*"
                name="text"
                type="number"
              />
            </div>
            <div>
              <span className={styles.title}>Информация о доставке</span>
              <CustomInput placeholder="Адрес*" name="rating" type="text" />
            </div>
          </div>
          <div className={styles.left}>
            <div>
              <span className={styles.title}>Возвращение велосипеда</span>
              <p className={styles.text}>
                На возвращение велосипеда даётся 1 час. Задача организации, в
                особенности же сложившаяся структура организации позволяет
                выполнять Важные задания по разработке позиций, занимаемых
                участниками в отношении поставленных задач.
              </p>
            </div>
            <div>
              <span className={styles.title}>Выбор адреса для возврата</span>
              <p className={styles.text}>
                Вы также можете ввести адрес другого места, где мы заберем у вас
                велосипед.
              </p>
            </div>
          </div>
        </div>

        <button className={styles.btn} type="submit">
          Забронировать
        </button>
      </Form>
    </Formik>
  );
};
