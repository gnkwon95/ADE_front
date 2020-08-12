import React from "react";
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const PR = ({ control, errors }) => {
  return (
    <>
      <Form.Item labelCol={{ span: 24 }} label="취업준비생들에게 해주고싶은 말">
        <Controller required rows={4} as={Input.TextArea} name="PR" control={control} defaultValue="" />
      </Form.Item>
    </>
  );
};

export default PR;
