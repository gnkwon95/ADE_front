import React from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const { Title } = Typography;

  return (
    <Card title={false} bordered={false} className="login-card">
      <div className="signin-texts">
        <Title level={2} className="signin-title">
          로그인
        </Title>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
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
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Link to="/forgotpw" className="signin-option">
            비밀번호를 잊으셨나요?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
          >
            로그인
          </Button>
          계정이 없으세요?{" "}
          <Link to="/join" className="signin-option">
            회원가입
          </Link>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignIn;
