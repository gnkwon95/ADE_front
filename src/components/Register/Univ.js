import React from "react";
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

import InputWithPlus from "../CustomComponents/InputWithPlus"

const Univ = ({ control }) => {
  return (
    <>
      <Form.Item rules={[{ required: true, message: "최종학력을 적어주세요!" }]} labelCol={{ span: 24 }} label="최종 학력">
        <Controller required as={Input} name="univ" placeholder="ex) ㅇㅇ대학교 ㅇㅇ학과 졸업" control={control} defaultValue="" />
      </Form.Item>
      <Form.Item rules={[{ required: true, message: "직무를 적어주세요!" }]} labelCol={{ span: 24 }} label="직원 직군/직무">
        <Controller required  as={Input} name="workFor" placeholder="ex) 마케팅" control={control} defaultValue="" />
      </Form.Item>
      <InputWithPlus label="함께 준비했던 회사" name="AppliedCompanies"/>
    </>
  );
};

export default Univ;
