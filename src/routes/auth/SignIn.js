import React from "react";
import { Card, Typography } from "antd";
import { AuthUserContext } from '../../session'
import "./SignIn.css";

import SignInEmail, { SignInGoogle, SignInFacebook } from '../../components/signin'


const { Title } = Typography;

const SignIn = (props) => (
  <AuthUserContext.Consumer>
    {authUser => authUser ? props.history.push('/')
                            : <SignInPage />
    }
  </AuthUserContext.Consumer>
)

const SignInPage = () => (
  <Card title={false} bordered={false} className="login-card">
    <div className="signin-texts">
      <Title level={2} className="signin-title">
        로그인
      </Title>
    </div>
    <SignInGoogle />
    <SignInFacebook />
    <SignInEmail />
  </Card>
)


export default SignIn;
