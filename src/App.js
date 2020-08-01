import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Layout } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import HeaderNav from "./components/HeaderNav";
import Home from "./routes/Home"
import Mentor from "./routes/Mentor"
import MyPage from "./routes/MyPage"
import Chat from "./routes/Chat"
import "./App.less";

function App() {
  const { Content, Footer } = Layout;

  return (
    <HashRouter>
      <Layout className="layout">
        <HeaderNav />
        <Content style={{ padding: "0 50px" }}>
          <Route path="/" exact={true} component={Home} />
          <Route path="/mentor" component={Mentor} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/chat" component={Chat} />
        </Content>
        <Footer style={{ textAlign: "left" }}>ADE ©2020</Footer>
      </Layout>
    </HashRouter>
  );
}

export default App;
