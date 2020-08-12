import React, { useState, useCallback } from "react";
import { Form, Input, Button, Select, Row, Col } from "antd";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import Company from "../components/Register/Company";
import Univ from "../components/Register/Univ";
import Spec from "../components/Register/Spec";
import PR from "../components/Register/PR";
import AccountInfo from "../components/Register/AccountInfo";
const { Option } = Select;

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
`;

const Register = () => {
  const [abilities, setAbilities] = useState([0]);
  const [Extracurricular, setExtracurricular] = useState([0]);
  const [WorkExperience, setWorkExperience] = useState([0]);
  const { handleSubmit, control } = useForm();
  const [isOverlapped, setIsOverlapped] = useState(null);
  const onSubmit = (data) =>
    console.log({
      ...data,
      abilities,
      Extracurricular,
      WorkExperience,
    });

  const onOverlapCheck = useCallback(() => {
    setIsOverlapped((prev) => !prev);
  }, []);
  return (
    <RegisterPage>
      <div className="logo_below_in_mentor_register">멘토 등록</div>

      <Row>
        <Col sm={24} md={6}></Col>
        <Col sm={24} md={12}>
          <div>
            <h1>기본 정보</h1>
          </div>
          <Form onFinish={handleSubmit(onSubmit)} labelCol={{ span: 24 }}>
            <Form.Item label="닉네임" rules={[{ required: true, message: "닉네임을 적어주세요!" }]}>
              <Controller as={Input} name="nickname" control={control} defaultValue="" style={{ width: "60%" }} />
              <Button type="primary" onClick={onOverlapCheck} style={{ marginLeft: "3%", width: "100px" }}>
                중복 체크
              </Button>
              {isOverlapped ? <div>닉네임이 중복되었습니다.</div> : <div>사용 가능한 닉네임입니다.</div>}
            </Form.Item>
            <Company control={control} />
            <Univ control={control} />
            <Spec
              WorkExperience={WorkExperience}
              setWorkExperience={setWorkExperience}
              Extracurricular={Extracurricular}
              setExtracurricular={setExtracurricular}
              abilities={abilities}
              setAbilities={setAbilities}
              control={control}
            />
            <PR control={control} />
            <AccountInfo control={control} />
            <Button type="primary" htmlType="submit">
              제출하기
            </Button>
          </Form>
        </Col>
        <Col sm={24} md={6}></Col>
      </Row>
    </RegisterPage>
  );
};

export default Register;
