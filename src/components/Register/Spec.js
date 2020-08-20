import React from "react";
import InputWithPlus from "../CustomComponents/InputWithPlus";
import { Form, Space, Input, Button, DatePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const Spec = () => {
  return (
    <div>
      <h1>합격 당시 스펙</h1>
      <InputWithPlus name="Abilites" label="보유 자격증 및 어학 시험 점수" placeholder="ex> 토익 000점" />
      <br />
      <InputWithPlus name="ExtraCurricular" label="대외활동" placeholder="ex) SK Sunny 대학생 자원봉사단, ㅇㅇ 공모전 대상 수상" />
      <br />
      <Form.List name="WorkExperience">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields[0] ? null : <label>주요 경력 및 인턴 경험</label>}
              {fields.map((field, index) => (
                <>
                  {index === 0 ? "주요 경력 및 인턴 경험" : null}
                  <Space key={index} style={{ display: "flex", marginBottom: 8 }} align="start">
                    <Form.Item key={field.key} {...field} name={[field.name, "company_name"]} fieldKey={[field.fieldKey, "first"]} rules={[{ required: true, message: "회사명을 채워넣어주세요!" }]}>
                      <Input placeholder="회사명" style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item key={field.key} {...field} name={[field.name, "worked_to_from"]} fieldKey={[field.fieldKey, "last"]} rules={[{ required: true, message: "근무기간을 알려주세요!" }]}>
                      <RangePicker size="small" picker="month" />
                    </Form.Item>

                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                </>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  block
                >
                  <PlusOutlined /> 추가하기
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
      <InputWithPlus name="prepared_companies" label="함께 준비했던 회사" placeholder="ex) 삼성전자 기술직 (서류합/인적성합/최종 등)" />
    </div>
  );
};

export default Spec;
