import React,  { Component } from "react";
import { Form, Input, Button, Typography, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import { AuthUserContext } from '../../session'

import "./SignIn.css";

const SignUp = (props) => (
  <AuthUserContext.Consumer>
    {authUser => authUser ? props.history.push('/') : <RegisterForm />}
  </AuthUserContext.Consumer>
)

class FormBase extends Component {
  state = {
    error: null
  }

  constructor(props) {
    super(props);
  }

  onFinish = values => {
    const username = values.username
    const email = values.email
    const password = values.password
    this.props.firebase
      .doCreateUserWithEmailAndPassword( email, password)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.props.history.push('/');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert(`해당 이메일로 가입된 계정이 있습니다.`);
          this.props.history.push('/login');
        }
      });
  };


  render() {
    const { Title } = Typography;

    return (
      <Card title={false} bordered={false} className="login-card">
        <div className="signin-texts">
          <Title level={2} className="signin-title">
            회원가입
          </Title>
        </div>
        <Form
          name="join"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            hasFeedback
            rules={[
              {
                required: true,
                message: "이름을 입력해주세요!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="이름"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="email"
            hasFeedback
            rules={[
              {
                type: "email",
                message: "올바른 이메일 형식이 아닙니다!",
              },
              {
                required: true,
                message: "이메일 주소를 입력하세요!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="이메일"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력하세요!",
              },
              {
                min: 6,
                message: "비밀번호는 6글자 이상입니다.",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="비밀번호"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "비밀번호 확인이 필요합니다!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
  
                  return Promise.reject("입력한 비밀번호가 일치하지 않습니다!");
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="비밀번호 확인"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("동의 없이는 가입이 불가합니다."),
              },
            ]}
          >
            <Checkbox>
              회원가입을 하면 ADE의 <Link to="">이용약관</Link> 및{" "}
              <Link to="">개인정보 처리방침</Link>에 동의한는 것으로 간주합니다.
            </Checkbox>
          </Form.Item>
  
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              회원가입
            </Button>

            이미 계정이 있나요?{" "}
            <Link to="/signin" className="signin-option">
              로그인
            </Link>
          </Form.Item>
        </Form>
      </Card>
    );
  }
  
};

const RegisterForm = withRouter(FormBase);

export default SignUp;