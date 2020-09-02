import React from "react";
import { BrowserRouter, Route, match } from "react-router-dom";
import { Layout } from "antd";
import HeaderNav from "./components/HeaderNav";
import Home from "./routes/Home";
import Mentor from "./routes/mentor/Mentor";
import ChangeProfile from "./routes/mentor/ChangeProfile";
import MyPage from "./routes/MyPage";
import Chat from "./routes/Chat";
import DeleteAccount from "./routes/DeleteAccount";
import "./App.less";
import SignIn from "./routes/auth/SignIn";
import SignUp from "./routes/auth/SignUp";
import ForgotPw from "./routes/auth/ForgotPw";
import { withAuthentication } from "./session";
import Register from "./routes/Register";

const { Content, Footer } = Layout;

const App = () => (

  <BrowserRouter>
    <Layout className="layout">
      <HeaderNav /> 
      <Route exact path="/mentor/:id" component={Mentor} />
      <Route exact path="/mentor-edit" component={ChangeProfile} />
      <Route   exact path="/chat" component={Chat} />
      <Route exact path="/" component={Home} />
      <Content style={{ margin: "0 auto", maxWidth: "1280px" }}>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotpw" component={ForgotPw} />
        <Route exact path="/mypage" component={MyPage} />
        
        <Route exact path="/register" component={Register} />
        <Route exact path="/delete-account" component={DeleteAccount} />
      </Content>
      <Footer style={{ textAlign: "right"}}>ADE ©2020</Footer>
    </Layout>
  </BrowserRouter>
);

export default withAuthentication(App);
