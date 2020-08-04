import React, {useState} from "react";
import { Card, Typography, Button } from "antd";
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../../session'
import "./SignIn.css";

import * as SignInMethods from '../../components/signin'


const { Title } = Typography;

const SignIn = (props) => (
  <AuthUserContext.Consumer>
    {authUser => authUser ? props.history.push('/')
                            : <SignInPage />
    }
  </AuthUserContext.Consumer>
)

const SignInPage = () => {
  const [toggle, setToggle] = useState(false)

  const toggleClick = () => {
    setToggle(!toggle)
  }

  return(
    <Card title={false} bordered={false} className="login-card">
      <div className="signin-texts">
        <Title level={2} className="signin-title">
          로그인
        </Title>
      </div>
      <SignInMethods.SignInGoogle />
      <br />
      <SignInMethods.SignInFacebook />
      <br />
      <SignInMethods.SignInNaver />
      <br />
      <SignInMethods.SignInKakao />
      <br />
      <Button className="social-login-button" onClick={toggleClick}>이메일로 로그인하기</Button>
      <br />
      <br />
      {toggle && <SignInMethods.SignInEmail />}
      계정이 없으세요?{" "}
      <Link to="/join" className="signin-option">
          회원가입
      </Link>
    </Card>
  )
}



export default SignIn;
