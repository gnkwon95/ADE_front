import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "antd";
import HeaderNav from "./components/HeaderNav";
import Home from "./routes/Home";
import Mentor from "./routes/Mentor";
import MyPage from "./routes/MyPage";
import Chat from "./routes/Chat";
import "./App.less";
import SignIn from "./routes/SignIn";
import Join from "./routes/Join";
import ForgotPw from "./routes/ForgotPw";

class App extends React.Component {

  render() {
    const { Content, Footer } = Layout;

    return (
        <BrowserRouter>
          <Layout className="layout">
            <HeaderNav />
            <Content style={{ padding: "0 50px" }}>
              <Route exact path="/"  component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/join" component={Join} />
              <Route exact path="/forgotpw" component={ForgotPw} />
              <Route exact path="/mentor" component={Mentor} />
              <Route exact path="/mypage" component={MyPage} />
              <Route exact path="/chat" component={Chat} />
            </Content>
            <Footer style={{ textAlign: "left" }}>ADE ©2020</Footer>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
