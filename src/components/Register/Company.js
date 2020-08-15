import React from "react";
import { Form, Input, DatePicker } from "antd";

const Company = ({ control }) => {
  return (
    <>
      <h2>소속 회사 및 합격 년월</h2>
      <Form.Item label="회사명" name="current_company" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="합격 년월" name="passed_date">
        <DatePicker picker="month" />
      </Form.Item>
      <Form.Item label="최종학력" name="university" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="직원 직군/직무" name="current_job" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>
    </>
  );
};

export default Company;
