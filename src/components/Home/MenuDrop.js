import React, { useState, useCallback } from "react";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const MenuDrop = ({ dropdownState, setDropdownState }) => {
  const onDropdownClick1 = useCallback(() => {
    setDropdownState("최근 등록 순으로 정렬");
  });
  const onDropdownClick2 = useCallback(() => {
    setDropdownState("평점 순으로 정렬");
  });
  const onDropdownClick3 = useCallback(() => {
    setDropdownState("리뷰 많은 순으로 정렬?");
  });

  return (
    <>
      <Menu>
        <Menu.Item key="1" onClick={onDropdownClick1} icon={<UserOutlined />}>
          최근 순으로 정렬
        </Menu.Item>
        <Menu.Item key="2" onClick={onDropdownClick2} icon={<UserOutlined />}>
          평점 순으로 정렬
        </Menu.Item>
        <Menu.Item key="3" onClick={onDropdownClick3} icon={<UserOutlined />}>
          리뷰 많은 순으로 정렬
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MenuDrop;
