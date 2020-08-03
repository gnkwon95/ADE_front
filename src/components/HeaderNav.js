import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from '../firebase';

import "./HeaderNav.css";
import { Layout, Avatar, Menu, Dropdown, Button, Tooltip, Space } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";

const HeaderNav = ({ authUser }) => (
<div>{authUser ? <UserNav /> : <VisitorNav />}</div>
);



const { Header } = Layout;

const VisitorNav = () => (
  <div>
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
        </Space>
      </div>
     </Header>
    </div>
)

const UserNav = () => (
    <Header id="header">
      <Link to="/" className="logo">
        <span>ADE</span>
      </Link>
      <div className="header-right">
        <Space size="middle">
          <Link to="/mentor">
            <Button shape="round">멘토 프로필</Button>
          </Link>
          <Tooltip title="채팅하기">
            <Link to="/chat">
              <Button id="chat-btn" shape="circle" icon={<MessageOutlined />} />
            </Link>
          </Tooltip>
          <Dropdown
            overlay={UserMenu} onClick={e => e.preventDefault()}
            placement="bottomRight" arrow
          >
            <Avatar size="normal" icon={<UserOutlined />} />
          </Dropdown>
          <SignOutButton />
        </Space>
      </div>
    </Header>
)


const OutButton = ({ firebase }) => ( <Button onClick={firebase.doSignOut}>로그아웃</Button>);
const SignOutButton = withFirebase(OutButton);

const UserMenu = withFirebase(({ firebase }) => (
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
          {/* <Menu.Item key="logout" danger>
            로그아웃
          </Menu.Item> */}
        </Menu>
))

export default HeaderNav;