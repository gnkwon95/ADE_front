import React, { useEffect } from "react";
import {
  Form,
  Input,
  Typography,
  Row,
  Col,
  Select,
  Button,
  message,
} from "antd";

const AccountInfo = (props) => {
  const { Title } = Typography;
  const { Option } = Select;
  const [form] = Form.useForm();

  const fields = props.fields;
  const currentStep = props.currentStep;
  const setStep = props.setStep;

  const onLoad = () => {
    form.setFieldsValue(fields);
  };

  useEffect(() => {
    onLoad();
  }, []);

  const banks = [
    "KB국민",
    "카카오뱅크",
    "농협",
    "신한",
    "IBK기업",
    "하나은행",
    "우리",
    "국민",
    "SC제일",
    "대구",
    "부산",
    "광주",
    "새마을",
    "경남",
    "전북",
    "제주",
    "산업",
    "우체국",
    "신협",
    "수협",
    "씨티",
    "케이뱅크",
    "도이치",
    "BOA",
    "BNP",
    "줒국공상",
    "HSBC",
    "JP모간",
    "산림조합",
    "저축은행",
  ];

  const bankComps = [];

  for (let i = 0; i < banks.length; i++) {
    bankComps.push(<Option key={i}>{banks[i]}</Option>);
  }

  const handleChange = (value) => console.log(`selected ${banks[value]}`);

  return (
    <>
      <Title level={4}> 입금 받을 계좌</Title>
      <Form.Item name="bankInfo" style={{ marginBottom: 0 }}>
        <Row gutter={8}>
          <Col span={6}>
            <Form.Item name="bank" style={{ marginBottom: 0 }}>
              <Select
                showSearch
                defaultValue="KB국민"
                style={{ width: 150 }}
                onChange={handleChange}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {bankComps}
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="예금주"
              name="card_user_name"
              rules={[{ required: true, message: "닉네임을 적어주세요!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="계좌번호"
              name="account_num"
              rules={[{ required: true, message: "계좌번호를 적어주세요!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Title level={4}>이메일 주소</Title>
      <div>
        연락 받으실 이메일 주소를 적어주세요. 미가입 시 인증해주신 회사 메일로
        자동 입력됩니다.
      </div>
      <Form.Item name="account_email">
        <Input type="email" />
      </Form.Item>
      <Button type="link" htmlType="button" onClick={props.onFill}>
        Fill form
      </Button>
      <Button type="link" htmlType="button" onClick={props.onEmpty}>
        Empty form
      </Button>
      <Form.Item name="stepButton" style={{ marginBottom: 0 }}>
        <Button
          style={{ margin: "0 8px", float: "left" }}
          onClick={() => setStep(currentStep - 1)}
        >
          이전
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          form="bankForm"
          style={{ float: "right" }}
        >
          제출하기
        </Button>
      </Form.Item>
    </>
  );
};

export default AccountInfo;
