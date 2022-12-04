import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/reviews/middlewares/loadReviewsIfNotExist";
import { selectReviewsIsLoading } from "../../store/reviews/selectors";
import { Load } from "../Loading/Loading";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectReviewsIsLoading);

  useEffect(() => {
    dispatch(loadReviewsIfNotExist);
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <div>
      <h1 className={styles.title}>Отзывы</h1>
      <Review />
    </div>
  );
};
