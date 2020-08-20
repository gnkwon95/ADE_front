import React, { useState } from "react";
import { Form, Input, Button, Drawer, message } from "antd";
import { withFirebase } from "../../firebase";
import { LockOutlined } from "@ant-design/icons";

const ChangePwForm = (props) => {
  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    const prev = values.prevpw;
    const password = values.password;

    const changePassword = async () => {
      try {
        await props.firebase.doPasswordUpdate(prev, password)
        await message.success("변경됐습니다.")
      } catch (e) {
        message.error("비밀번호 변경에 실패했습니다.")
        console.log(e)
      }
    }
    changePassword();
  };

  return (
    <>
      <Button type="link" onClick={() => setVisible(true)} style={{float: "right", padding: "0"}}>
      <LockOutlined /> 비밀번호 변경
      </Button>
      <Drawer
        onClose={() => setVisible(false)}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              onClick={()=>setVisible(false)}
              style={{marginRight:8}}
            >
              취소
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              onClick={()=>setVisible(false)}
              form="changePwForm"
            >
              변경하기
            </Button>
          </div>
        }
      >
        <Form
          name="normal_changepw"
          onFinish={onFinish}
          layout="vertical"
          id="changePwForm"
        >
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
            <Input type="password" size="large" />
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
            <Input type="password" size="large" />
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
            <Input type="password" size="large" />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default withFirebase(ChangePwForm);
