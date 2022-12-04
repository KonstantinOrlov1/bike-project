import { useField } from "formik";
import styles from "./styles.module.css";

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} className={styles.input} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  );
};
