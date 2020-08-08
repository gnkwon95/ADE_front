import React, { useState, useCallback } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";

import FilterSelector from "./FilterSelector";
import { StyledFilter } from "./styles";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const onFilterClicked = useCallback(() => {
    setShowFilter((prev) => !prev);
  }, []);
  return (
    <StyledFilter>
      <UnorderedListOutlined />
      <span onClick={onFilterClicked}> 필터 적용 </span>
      {showFilter && <FilterSelector />}
    </StyledFilter>
  );
};

export default Filter;
