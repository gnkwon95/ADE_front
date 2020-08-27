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
              <Form.Item
                // validateTrigger={["onChange", "onBlur"]}
                required={true}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "필수 필드입니다.",
                  },
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input placeholder={placeholder} />
              </Form.Item>
              {fields.map((field, index) => (
                <Form.Item required={false} key={field.key + 1}>
                  <Form.Item
                    {...field}
                    // validateTrigger={["onChange", "onBlur"]}
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
                  {fields.length > 0 ? (
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
                  style={{ float: "left" }}
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
