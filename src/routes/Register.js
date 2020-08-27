import React, { useState } from "react";
import { Button, Steps } from "antd";
import RegisterForm from "../components/Register/RegisterForm";
import "./Register.css";
import { number } from "prop-types";

// STEPS
const { Step } = Steps;

const steps = [
  {
    title: "Step 1",
    content: "프로필 정보",
  },
  {
    title: "Step 2",
    content: "프로필 정보",
  },
  {
    title: "Step 3",
    content: "리워드 정보",
  },
];

const Register = () => {
  // Steps
  const [currentStep, setCurrentStep] = useState(0);
  const [fields, setFields] = useState({
    user: "",
    nickname: "",
    education_univ: "",
    education_major: "",
    education_level: "",
    education_status: "",
    current_company: "",
    logo: "",
    current_job: "",
    applied_job: "",
    work_start_year: number,
    work_start_month: number,
    PR: "",
    intro: "",
    voter: [],
    card_user_name: "",
    bank: "",
    account_num: number,
    account_email: "",
    AppliedCompanies: [],
    WorkExperience: [],
    Extracurricular: [],
  });

  return (
    <div className="register">
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        <RegisterForm
          currentStep={currentStep}
          steps={steps}
          fields={fields}
          setFields={setFields}
          setStep={setCurrentStep}
        />
      </div>
    </div>
  );
};

export default Register;
