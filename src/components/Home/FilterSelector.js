import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import "./FilterSelector.scss";

const StyledSelect = styled(Select)`
  width: 80%;
  text-align: center;
  margin-right: auto;
  margin-left: 10%;
  border: 1px solid black;
`;

const FilterSelector = () => {
  return (
    <div className="FilterSelector">
      <p>지원직군</p>
      <StyledSelect defaultValue="공기업"></StyledSelect>
      <p>회사</p>
      <StyledSelect defaultValue="네이버"></StyledSelect>
      <p>출신 대학</p>
      <StyledSelect defaultValue="하버드"></StyledSelect>
    </div>
  );
};

export default FilterSelector;
