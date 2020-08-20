import React from "react";
import { Form, Button, Input } from "antd";
import { DatePicker } from 'antd'
import moment from 'moment';
import { MinusCircleOutlined,PlusOutlined } from '@ant-design/icons'

const monthFormat = 'YYYY/MM';

const { RangePicker} = DatePicker

const Internship = ({ name,label,placeholder }) => {
  return (
    <>
    <Form.List name={name ? name : ""}>
      {(fields, { add, remove }) => {
        return (
          <>
          {fields[0] ? null : <label>{label}</label>}
          {fields.map((field , index) => (
          <div key={field.key}>
            <Form.Item labelCol={{ span: 24 }} label={index === 0 ? label : ""} key={field.key}>
            <Input placeholder={placeholder ? placeholder : "회사명"} /> 
            <br />
              <RangePicker
              defaultValue={[moment('2015/01', monthFormat), moment('2015/01', monthFormat)]}
              format={monthFormat}
            />
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
         </div>
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

export default Internship;
