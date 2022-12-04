import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Button = ({ text, size, src }) => {
  return (
    <Link to={src} className={classNames(styles.btn, styles[size])}>
      {text}
    </Link>
  );
};
