import React, { useState } from "react";
import styled from "styled-components";

const StyledAdbar = styled.div`
  background: #929292;
  padding-left: 5%;
  padding-top: 6px;
  padding-bottom: 5px;
  color: #fff;
  strong {
    color: black;
  }
  button {
    float: right;
    background: #929292;
    border: 0;
    padding-right: 5%;
  }
`;

const AdBar = () => {
  const [adBarStatus, setAdBarStatus] = useState(true);

  const onBtnClick = () => {
    setAdBarStatus(false);
  };

  return (
    <>
      {adBarStatus && (
        <StyledAdbar style={{ background: "#929292" }}>
          <strong>ADE</strong>로 취업 성공 후 멘토로 재등록할 시{" "}
          <strong> 1만원 </strong>환급!
          <button onClick={onBtnClick}>X</button>
        </StyledAdbar>
      )}
    </>
  );
};

export default AdBar;
