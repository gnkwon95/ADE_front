import React from "react";
import Rating from "react-rating";

import fullStar from "../../imageSamples/fullstar.png";
import emptyStar from "../../imageSamples/emptyStar.png";

import styled from "styled-components";

const ReviewStarsContainer = styled.div`
  position: relative;
  margin-top: 3%;
  > .rating {
    color: #feda6a;
    font-size: 2rem;
    margin-right: 20px;
  }
`;
const ReviewStarsContainer2 = styled.div`
  position: relative;
  top: -6px;
  margin-left: 10px;
  > .rating {
    position: relative;
    top: 5px;
    color: #feda6a;
    font-size: 1.2rem;
    margin-right: 10px;
  }
`;

const ReviewStars = ({ score }) => {
  return (
    <ReviewStarsContainer>
      <span className="rating">{score}</span>
      <Rating
        style={{ position: "absolute", top: "12%" }}
        placeholderRating={score}
        placeholderSymbol={
          <img
            src={fullStar}
            style={{ width: "36px" }}
            alt=""
            className="icon"
          />
        }
        readonly={true}
        emptySymbol={
          <img
            src={emptyStar}
            style={{ width: "36px" }}
            alt=""
            lassName="icon"
          />
        }
      />
    </ReviewStarsContainer>
  );
};
export const ReviewStarsMini = ({ score }) => {
  return (
    <ReviewStarsContainer2>
      <span className="rating">{score}</span>
      <Rating
        style={{ top: "24%" }}
        placeholderRating={score}
        placeholderSymbol={
          <img
            src={fullStar}
            style={{ width: "18px" }}
            alt=""
            className="icon"
          />
        }
        readonly={true}
        emptySymbol={
          <img
            src={emptyStar}
            style={{ width: "18px" }}
            alt=""
            lassName="icon"
          />
        }
      />
    </ReviewStarsContainer2>
  );
};
export default ReviewStars;
