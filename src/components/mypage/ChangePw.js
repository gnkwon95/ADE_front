import React from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { withFirebase } from "../../firebase";

const ChangePw = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const password = values.password;
    props.firebase
      .doPasswordUpdate(password)
      .then(() => {
        alert("변경되었습니다 알림");
      })
      .catch((error) => {
        alert("error!");
        console.log(error);
      });
  };

  return (
    <Form layout="inline" name="normal_changepw" onFinish={onFinish}>
      <Form.Item
        name="password"
        rules={[
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
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          size="large"
        >
          변경하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withFirebase(ChangePw);
