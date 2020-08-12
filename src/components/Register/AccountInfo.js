import React from "react";
import { Form, Input, Button } from "antd";
import { Controller } from "react-hook-form";

const AccountInfo = ({ control }) => {
  return (
    <>
      <h1>정산 정보</h1>
      <Form.Item rules={[{ required: true, message: "필수 정보입니다. 실명을 적어주세요!" }]} labelCol={{ span: 24 }} label="실명">
        <Controller required style={{ width: "200px" }} placeholder="홍길동" as={Input} name="real_name" control={control} defaultValue="" />
      </Form.Item>
      <Form.Item labelCol={{ span: 24 }} label="휴대전화">
        <Controller required type="tel" style={{ flexGrow: 3 }} as={Input} name="phone_number" control={control} defaultValue="" />
        <Button type="primary" style={{ flexGrow: 1 }}>
          인증번호 발송
        </Button>
        <div style={{ display: "flex", alignItems: "center", marginTop: `10px` }}>
          <h3 style={{ display: "block", marginRight: 10 }}>인증번호:</h3> <Input style={{ width: `150px` }} />
          <Button type="primary" style={{ marginLeft: "3%" }}>
            확인
          </Button>
        </div>
      </Form.Item>
      <Form.Item rules={[{ required: true, message: "계좌정보를 적어주세요!" }]} labelCol={{ span: 24 }} label="정산 받을 계좌">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ flexGrow: 1 }}>
            <h3>은행: </h3> <Controller required as={Input} name="bank" control={control} defaultValue="" />
          </div>
          <div style={{ flexGrow: 3 }}>
            <h3>계좌번호: </h3> <Controller required as={Input} name="bank_account" control={control} defaultValue="" />
          </div>
        </div>
      </Form.Item>
    </>
  );
};

export default AccountInfo;
