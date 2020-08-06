import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "antd";
import HeaderNav from "./components/HeaderNav";
import Home from "./routes/Home";
import Mentor from "./routes/Mentor";
import MyPage from "./routes/MyPage";
import Chat from "./routes/Chat";
import "./App.less";
import AdBar from "./components/AdBar";
import SignIn from "./routes/auth/SignIn";
import SignUp from "./routes/auth/SignUp";
import ForgotPw from "./routes/auth/ForgotPw";
import { withAuthentication } from "./session";

const { Content, Footer } = Layout;

const App = () => (
  <BrowserRouter>
    <Layout className="layout">
      <AdBar />
      <HeaderNav />
      <Route exact path="/" component={Home} />
      <Route exact path="/mentor" component={Mentor} />
      <Content style={{ margin: "0 50px" }}>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotpw" component={ForgotPw} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/chat" component={Chat} />
      </Content>
      <Footer style={{ textAlign: "right" }}>ADE ©2020</Footer>
    </Layout>
  </BrowserRouter>
);

export default withAuthentication(App);
