import React from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.css";
import { Layout, Avatar, Menu, Dropdown, Button, Tooltip, Space } from "antd";

import { UserOutlined, MessageOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/mypage">내 정보</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/mypage">상담 내역</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/mypage">1대1 문의</Link>
    </Menu.Item>
    <Menu.Item danger>
      로그아웃
    </Menu.Item>
  </Menu>
);

function HeaderNav() {
  const { Header } = Layout;

  return (
    <Header id="header">
      <Link to="/" className="logo">
        <span>ADE</span>
      </Link>
      <div className="header-right">
        <Space size="middle">
          <Link to="/join">
            <Button shape="round">회원가입</Button>
          </Link>
          <Link to="/signin">
            <Button shape="round" type="primary">로그인</Button>
          </Link>
          <Link to="/mentor">
            <Button shape="round">멘토 프로필</Button>
          </Link>
          <Tooltip title="채팅하기">
            <Link to="/chat">
              <Button id="chat-btn" shape="circle" icon={<MessageOutlined />} />
            </Link>
          </Tooltip>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Link to="/mypage">
              <Avatar size="normal" icon={<UserOutlined />} />
            </Link>
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
}

export default HeaderNav;
