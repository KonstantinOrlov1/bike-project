import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadSelectIfNotExist } from "../../store/select/middlewares/loadSelectsIfNotExist";
import {
  selectSelectsIdsById,
  selectSelectsIsLoading,
} from "../../store/select/selectors";
import { EmptyBikes } from "../EmptyBikes/EmptyBikes";
import { Load } from "../Loading/Loading";
import { BikeTypeComponent } from "../TypesBike/BikeTypeComponent/BikeTypeComponent";
import styles from "./styles.module.css";

export const BikeType = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const bikeTypes = useSelector(selectSelectsIdsById);
  const isLoading = useSelector(selectSelectsIsLoading);
  const type = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadSelectIfNotExist);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.load}>
        <Load />
      </div>
    );
  }

  if (!bikeTypes?.length) {
    return <EmptyBikes />;
  }

  return <BikeTypeComponent bikeTypes={bikeTypes} types={type} />;
};
