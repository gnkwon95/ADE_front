import React, { useState, useEffect } from "react";
import { Form, Typography, message } from "antd";
import Company from "./Company";
import PR from "./PR";
import AccountInfo from "./AccountInfo";
import axios from "axios";
import moment from "moment";

const { Title } = Typography;

const RegisterForm = (props) => {
  const [form] = Form.useForm();
  const currentStep = props.currentStep;
  const steps = props.steps;
  const setStep = props.setStep;
  const fields = props.fields;
  const setFields = props.setFields;
  const formTemplate = props.formTemplate;
  const authUser = props.authUser;

  const [isNicknameValidated, setIsNicknameValidated] = useState(false);
  const [valStatus, setValStatus] = useState(0);

  const [mentorData, setMentorData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMentorData = async () => {
    try {
      setError(null);
      setMentorData(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        // `http://15.164.251.155/profile_full/?user=${authUser.uid}`
        `http://15.164.251.155/profile_full/?user=UBLojFqhwVZ752MYk47RXL18jD73`
      );
      const len = response.data.length;
      const data = response.data[len - 1];
    } catch (e) {
      setError(e);
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMentorData();
  }, []);

  const onFinish = (values) => {
    const submitForm = async () => {
      try {
        await setFields({
          ...fields,
          ...values,
        });
        await axios.post(
          `http://15.164.251.155/profile_full/?user=${authUser.uid}/`,
          fields
        );
        await message.success("Processing complete!");
      } catch (e) {
        console.log(e);
        message.error("멘토 프로필 제출에 실패했습니다.");
      }
    };

    submitForm();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFill = () => {
    currentStep === 0
      ? form.setFieldsValue({
          nickname: "백승호",
          current_company: "몰로코",
          applied_job: "마케팅 매니저",
          work_start: moment("2020-01"),
          current_job: "오징어 판매원",
          education_univ: "강남대학교",
          education_major: "오징어 판매업",
          education_level: "석사",
          education_status: "중퇴",
          AppliedCompanies: ["네이버", "삼성", "몰로코"],
          Certificate: ["토익 500점", "환장하기 900점", "라면 6봉지 한 입 컷"],
          Extracurricular: [
            "오징어 타고 남극해까지 챌린지 성공",
            "오징어 갓으로 라면 그릇 만들기 공모전 우승",
            "누가 오징어 같이 생겼나 대회 심사",
          ],
          WorkExperience: [
            {
              company_name: "네이버",
              worked_to_from: [moment("2020-01"), moment("2020-12")],
            },
          ],
        })
      : currentStep === 1
      ? form.setFieldsValue({
          intro:
            "본 항목은 메인페이지의 멘토님 카드에 노출되는 한 마디로, 클릭을 유도할 수 있도록 짧지만 강렬하게 작성하실 수록 좋습니다.",
          PR:
            "본 항목은 메인페이지의 멘토님 카드에 노출되는 한 마디로, 클릭을 유도할 수 있도록 짧지만 강렬하게 작성하실 수록 좋습니다.",
        })
      : form.setFieldsValue({
          bank: "우리은행",
          card_user_name: "nickname",
          account_num: "104002045",
          account_email: "100n9@naver.com",
        });
  };

  const onEmpty = () => {
    form.setFieldsValue(formTemplate);
  };

  const onNext = () => {
    if (currentStep === 0) {
      form
        .validateFields()
        .then((values) => {
          const formatMonth = (month) => {
            let str = moment(month).format("MM");
            return (str *= 1);
          };
          const formatYear = (year) => {
            let str = moment(year).format("YYYY");
            return (str *= 1);
          };

          const workStartYear = formatYear(values.work_start);
          const workStartMonth = formatMonth(values.work_start);
          const workFromYear = formatYear();
          const workFromMonth = formatYear();
          const workToYear = formatYear();
          const workToMonth = formatYear();

          setFields({
            ...fields,
            ...values,
            work_start_year: workStartYear,
            work_start_month: workStartMonth,
          });
          setStep(currentStep + 1);
        })
        .catch((errorInfo) => console.log(errorInfo));
    } else if (currentStep === 1) {
      form
        .validateFields()
        .then((values) => {
          setFields({
            ...fields,
            ...values,
          });

          setStep(currentStep + 1);
        })
        .catch((errorInfo) => console.log(errorInfo));
    }
  };

  return (
    <>
      <Title level={2} style={{ color: "#5AB485" }}>
        {steps[currentStep].content}
      </Title>
      <Form
        id="bankForm"
        name="bankForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        // validateTrigger={onNext}
      >
        {currentStep === 0 ? (
          <Company
            fields={fields}
            onFill={onFill}
            onEmpty={onEmpty}
            onNext={onNext}
            isNicknameValidated={isNicknameValidated}
            setIsNicknameValidated={setIsNicknameValidated}
            valStatus={valStatus}
            setValStatus={setValStatus}
          />
        ) : props.currentStep === 1 ? (
          <PR
            currentStep={currentStep}
            setStep={setStep}
            fields={fields}
            onFill={onFill}
            onEmpty={onEmpty}
            onNext={onNext}
          />
        ) : (
          <AccountInfo
            currentStep={currentStep}
            setStep={setStep}
            fields={fields}
            onFill={onFill}
            onEmpty={onEmpty}
            onNext={onNext}
          />
        )}
      </Form>
    </>
  );
};

export default RegisterForm;
