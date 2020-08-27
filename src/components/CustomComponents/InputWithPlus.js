import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const InputWithPlus = ({ name, label, placeholder }) => {
  return (
    <>
      <Form.List name={name}>
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <Form.Item required={true} key={field.key}>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "필수 필드입니다.",
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder={placeholder} style={{ width: "95%" }} />
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
                  type="link"
                  onClick={() => {
                    add();
                  }}
                  style={{ float: "left", padding: 0 }}
                  htmlType="button"
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
