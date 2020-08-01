import React from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.css";
import { Layout, Avatar, Menu, Dropdown, Button, Tooltip, Space } from "antd";

import { UserOutlined, MessageOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <a href="/#/mypage">내 정보</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/#/mypage">상담 내역</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/#/mypage">1대1 문의</a>
    </Menu.Item>
    <Menu.Item danger>로그아웃</Menu.Item>
  </Menu>
);

function HeaderNav() {
  const { Header } = Layout;

  return (
    <Header>
      <a href="/" class="logo">
        <span>ADE</span>
      </a>
      <div className="header-right">
        <Space size="middle">
          <a href="/#/mentor">
            <Button shape="round">멘토 프로필</Button>
          </a>
          <Tooltip title="채팅하기">
            <a href="/#/chat">
              <Button id="chat-btn" shape="circle" icon={<MessageOutlined />} />
            </a>
          </Tooltip>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <a href="/#/mypage"><Avatar size="normal" icon={<UserOutlined />} /></a>
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
}

export default HeaderNav;
