import React from "react";
import { Form, Input, Button } from "antd";

const AccountInfo = () => {
  return (
    <>
      <h1>정산 정보</h1>
      <Form.Item label="실명" name="real_name" rules={[{ required: true, message: "닉네임을 적어주세요!" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="휴대전화" name="phone_number">
        <Input />
        <Button type="primary">인증 번호 발송</Button>
      </Form.Item>
      <Form.Item label="인증번호" name="idenify_number">
        <Input size="small" style={{ width: "60%" }} />
        <Button size="small" style={{ fontSize: "12px" }} type="primary">
          인증
        </Button>
      </Form.Item>
      <Form.Item label="은행" name="bank" rules={[{ required: true, message: "은행 이름을 적어주세요!" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="계좌번호" name="account_num" rules={[{ required: true, message: "계좌번호를 적어주세요!" }]}>
        <Input />
      </Form.Item>
      <label>이메일주소</label>
      <h5>연락 받으실 이메일 주소를 적어주세요. 미가입 시 인증해주신 회사 메일로 자동 입력됩니다.</h5>
      <Form.Item name="account_email">
        <Input type="email" />
      </Form.Item>
    </>
  );
};

export default AccountInfo;
