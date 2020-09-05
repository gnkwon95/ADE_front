import React from "react";
import { Checkbox, Divider, Affix, Select } from 'antd';

const { Option } = Select;



function onChange(e){
    console.log(e);
}


const education = ['학사', '석사 이상'];
const jobs = ['디자이너', '개발자', '마케터', '금융'];

const Filter = ({setJob, setMajor, setLoc}) => {

const locChange = (e) => {
   if (e){
      setLoc(e);
    }
}

const jobChange = (e) => {
    if(e){
        setJob(e);
    }
}

const majorChange = (e) => {
    if(e){
        setMajor(e);
    }
}


  return (
    <Affix offsetTop={200}>
      <div className="mentorcard-filter">
        <h2><strong>검색 필터</strong></h2>
        <Divider><strong>지역</strong></Divider>
        <Select
          mode="multiple"
          style={{ width: '90%' }}
          placeholder="지역 추가"
          onChange={locChange}
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
          onChange={jobChange}
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
          onChange={majorChange}
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
