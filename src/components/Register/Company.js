import React from "react";
import {
  Form,
  Input,
  DatePicker,
  Button,
  Typography,
  Select,
  Space,
  Row,
  Col,
} from "antd";
import InputWithPlus from "../CustomComponents/InputWithPlus";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const { RangePicker } = DatePicker;

const Company = (props) => {
  const { Title } = Typography;
  const { Option } = Select;
  const [form] = Form.useForm();

  const handleChange = (value) => console.log(`selected ${value}`);

  const formatMonth = (month) => {
    let str = moment(month).format("MM");
    return (str *= 1);
  };
  const formatYear = (year) => {
    let str = moment(year).format("YYYY");
    return (str *= 1);
  };

  const onFinish = (values) => {
    console.log("Success: ", values);
    const workStartYear = formatYear(values.work_start);
    const workStartMonth = formatMonth(values.work_start);
    const workFromYear = formatYear();
    const workFromMonth = formatYear();
    const workToYear = formatYear();
    const workToMonth = formatYear();

    props.setFields({
      ...props.fields,
      ...values,
      work_start_year: workStartYear,
      work_start_month: workStartMonth,
    });

    props.setStep(props.currentStep + 1);

    console.log(props.fields);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFill = () => {
    form.setFieldsValue({
      nickname: "백승호",
      current_company: "몰로코",
      applied_job: "마케팅 매니저",
      current_job: "오징어 판매원",
      education_univ: "강남대학교",
      education_major: "오징어 판매업",
      education_level: "석사",
      education_status: "중퇴",
      AppliedCompanies: ["네이버", "삼성", "몰로코"],
      Abilites: ["토익 500점", "환장하기 900점", "라면 6봉지 한 입 컷"],
      Extracurricular: [
        "오징어 타고 남극해까지 챌린지 성공",
        "오징어 갓으로 라면 그릇 만들기 공모전 우승",
        "누가 오징어 같이 생겼나 대회 심사",
      ],
    });
  };

  const monthFormat = "YYYY-MM";

  return (
    <Form
      id="companyForm"
      name="companyForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Title level={4}>닉네임</Title>
      <Form.Item name="mentorNickname" style={{ marginBottom: 0 }}>
        <Form.Item
          name="nickname"
          rules={[{ required: true, message: "닉네임을 적어주세요!" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginRight: "16px",
          }}
        >
          <Input placeholder="닉네임을 입력해주세요." />
        </Form.Item>
        <Button type="primary">중복 확인</Button>
      </Form.Item>

      <Title level={4}>소속 회사 및 입사시기</Title>
      <Form.Item name="companyInfo" style={{ marginBottom: 0 }}>
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              label="회사명"
              name="current_company"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="현재 다니고 계신 회사 이름을 입력해주세요." />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="입사 시기"
              name="work_start"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <DatePicker
                picker="month"
                defaultValue={moment("2020-01", monthFormat)}
                format={monthFormat}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Title level={4}>지원 포지션</Title>
      <Form.Item
        name="applied_job"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="ex) 마케팅 매니저" />
      </Form.Item>

      <Title level={4}>현재 포지션</Title>
      <Form.Item
        name="current_job"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <Input placeholder="미기입 시 지원 포지션과 동일로 처리" />
      </Form.Item>

      <Title level={4}>학력</Title>
      <Form.Item name="companyInfo" style={{ marginBottom: 0 }}>
        <Row gutter={8}>
          <Col span={6}>
            <Form.Item
              label="대학"
              name="education_univ"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item
              label="전공"
              name="education_major"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="education_level">
              <Select
                defaultValue="학사"
                style={{ width: 100 }}
                onChange={handleChange}
              >
                <Option value="학사">학사</Option>
                <Option value="석사">석사</Option>
                <Option value="박사 이상">박사 이상</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="education_status">
              <Select
                defaultValue="졸업"
                style={{ width: 100 }}
                onChange={handleChange}
              >
                <Option value="졸업">졸업</Option>
                <Option value="재학">재학</Option>
                <Option value="수료">수료</Option>
                <Option value="중퇴">중퇴</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Title level={4}>면접 응시 회사</Title>
      <InputWithPlus
        name="AppliedCompanies"
        placeholder="ex) 삼성전자 기술직 (서류합/인적성합/최종 등)"
      />
      <Title level={3}>합격 당시 스펙</Title>

      <Title level={4}>주요 경력 및 인턴 경험</Title>
      <Form.List name="WorkExperience">
        {(fields, { add, remove }) => {
          return (
            <div>
              {/* {fields[0] ? null : <label>주요 경력 및 인턴 경험</label>} */}
              {fields.map((field, index) => (
                <>
                  {/* {index === 0 ? "주요 경력 및 인턴 경험" : null} */}
                  <Space key={index} style={{ display: "flex" }} align="start">
                    <Form.Item
                      key={field.key}
                      {...field}
                      name={[field.name, "company_name"]}
                      fieldKey={[field.fieldKey, "first"]}
                      rules={[
                        { required: true, message: "회사명을 채워넣어주세요!" },
                      ]}
                    >
                      <Input
                        placeholder="회사명"
                        style={{ width: "100%" }}
                        defaultValue="오징어 전문가"
                      />
                    </Form.Item>
                    <Form.Item
                      key={field.key}
                      {...field}
                      name={[field.name, "worked_to_from"]}
                      fieldKey={[field.fieldKey, "last"]}
                      rules={[
                        { required: true, message: "근무기간을 알려주세요!" },
                      ]}
                    >
                      <RangePicker
                        picker="month"
                        defaultValue={[
                          moment("2020-01", monthFormat),
                          moment("2020-12", monthFormat),
                        ]}
                        format={monthFormat}
                      />
                    </Form.Item>

                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                        console.log(field.name);
                      }}
                    />
                  </Space>
                </>
              ))}

              <Form.Item>
                <Button
                  type="link"
                  onClick={() => {
                    add();
                  }}
                >
                  <PlusOutlined /> 추가하기
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>

      <Title level={4}>보유 자격증 및 어학 시험 점수</Title>
      <InputWithPlus
        name="Abilites"
        // label="보유 자격증 및 어학 시험 점수"
        placeholder="ex) 토익 900점"
      />

      <Title level={4}>대외활동</Title>
      <InputWithPlus
        name="Extracurricular"
        // label="대외활동"
        placeholder="ex) SK Sunny 대학생 자원봉사단, ㅇㅇ 공모전 대상 수상"
      />
      <Button type="link" htmlType="button" onClick={onFill}>
        Fill form
      </Button>
      <Form.Item name="stepButton" style={{ marginBottom: 0 }}>
        <Button
          type="primary"
          style={{ float: "right" }}
          htmlType="submit"
          // form="companyForm"
        >
          다음
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Company;
