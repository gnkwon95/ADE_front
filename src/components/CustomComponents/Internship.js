import React, { useCallback, useState } from "react";
import { SelectYear, SelectMonth } from "../Etc/Selector";
import { Controller } from "react-hook-form";
import { Form, Input } from "antd";
const Internship = ({ control, WorkExperience, setWorkExperience }) => {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: null,
    work_period_from: {
      year: null,
      month: null,
    },
    work_period_to: {
      year: null,
      month: null,
    },
  });
  const onClickPlus = useCallback(() => {
    setWorkExperience((prev) => prev.concat([prev[-1] + 1]));
  }, [setWorkExperience]);

  return (
    <Form.Item labelCol={{ span: 24 }} label="주요 경력 및 인턴 경험">
      {WorkExperience.map((v, index) => (
        <>
          <div style={{ marginTop: 20 }}>
            <h3>회사명:</h3>{" "}
            <Controller
              onChange={(e) => {
                setCompanyInfo((prev) => ({ ...prev, companyName: e.target.value }));
                WorkExperience[index] = companyInfo;
                console.log(companyInfo);
              }}
              as={Input}
              name="internship_company"
              control={control}
              defaultValue=""
              style={{ width: "60%" }}
            />
          </div>
          <h3 style={{ marginRight: 20 }}>기간:</h3>
          <div style={{ display: "flex", alignItems: "center", marginTop: 10, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <SelectYear name="passed_year" control={control} />
                <span style={{ margin: `0 1%` }}>년</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <SelectMonth
                  onChange={(e) => {
                    setCompanyInfo((prev) => ({
                      ...prev,
                      work_period_from: {
                        ...prev.work_period_from,
                        month: e.target.value,
                      },
                    }));
                    console.log("22323");
                  }}
                  name="passed_month"
                  control={control}
                />
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
        </>
      ))}
      <h4 onClick={onClickPlus}>+ 추가하기</h4>
    </Form.Item>
  );
};

export default Internship;
