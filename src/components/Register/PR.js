import React, { useEffect } from "react";
import { Form, Input, Typography, Button } from "antd";

const PR = (props) => {
  const { Title } = Typography;
  const [form] = Form.useForm();

  const currentStep = props.currentStep;
  const setStep = props.setStep;
  const fields = props.fields;

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    form.setFieldsValue(fields);
  };

  return (
    <>
      <Title level={4}>한 마디 소개</Title>
      <Form.Item
        label="본 항목은 메인페이지의 멘토님 카드에 노출되는 한 마디로, 클릭을 유도할
        수 있도록 짧지만 강렬하게 작성하실 수록 좋습니다."
        name="intro"
        rules={[{ required: true, message: "이 부분을 넣어주세요!" }]}
      >
        <Input.TextArea rows={8} />
      </Form.Item>
      <Title level={4}>드리는 말</Title>
      <Form.Item
        label="본 항목은 멘토님의 상담 유치를 위한 멘트로, 소개 페이지 최상단에
        위치하게 됩니다. 최소 100자 이상 작성을 권장드립니다"
        name="PR"
        rules={[{ required: true, message: "이 부분을 넣어주세요!" }]}
      >
        <Input.TextArea rows={8} />
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
          htmlType="button"
        >
          이전
        </Button>
        <Button
          type="primary"
          onClick={props.onNext}
          style={{ float: "right" }}
          htmlType="button"
        >
          다음
        </Button>
      </Form.Item>
    </>
  );
};

export default PR;
