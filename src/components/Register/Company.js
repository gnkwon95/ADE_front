import React from "react";
import { Form, Input, Select } from "antd";
import { Controller } from "react-hook-form";
import { SelectYear, SelectMonth } from "../Etc/Selector";

const Company = ({ control }) => {
  return (
    <>
      <h2>소속 회사 및 합격 년월</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Form.Item labelCol={{ span: 24 }} label="소속 회사" rules={[{ required: true, message: "소속 회사를 적어주세요!" }]}>
          <div>
            <h3>회사명:</h3> <Controller required as={Input} name="current_company" control={control} defaultValue="" style={{ width: "60%" }} />
          </div>
        </Form.Item>
        <Form.Item labelCol={{ span: 24 }} label="합격 년월" rules={[{ required: true, message: "합격일자를 적어주세요!" }]}>
          <div style={{ display: "inline" }}>
            <SelectYear name="passed_year" control={control} />
            <span style={{ margin: `0 1%` }}>년</span>
          </div>
          <div style={{ display: "inline" }}>
            <SelectMonth name="passed_month" control={control} />
            <span style={{ margin: `0 1%` }}>월</span>
          </div>
        </Form.Item>
      </div>
    </>
  );
};

export default Company;
