import React, { useEffect, useState } from "react";
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
  message,
} from "antd";
import InputWithPlus from "../CustomComponents/InputWithPlus";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { RangePicker } = DatePicker;
const { Title } = Typography;
const { Option } = Select;

const Company = (props) => {
  // SETUP
  const [form] = Form.useForm();
  const [nickname, setNickname] = useState("");
  const validateStatus = [
    { status: "", msg: "닉네임을 입력해 주세요." },
    { status: "warning", msg: "닉네임 중복 확인이 필요합니다." },
    { status: "validating", msg: "확인중입니다." },
    { status: "success", msg: "사용 가능한 닉네임입니다." },
    { status: "error", msg: "사용 불가능한 닉네임입니다." },
  ];

  const onNicknameChange = (e) => {
    props.setValStatus(1);
    props.setIsNicknameValidated(false);
    setNickname(e.target.value);
  };

  const checkNickname = async () => {
    try {
      props.setValStatus(2);
      const response = await axios.get(
        `http://15.164.251.155/profile_full/?nickname=${nickname}`
      );
      if (response.data.length === 0 && nickname !== "") {
        props.setValStatus(3);
        props.setIsNicknameValidated(true);
      } else {
        props.setValStatus(4);
      }
    } catch (e) {
      console.log(e);
      message.error(
        "알 수 없는 에러가 발생했습니다. 잠시 후에 다시 시도해주세요."
      );
    }
  };

  const fields = props.fields;

  const onLoad = () => {
    form.setFieldsValue(fields);
  };

  useEffect(() => {
    onLoad();
  }, []);

  // HANDLE CHANGES
  const handleChange = (value) => console.log(`selected ${value}`);

  // DATE FORMATTING
  const monthFormat = "YYYY-MM";

  return (
    <>
      <Title level={4}>닉네임</Title>
      <Form.Item name="mentorNickname" style={{ marginBottom: 0 }}>
        <Form.Item
          name="nickname"
          rules={[
            {
              required: true,
              message: "닉네임을 입력해주세요.",
              validator: (_, value) =>
                props.isNicknameValidated
                  ? Promise.resolve()
                  : Promise.reject("닉네임 중복 확인이 필요합니다."),
            },
          ]}
          validateTrigger={checkNickname}
          hasFeedback
          validateStatus={validateStatus[props.valStatus].status}
          help={validateStatus[props.valStatus].msg}
          onChange={onNicknameChange}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginRight: "16px",
          }}
        >
          <Input placeholder="닉네임을 입력해주세요." />
        </Form.Item>
        <Button type="primary" htmlType="button" onClick={checkNickname}>
          중복 확인
        </Button>
      </Form.Item>

      <Title level={4}>소속 회사 및 입사시기</Title>
      <Form.Item name="companyInfo" style={{ marginBottom: 0 }}>
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              label="회사명"
              name="current_company"
              rules={[{ required: true, message: "필수 필드입니다." }]}
            >
              <Input placeholder="현재 다니고 계신 회사 이름을 입력해주세요." />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="입사 시기"
              name="work_start"
              rules={[{ required: true, message: "필수 필드입니다." }]}
            >
              <DatePicker picker="month" format={monthFormat} />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Title level={4}>지원 포지션</Title>
      <Form.Item
        name="applied_job"
        rules={[{ required: true, message: "필수 필드입니다." }]}
      >
        <Input placeholder="ex) 마케팅 매니저" />
      </Form.Item>

      <Title level={4}>현재 포지션</Title>
      <Form.Item
        name="current_job"
        rules={[{ required: false, message: "필수 필드입니다." }]}
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
              rules={[{ required: true, message: "필수 필드입니다." }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item
              label="전공"
              name="education_major"
              rules={[{ required: true, message: "필수 필드입니다." }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="education_level" required={true}>
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
            <Form.Item name="education_status" required={true}>
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
                      <Input placeholder="회사명" style={{ width: "100%" }} />
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
                      <RangePicker picker="month" format={monthFormat} />
                    </Form.Item>

                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        style={{ margin: "0 8px" }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    ) : null}
                  </Space>
                </>
              ))}

              <Form.Item>
                <Button
                  type="link"
                  onClick={() => {
                    add();
                  }}
                  style={{ padding: 0 }}
                  htmlType="button"
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
        name="Certificate"
        // label="보유 자격증 및 어학 시험 점수"
        placeholder="ex) 토익 900점"
      />

      <Title level={4}>대외활동</Title>
      <InputWithPlus
        name="Extracurricular"
        // label="대외활동"
        placeholder="ex) SK Sunny 대학생 자원봉사단, ㅇㅇ 공모전 대상 수상"
      />
      <Button type="link" htmlType="button" onClick={props.onFill}>
        Fill form
      </Button>
      <Button type="link" htmlType="button" onClick={props.onEmpty}>
        Empty form
      </Button>
      <Form.Item name="stepButton" style={{ marginBottom: 0 }}>
        <Button
          type="primary"
          style={{ float: "right" }}
          htmlType="button"
          onClick={props.onNext}
        >
          다음
        </Button>
      </Form.Item>
    </>
  );
};

export default Company;
