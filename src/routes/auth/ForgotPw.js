import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { withFirebase } from '../../firebase'

const ForgotPw = (props) => {

  const onFinish = values => {
    console.log("Received values of form: ", values);
    const email = values.email
    props.firebase.doPassWordReset(email)
    .then(() => {
      // 변경되었습니다. 다시 로그인해주세요 등의 알림
    })
    .catch(error => {
      alert("error!")
      console.log(error)
    })
  };

  const { Title, Text } = Typography;

  return (
    <Card title={false} bordered={false} className="login-card">
    <div className="signin-texts">
      <Title level={2} className="signin-title">
        비밀번호 찾기
      </Title>
      <Text className="signin-desc">
        입력한 메일 주소로 비밀번호 재설정 링크를 보내드립니다 :)
      </Text>
      </div>
      <Form
        name="normal_forgotpw"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
          >
            메일 전송
          </Button>
          혹은{" "}
          <Link to="/signin" className="signin-option">
            로그인하기
          </Link>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default withFirebase(ForgotPw);
