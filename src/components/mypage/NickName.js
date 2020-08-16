import React, { useState } from "react";
import { Card, Button, Drawer, Form, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";


const NickName = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
          <Card
            title="닉네임"
            bordered={false}
            extra={<Button type="link" onClick={() => setVisible(true)} style={{padding: "0"}}><EditOutlined />변경하기</Button>}
          
          >
            <div className="card-single-text">
              <span
                level={4}
                className="card-text"
                style={{ fontSize: 20, color: "#000", fontWeight: 500 }}
              >
                백승렬
              </span>
            </div>
          </Card>
          <Drawer title="닉네임 변경하기"
          onClose={() => setVisible(false)}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={() => setVisible(false)} style={{ marginRight: 8 }}>
                취소
              </Button>
              <Button onClick={() => setVisible(false)} type="primary">
                확인
              </Button>
            </div>
          }>
            <Form layout="vertical">
            <Form.Item
                  name="name"
                  label="닉네임"
                  rules={[{ required: true, message: '변경할 닉네임을 입력하세요!' }]}
                >
                  <Input placeholder="변경할 닉네임을 입력하세요" />
                </Form.Item>
            </Form>
          </Drawer>
          </>
  );
};

export default NickName;
