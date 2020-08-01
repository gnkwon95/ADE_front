import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.less";
import HeaderNav from "./components/HeaderNav";
import { Layout } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";

function App() {
  const { Content, Footer } = Layout;

  return (
    <HashRouter>
      <Layout className="layout">
        <HeaderNav />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "left" }}>ADE ©2020</Footer>
      </Layout>
    </HashRouter>
  );
}

export default App;
