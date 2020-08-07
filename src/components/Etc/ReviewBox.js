import React from "react";
import styled from "styled-components";

import { ReviewStarsMini } from "../Etc/ReviewStars";

const BigBox = styled.div`
  max-width: 870px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  display: flex;
  border: 2px solid rgba(0, 0, 0, 0.4);
  justify-content: left;
  padding: 5% 5%;
  margin-top: 2.5%;
  margin-bottom: 5%;
  div {
    h1 {
      display: flex;
      /* flex-wrap: wrap; */
      max-width: 1000px;
      > span {
        font-size: 1rem;
        position: relative;
        top: 5px;
      }
    }
  }
  > div:nth-child(1) {
    padding: 2% 5%;
    border-right: 1px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > div:nth-child(2) {
    margin-left: 10%;
  }
  @media only screen and (max-width: 600px) {
    > div:nth-child(1) {
      padding: 5% 5%;
    }
  }
`;

const ReviewBox = ({ content, score }) => {
  const { user, comment, createdAt } = content;
  return (
    <BigBox>
      <div>
        <h3>{user}**</h3>
        <h4>{createdAt}</h4>
      </div>
      <div>
        <h1>
          <span>만족도</span> <ReviewStarsMini score={score} />
        </h1>
        <p>{comment}</p>
      </div>
    </BigBox>
  );
};

export default ReviewBox;
