import React from "react";
import { HeartFilled, StarFilled } from "@ant-design/icons";
import styled from "styled-components";

const HeartsAndStars = styled.div`
  margin-left: auto;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    position: static;
    flex-direction: row;
    margin-bottom: 10px;
    span {
      font-size: 15px;
      margin-right: 5px;
    }
  }
`;

const HeartAndStars = ({ hearts, stars }) => {
  return (
    <HeartsAndStars>
      <span>
        <HeartFilled /> {hearts}명
      </span>{" "}
      <span>
        <StarFilled /> {stars}
      </span>
    </HeartsAndStars>
  );
};

export default HeartAndStars;

const StyledOriginalHnS = styled.div`
  span {
    font-size: 20px;
  }
  span:nth-child(1) {
    margin-right: auto;
  }
  span:nth-child(2) {
    margin-left: 5px;
  }
  @media only screen and (max-width: 600px) {
    span {
      font-size: 15px;
    }
  }
`;

export const OriginalHnS = ({ hearts, stars }) => {
  return (
    <StyledOriginalHnS>
      <span>
        <HeartFilled /> {hearts}명
      </span>{" "}
      <span>
        <StarFilled /> {stars}
      </span>
    </StyledOriginalHnS>
  );
};
