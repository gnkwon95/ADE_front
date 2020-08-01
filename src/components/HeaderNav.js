import React from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.css";
import {
  Layout,
  Avatar,
  Menu,
  Dropdown,
  Button,
  Tooltip,
  Space,
} from "antd";

import { UserOutlined, MessageOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>내 정보</Menu.Item>
    <Menu.Item>상담 내역</Menu.Item>
    <Menu.Item>1대1 문의</Menu.Item>
    <Menu.Item danger>로그아웃</Menu.Item>
  </Menu>
);

function HeaderNav() {
  const { Header } = Layout;

  return (
    <Header>
      <a href="/" class="logo">
        <Space>
          <span>ADE</span>
        </Space>
      </a>
      <div className="header-right">
        <Space size="middle">
          <Button shape="round">멘토 프로필</Button>
          <Tooltip title="내 상담">
            <Button id="chat-btn" shape="circle" icon={<MessageOutlined />} />
          </Tooltip>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar size="normal" icon={<UserOutlined />} />
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
}

export default HeaderNav;