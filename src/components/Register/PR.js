import React from "react";
import { Form, Input } from "antd";

const PR = () => {
  return (
    <>
      <Form.Item label="취업 준비생들에게 해주고 싶은 말" name="PR" rules={[{ required: true, message: "이 부분을 넣어주세요!" }]}>
        <Input.TextArea rows={8} />
      </Form.Item>
    </>
  );
};

export default PR;
