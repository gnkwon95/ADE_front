import React, { useState } from "react";
import { Steps } from "antd";
import RegisterForm from "../components/Register/RegisterForm";
import "./Register.css";
import { number } from "prop-types";
import { withAuthorization, AuthUserContext } from "../session";
import useStateWithCallback from "use-state-with-callback";

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

const Register = (props) => {
  const formTemplate = {
    user: "",
    nickname: "",
    education_univ: "",
    education_major: "",
    education_level: "학사",
    education_status: "수료",
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
    AppliedCompanies: [""],
    WorkExperience: [""],
    Extracurricular: [""],
    Certificate: [""],
  };
  // Steps
  const [currentStep, setCurrentStep] = useStateWithCallback(0, (currentStep) =>
    console.log("curret step: ", currentStep)
  );
  const [fields, setFields] = useStateWithCallback(formTemplate, (fields) => {
    console.log(fields);
  });

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
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
              formTemplate={formTemplate}
              authUser={authUser}
            />
          </div>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => authUser != null;

export default withAuthorization(condition)(Register);
