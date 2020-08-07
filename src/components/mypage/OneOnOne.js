import React from "react";
import { Form, Input, Button, Card, List, Typography, Space } from "antd";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
};

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const OneOnOne = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Space size="large" direction="vertical" style={{ width: "100%" }}>
      <Card title="1대1 문의하기">
        <div style={{ maxWidth: 700, margin: "auto" }}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "email"]}
              label="이메일"
              rules={[
                {
                  type: "email",
                  message: "올바른 이메일 형식이 아닙니다!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="답변받으실 이메일 주소를 입력해주세요" />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="문의내용">
              <Input.TextArea placeholder="문의 내용을 적어주세요" required />
            </Form.Item>
            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 0 }}
              rules={[
                {
                  type: "email",
                },
                {
                  required: true,
                  message: "문의 내용을 적어주세요!",
                },
              ]}
            >
              <Button type="primary" htmlType="submit">
                문의하기
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
      <Card title="지난 문의내역">
        <List
          header={false}
          footer={false}
          bordered={false}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[확인중]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Card>
    </Space>
  );
};

export default OneOnOne;
