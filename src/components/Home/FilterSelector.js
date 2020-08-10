import React from "react";

import { StyledFilterSelector, StyledSelect } from "./styles";

const FilterSelector = () => {
  return (
    <StyledFilterSelector>
      <p>지원직군</p>
      <StyledSelect defaultValue="공기업"></StyledSelect>
      <p>회사</p>
      <StyledSelect defaultValue="네이버"></StyledSelect>
      <p>출신 대학</p>
      <StyledSelect defaultValue="하버드"></StyledSelect>
    </StyledFilterSelector>
  );
};

export default FilterSelector;
