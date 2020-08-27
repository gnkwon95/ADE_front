import React, { useState, useCallback } from "react";
import { Form, Typography, message, Button } from "antd";
import Company from "./Company";
import PR from "./PR";
import AccountInfo from "./AccountInfo";

const { Title } = Typography;

const RegisterForm = (props) => {
  const onFinish = (values) => {
    console.log("Success: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title level={2} style={{ color: "#5AB485" }}>
        {props.steps[props.currentStep].content}
      </Title>
      {props.currentStep === 0 ? (
        <Company
          currentStep={props.currentStep}
          setStep={props.setStep}
          fields={props.fields}
          setFields={props.setFields}
          formTemplate={props.formTemplate}
        />
      ) : props.currentStep === 1 ? (
        <PR
          currentStep={props.currentStep}
          setStep={props.setStep}
          fields={props.fields}
          setFields={props.setFields}
          formTemplate={props.formTemplate}
        />
      ) : (
        <Form
          id="bankForm"
          name="bankForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <AccountInfo
            currentStep={props.currentStep}
            setStep={props.setStep}
          />
          <Form.Item name="stepButton" style={{ marginBottom: 0 }}>
            <Button
              style={{ margin: "0 8px", float: "left" }}
              onClick={() => props.setStep(props.currentStep - 1)}
            >
              이전
            </Button>
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
              htmlType="submit"
              form="bankForm"
              style={{ float: "right" }}
            >
              제출하기
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default RegisterForm;
