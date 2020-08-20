import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const InputWithPlus = ({ name, label, placeholder }) => {
  return (
    <>
      <Form.List name={name}>
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields[0] ? null : <label>{label}</label>}
              <br />
              {fields.map((field, index) => (
                <Form.Item label={index === 0 ? label : ""} required={false} key={field.key}>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "이 곳을 채워주시거나 옆 -버튼을 눌러 제거해주세요.",
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder={placeholder} />
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
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  block
                >
                  <PlusOutlined width="100%" /> 추가하기
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </>
  );
};

export default InputWithPlus;
