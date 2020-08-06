import React from "react";
import { UserOutlined, HeartFilled, StarFilled } from "@ant-design/icons";
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
export const OriginalHnS = ({ hearts, stars }) => {
  return (
    <>
      <span style={{ fontSize: "20px" }}>
        <HeartFilled /> {hearts}명
      </span>{" "}
      <span style={{ fontSize: "20px" }}>
        <StarFilled /> {stars}
      </span>
    </>
  );
};
