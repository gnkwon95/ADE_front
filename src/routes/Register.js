import React, { useState, useCallback } from "react";
import { Form, Input, Button, Select, Row, Col } from "antd";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
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
    font-size: 1.1rem;
  }
  h1,
  h2 {
    font-size: 1.4rem;
    font-weight: 1000;
  }
  input {
    width: 60%;
  }
  h3 {
    display: inline;
    margin: 0;
  }
`;

const SelectYear = ({ control, name }) => {
  return (
    <Controller
      name={name}
      as={Select}
      options={[
        { value: "2020", label: "2020" },
        { value: "2019", label: "2019" },
        { value: "2018", label: "2018" },
        { value: "2017", label: "2017" },
        { value: "2016", label: "2016" },
        { value: "2015", label: "2015" },
        { value: "2014", label: "2014" },
        { value: "B2013", label: "2013 이전" },
      ]}
      defaultValue="2020"
      control={control}
      rules={{ required: true }}
      style={{ width: 120 }}
    />
  );
};

const SelectMonth = ({ control, name }) => {
  return (
    <Controller
      name={name}
      as={Select}
      options={[
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" },
        { value: "10", label: "10" },
        { value: "11", label: "11" },
        { value: "12", label: "12" },
      ]}
      defaultValue="2020"
      control={control}
      rules={{ required: true }}
      style={{ width: 120 }}
    />
  );
};

const Register = () => {
  const { handleSubmit, control } = useForm();
  const [isOverlapped, setIsOverlapped] = useState(null);
  const onSubmit = (data) => console.log(data);

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
            <h2>소속 회사 및 합격 년월</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Form.Item labelCol={{ span: 24 }} label="소속 회사">
                <div>
                  <h3>회사명:</h3> <Controller as={Input} name="current_company" control={control} defaultValue="" style={{ width: "60%" }} />
                </div>
              </Form.Item>
              <Form.Item labelCol={{ span: 24 }} label="합격 년월">
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

            <Form.Item labelCol={{ span: 24 }} label="최종 학력">
              <Controller as={Input} name="univ" placeholder="ex) ㅇㅇ대학교 ㅇㅇ학과 졸업" control={control} defaultValue="" />
            </Form.Item>
            <Form.Item labelCol={{ span: 24 }} label="직원 직군/직무">
              <Controller as={Input} name="workFor" placeholder="ex) 마케팅" control={control} defaultValue="" />
            </Form.Item>
            <h1>합격 당시 스펙</h1>
            <Form.Item labelCol={{ span: 24 }} label="보유 자격증 및 어학 시험 점수">
              <Controller as={Input} name="abilities" placeholder="ex) 토익 xxx점" control={control} defaultValue="" />
              <h4>+ 추가하기</h4>
            </Form.Item>
            <Form.Item labelCol={{ span: 24 }} label="대외 활동">
              <Controller as={Input} name="activities" placeholder="ex) SK SUNNY 대학생 자원 봉사단" control={control} defaultValue="" />
              <h4>+ 추가하기</h4>
            </Form.Item>
            <Form.Item labelCol={{ span: 24 }} label="주요 경력 및 인턴 경험">
              <div style={{ marginTop: 20 }}>
                <h3>회사명:</h3> <Controller as={Input} name="internship_company" control={control} defaultValue="" style={{ width: "60%" }} />
              </div>

              <div style={{ display: "flex", alignItems: "center", marginTop: 10, flexWrap: "wrap" }}>
                <h3 style={{ marginRight: 20 }}>기간:</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <SelectYear name="passed_year" control={control} />
                    <span style={{ margin: `0 1%` }}>년</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <SelectMonth name="passed_month" control={control} />
                    <span style={{ margin: `0 1%` }}>월</span>
                  </div>
                </div>

                <span>~</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <SelectYear name="passed_year" control={control} />
                    <span style={{ margin: `0 1%` }}>년</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <SelectMonth name="passed_month" control={control} />
                    <span style={{ margin: `0 1%` }}>월</span>
                  </div>
                </div>
              </div>
              <h4>+ 추가하기</h4>
            </Form.Item>
            <Form.Item labelCol={{ span: 24 }} label="함께 준비했던 회사">
              <Controller as={Input} name="AppliedCompanies" control={control} defaultValue="" />
              <h4>+ 추가하기</h4>
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={24} md={6}></Col>
      </Row>
    </RegisterPage>
  );
};

export default Register;
