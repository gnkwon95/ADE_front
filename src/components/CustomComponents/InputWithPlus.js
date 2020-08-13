import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined,PlusOutlined } from '@ant-design/icons'

const InputWithPlus = ({ control, name, setItems, label, placeholder }) => {
  return (
    <>
      <Form.List name={name ? name : ""}>
        {(fields, { add, remove}) => {
          return (
            <>
            {fields[0] ? null : <label>{label}</label>}
            {fields.map((field, index) => (
              <Form.Item label={index === 0 ? label : ""} key={field.key}>
                <Input placeholder={placeholder} />
                {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ margin: '0 8px' }}
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
                  style={{ width: '60%' }}
                >
                  <PlusOutlined /> 추가 하기
                </Button>
              </Form.Item>
            </>
          )
        }}
      </Form.List>
    </>
  );
};

export default InputWithPlus;
