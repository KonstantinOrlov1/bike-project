import React from "react";
import { RentTypeHeader } from "./RentTypeHeader/RentTypeHeader";
import { RentTypeSelects } from "./RentTypeSelects/RentTypeSelects";
import styles from "./styles.module.css";

export const RentType = () => {
  return (
    <div className={styles.type_container}>
      <RentTypeHeader />
      <RentTypeSelects />
    </div>
  );
};
