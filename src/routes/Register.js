import React, { useState, useCallback } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import styled from "styled-components";
import Company from "../components/Register/Company";
import Spec from "../components/Register/Spec";
import PR from "../components/Register/PR";
import AccountInfo from "../components/Register/AccountInfo";

const RegisterPage = styled.div`
  font-weight: 1000;
  font-family: Roboto;
  .logo_below_in_mentor_register {
    font-size: 1.4rem;
    padding: 30px;
    padding-left: 0;
  }
  label {
    font-size: 1rem;
  }
  h1,
  h2 {
    font-size: 1.4rem;
    font-weight: 1000;
    margin-bottom: 60px;
    margin-top: 60px;
  }

  input {
    width: 60%;
  }
  h3 {
    display: inline;
    margin: 0;
  }
  h4 {
    color: blue;
    cursor: pointer;
  }
  @media only screen and (max-width: 900px) {
    input {
      width: 100%;
    }
  }
`;

const Register = () => {
  const [isOverlapped, setIsOverlapped] = useState(null);
  const onSubmit = (data) =>
    console.log({
      ...data,
    });
  const onOverlapCheck = useCallback(() => {
    setIsOverlapped((prev) => !prev);
  }, []);
  const parseDate = (date) => {
    const newDate = new Date(date);
    return newDate.toISOString().slice(0, 7);
  };
  const onFinish = useCallback((values) => {
    console.log(values);
    console.log("Success:", {
      nickname: values.nickname,
      current_company: {
        companyName: values.current_company,
        passed_date: values.passed_date ? parseDate(values.passed_date._d) : null,
      },
      current_job: values.current_job,
      university: values.university,
      AppliedCompanies: values.prepared_companies,
      phone_number: values.phone_number,
      PR: values.PR,
      account_email: values.account_email,
      account_num: values.account_num,
      WorkExperience: values.WorkExperience.map((work) => ({
        work_experience_company_name: work.company_name,
        work_from: work.worked_to_from[0] ? parseDate(work.worked_to_from[0]._d) : null,
        work_to: work.worked_to_from[1] ? parseDate(work.worked_to_from[1]._d) : null,
      })),
      ExtraCurricular: values.ExtraCurricular,
      bank: values.bank,
    });
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <RegisterPage>
      <div className="logo_below_in_mentor_register">멘토 등록</div>

      <Row>
        <Col sm={24} md={6}></Col>
        <Col sm={24} md={12}>
          <div>
            <h1>기본 정보</h1>
          </div>
          <Form name="basic" layout="vertical" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item label="닉네임" name="nickname" rules={[{ required: true, message: "닉네임을 적어주세요!" }]}>
              <Input />
            </Form.Item>
            <Button type="primary">중복 확인</Button>
            <Company />
            <Spec />
            <PR />
            <AccountInfo />
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col sm={24} md={6}></Col>
      </Row>
    </RegisterPage>
  );
};

export default Register;
