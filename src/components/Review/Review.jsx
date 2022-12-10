import classNames from "classnames";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectReviewsIdsById } from "../../store/reviews/selectors";

export const Review = () => {
  const reviews = useSelector(selectReviewsIdsById);
  const [index, setIndex] = useState(0);

  if (reviews.length === 0) {
    return <span>Нет отзывов</span>;
  }

  const { text, userName, image } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className={classNames(styles.review, styles.root)}>
      <div className={styles.img_container}>
        <img
          src={image}
          alt="img"
          className={styles.person_img}
          loading="lazy"
        />
        <span className={styles.quote_icon}>
          <FaQuoteRight />
        </span>
      </div>
      <p className={styles.info}>{text}</p>
      <h3 className={styles.author}>{userName}</h3>
      <div className="button-container">
        <button className={styles.prev_btn} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={styles.next_btn} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
