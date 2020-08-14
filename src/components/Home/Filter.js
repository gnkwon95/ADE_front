import React from "react";
import { Checkbox, Divider, Affix, Select } from 'antd';

const { Option } = Select;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const education = ['학사', '석사 이상'];
const jobs = ['디자이너', '개발자', '마케터', '금융'];

const Filter = () => {

  return (
    <Affix offsetTop={180}>
      <div className="mentorcard-filter">
        <h2><strong>검색 필터</strong></h2>
        <Divider><strong>지역</strong></Divider>
        <Select
          mode="multiple"
          style={{ width: '90%' }}
          placeholder="지역 추가"
          onChange={onChange}
        >
          { jobs.map((data) => (
            <Option key={data}>{data}</Option>
          ))}
        </Select>
        <Divider><strong>직무</strong></Divider>
        <Select
          mode="multiple"
          style={{ width: '90%' }}
          placeholder="직무 추가"
          onChange={onChange}
        >
          { jobs.map((data) => (
            <Option key={data}>{data}</Option>
          ))}
        </Select>
        <Divider><strong>전공</strong></Divider>
        <Select
          mode="multiple"
          style={{ width: '90%' }}
          placeholder="전공 추가"
          onChange={onChange}
        >
          { jobs.map((data) => (
            <Option key={data}>{data}</Option>
          ))}
        </Select>
        <Divider><strong>학력</strong></Divider>
        <Checkbox.Group options={education} onChange={onChange} />
      </div>
    </Affix>
  );
};

export default Filter;
