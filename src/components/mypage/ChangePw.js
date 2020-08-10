import React from "react";
import { Form, Input, Button } from "antd";
import { withFirebase } from "../../firebase";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 5,
  },
};


const ChangePw = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const prev = values.prevpw;
    const password = values.password;
    props.firebase
      .doPasswordUpdate(prev, password)
      .then(() => {
        alert("변경되었습니다 알림");
      })
      .catch((error) => {
        alert("error!");
        console.log(error);
      });
  };

  return (
    <Form {...layout} name="normal_changepw" onFinish={onFinish}>
      <Form.Item
        name="prevpw"
        label="기존 비밀번호"
        rules={[
          {
            required: true,
            message: "기존 비밀번호를 입력하세요.",
          },
        ]}
      >
        <Input
          type="password"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="새 비밀번호"
        rules={[
          {
            required: true,
            message: "새로운 비밀번호를 입력하세요.",
          },
          {
            min: 6,
            message: "비밀번호는 6글자 이상입니다.",
          },
        ]}
      >
        <Input
          type="password"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="새 비밀번호 확인"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "새 비밀번호 확인이 필요합니다.",
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
          type="password"
          size="large"
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
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