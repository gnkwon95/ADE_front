import React, { useState } from "react";
import styled from "styled-components";

const StyledAdbar = styled.div`
  max-height: ${(props) => props.maxheight};
  background: #929292;
  overflow: hidden;
  padding-left: 5%;
  padding-top: ${(props) => props.padding};
  padding-bottom: ${(props) => props.padding};
  color: #fff;
  transition: padding-bottom 0.5s ease-in-out, max-height 0.5s ease-in-out,
    padding-top 1s ease-in-out;
  strong {
    color: black;
  }
  button {
    float: right;
    background: #929292;
    border: 0;
    padding-right: 5%;
    cursor: pointer;
    outline: none;
  }
  button:active {
    border: none;
  }
`;

const AdBar = () => {
  const [height, setHeight] = useState("100px");
  const [padding, setPadding] = useState("5px");
  const onBtnClick = () => {
    setHeight(0);
    setPadding(0);
  };

  return (
    <>
      <StyledAdbar maxheight={height} padding={padding}>
        <strong>ADE</strong>로 취업 성공 후 멘토로 재등록할 시{" "}
        <strong> 1만원 </strong>환급!
        <button onClick={onBtnClick}>X</button>
      </StyledAdbar>
    </>
  );
};

export default AdBar;
