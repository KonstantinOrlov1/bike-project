import { Header } from "../Heder/Header";
import styles from "./styles.module.css";
import classnames from "classnames";
import React from "react";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className={classnames(styles.root, styles.container)}>
      <Header />
      <React.Fragment>{children}</React.Fragment>
      <Footer />
    </div>
  );
};
