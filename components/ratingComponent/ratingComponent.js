import React from "react";
import ratingComponent from "./ratingComponent.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function RatingComponent({ testimonyRating }) {
  const ratingStars = [];

  for (let i = 1; i < 6; i++) {
    if (i <= testimonyRating) {
      ratingStars.push(
        <li key={i} className={`list-inline-item`}>
          <AiFillStar style={{ color: " #FFDF00" }}></AiFillStar>
        </li>
      );
    } else {
      ratingStars.push(
        <li key={i} className={`list-inline-item`}>
          <AiOutlineStar></AiOutlineStar>
        </li>
      );
    }
  }

  return (
    <div className={`ratingComponenet.ratingContainer`}>
      <ul className={`list-inline`}>{ratingStars}</ul>
    </div>
  );
}

export default RatingComponent;
