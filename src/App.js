import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "antd";
import HeaderNav from "./components/HeaderNav";
import Home from "./routes/Home";
import Mentor from "./routes/Mentor";
import MyPage from "./routes/MyPage";
import Chat from "./routes/Chat";
import "./App.less";
import SignIn from "./routes/auth/SignIn";
import Join from "./routes/auth/Join";
import ForgotPw from "./routes/auth/ForgotPw";
import { withFirebase } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listner = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    const { Content, Footer } = Layout;

    return (
        <BrowserRouter>
          <Layout className="layout">
            <HeaderNav authUser={this.state.authUser} />
              <Route exact path="/"  component={Home} />
            <Content style={{ padding: "0 50px" }}>
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/join" component={Join} />
              <Route exact path="/forgotpw" component={ForgotPw} />
              <Route exact path="/mentor" component={Mentor} />
              <Route exact path="/mypage" component={MyPage} />
              <Route exact path="/chat" component={Chat} />
            </Content>
            <Footer style={{ textAlign: "right" }}>ADE ©2020</Footer>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default withFirebase(App);