import styles from "./styles.module.css";
import { ReactComponent as Logo } from "./imgs/logo.svg";
import { NavLink } from "react-router-dom";
import login from "./imgs/login.svg";
import { Button } from "../Button/Button";
import { SIZES } from "../../constants/SIZES";
import React from "react";
import classNames from "classnames";
import { HEADER_LINK } from "./helpers";

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.navigation}>
        <Logo className={styles.navigation_logo} loading="lazy" />
        <div
          className={classNames(
            styles.navigation_links,
            styles.navigation_link
          )}
        >
          {HEADER_LINK.map((obj) => (
            <NavLink
              className={({ isActive }) =>
                classNames(styles.root, {
                  [styles.active]: isActive,
                })
              }
              to={obj.link}
              key={obj.link}
            >
              {obj.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={styles.contscts}>
        <div className={styles.phone}>+971 52 563 4064</div>
        <img src={login} alt="login" loading="lazy" />
        <Button text={"FEEDBACK"} size={SIZES.s} />
      </div>
    </header>
  );
};
