import React, { useState, useCallback } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";

import FilterSelector from "./FilterSelector";
//import "./Filter.scss";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const onFilterClicked = useCallback(() => {
    setShowFilter((prev) => !prev);
  });
  return (
    <div className="filter">
      <UnorderedListOutlined />
      <span onClick={onFilterClicked}> 필터 적용 </span>
      {showFilter && <FilterSelector />}
    </div>
  );
};

export default Filter;
