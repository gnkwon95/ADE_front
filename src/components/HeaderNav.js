import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../firebase";
import { AuthUserContext } from "../session";
import axios from "axios";

import "./HeaderNav.css";
import {
  Layout,
  Avatar,
  Menu,
  Dropdown,
  Button,
  Tooltip,
  Space,
  Affix,
} from "antd";
import {
  UserOutlined,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const HeaderNav = () => (
  <Affix offsetTop={0}>
    <Header id="header">
      <Link to="/" className="logo">
        con
        <span style={{ color: "#5AB485" }}>tag</span>.
      </Link>
      <div className="header-right">
        <Space size="middle"></Space>
        <AuthUserContext.Consumer>
          {(authUser) => (authUser ? <UserNav /> : <VisitorNav />)}
        </AuthUserContext.Consumer>
      </div>
    </Header>
  </Affix>
);

const VisitorNav = () => (
  <Space size="middle">
    <Link to="/signup">
      <Button shape="round">회원가입</Button>
    </Link>
    <Link to="/signin">
      <Button shape="round" type="primary">
        로그인
      </Button>
    </Link>
  </Space>
);

const UserNav = () => {
  const [mentorStatus, setMentorStatus] = useState(false);
  const is_mentor = async () => {
    const fetchData = await axios.get("http://15.164.251.155:8000/mypage/");
    const userDatas = fetchData.data;
    const CurrentUser = userDatas.find(
      (userData) => userData.email === "user1@mail.com"
    );
    setMentorStatus(CurrentUser.is_mentor);
  };
  is_mentor();

  return (
    <Space size="middle">
      <Link to="/mentor">
        {mentorStatus ? (
          <Button shape="round">멘토 프로필</Button>
        ) : (
          <Button color="grey" shape="round">
            <Link to="/register">멘토 등록</Link>
          </Button>
        )}
      </Link>
      <Tooltip title="채팅하기">
        <Link to="/chat">
          <Button id="chat-btn" shape="circle" icon={<MessageOutlined />} />
        </Link>
      </Tooltip>
      <Dropdown
        overlay={UserMenu}
        onClick={(e) => e.preventDefault()}
        placement="bottomRight"
        arrow
      >
        <div style={{ cursor: "pointer" }}>
          <Avatar size="normal" icon={<UserOutlined />} />
        </div>
      </Dropdown>
      {/* <SignOutButton/> */}
    </Space>
  );
};

// const OutButton = ({ firebase }) => ( <Button onClick={firebase.doSignOut}>로그아웃</Button>);
// const SignOutButton = withFirebase(OutButton);

const UserMenu = withFirebase(({ firebase }) => (
  <Menu>
    <Menu.Item>
      <Link to="/mypage"><UserOutlined />내 정보</Link>
    </Menu.Item>
    <Menu.Item key="logout" danger href="/" onClick={firebase.doSignOut}>
      <LogoutOutlined />
      로그아웃
    </Menu.Item>
  </Menu>
));

export default HeaderNav;
