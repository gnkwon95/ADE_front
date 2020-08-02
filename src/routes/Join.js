import React from "react";
import { Form, Input, Button, Typography, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./SignIn.css";

const Join = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const { Title } = Typography;

  return (
    <>
      <Title level={2} className="signin-title">
        회원가입
      </Title>
      <Form
        name="join"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
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

                return Promise.reject(
                  "입력한 비밀번호가 일치하지 않습니다!"
                );
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
    </>
  );
};

export default Join;
