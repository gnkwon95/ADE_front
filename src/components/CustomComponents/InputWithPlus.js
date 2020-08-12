import React, { useCallback } from "react";
import { Form, Input } from "antd";

const InputWithPlus = ({ control, items, setItems, label, placeholder }) => {
  const onClickPlus = useCallback(() => {
    setItems((prev) => prev.concat([prev[-1] + 1]));
  }, [setItems]);
  return (
    <>
      <Form.Item labelCol={{ span: 24 }} label={label}>
        {items.map((v, index) => (
          <Input
            key={index}
            onChange={(e) => {
              items[index] = e.target.value;
            }}
            placeholder={placeholder}
            control={control}
            defaultValue=""
          />
        ))}
        <h4 onClick={onClickPlus}>+ 추가하기</h4>
      </Form.Item>
    </>
  );
};

export default InputWithPlus;
