import React, { useContext, useEffect, useState } from 'react'
import { Form, Input, Button, Select, Tooltip } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { AuthUserContext } from "../../session";
import './ChangeProfile.css'

const { Option } = Select;
const { TextArea } = Input;

const yearSelect = [];
const monthSelect = [];
const bankSelect = [];

const banks = [ 
    'KB국민', '카카오뱅크', '농협', '신한', 'IBK기업', 
    '하나은행', '우리', '국민', 'SC제일', '대구', 
    '부산', '광주', '새마을', '경남', '전북', 
    '제주', '산업', '우체국', '신협', '수협', 
    '씨티', '케이뱅크', '도이치', 'BOA', 'BNP', 
    '중국공상', 'HSBC', 'JP모간', '산림조합', '저축은행' 
];
for (let i = 2020; i >= 1990; i--) {
    yearSelect.push(<Option key={i}>{i}</Option>);
}
for (let i = 1; i <= 12; i++) {
    monthSelect.push(<Option key={i}>{i}</Option>);
}
for (let i = 0; i < 25; i++) {
    bankSelect.push(<Option key={i}>{banks[i]}</Option>);
}

const config = {
    rules: [{ required: true, message: '내용을 입력해주세요' }]
}

function ChangeProfile() {
    const context = useContext(AuthUserContext)

    useEffect(() => {
        UserLog(context)
    }, [context])

    const UserLog = authUser => {
        console.log("user: ", authUser)
    }

    function checkNickname = (e) => {
        console.log(e.target);
    }

    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    

    return (
        <div style={{ padding:"100px 12%" }}>
            <h1 style={{ fontWeight:"bold" }}>프로필 수정</h1>
            <br />
            <br />
            {context ?
            <Form layout="horizontal" onFinish={onFinish} autoComplete="off">
                <h3><strong>닉네임</strong></h3>
                <Form.Item>
                    <Input defaultValue="최개미" style={{ width:"300px" }} />
                    &nbsp; &nbsp;
                    <Button
                        type="primary"
                        shape="round"
                        onClick={checkNickname}
                    >
                        중복체크
                    </Button>
                </Form.Item>
                
                <h3><strong>소속 회사 및 입사 시기</strong></h3>                
                <Form.Item style={{ marginBottom:0 }}>
                    <span style={{ lineHeight:"30px" }}>회사명: </span>
                    <Form.Item name="current_company" style={{ display: 'inline-block', width: 'calc(20% - 8px)' }} >
                        <Input defaultValue="현대자동차" />
                    </Form.Item>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={{ lineHeight:"30px" }}>입사시기: </span>
                    <Form.Item name="work_start_year" style={{ display: 'inline-block' }} >
                        <Select defaultValue="2015" style={{ width: 80 }} >
                            {yearSelect}
                        </Select>
                    </Form.Item>
                    <span style={{ lineHeight:"30px" }}> 년 </span> &nbsp;
                    <Form.Item name="work_start_month" style={{ display: 'inline-block' }} >
                        <Select defaultValue="1" style={{ width: 60 }} >
                            {monthSelect}
                        </Select>
                    </Form.Item>
                    <span style={{ lineHeight:"30px" }}> 월 </span>
                </Form.Item>

                <h3><strong>지원 포지션</strong></h3>                
                <Form.Item name="applied_job">
                    <Input defaultValue="마케팅 매니저" style={{ width:"300px" }} />
                </Form.Item>
                
                <h3><strong>현재 포지션</strong></h3>                
                <Form.Item name="current_job">
                    <Input defaultValue="마케팅 매니저" style={{ width:"300px" }} />
                </Form.Item>
                
                <h3><strong>학력</strong></h3>                
                <Form.Item style={{ marginBottom:0 }}>
                    <span style={{ lineHeight:"30px" }}>대학: </span>
                    <Form.Item name="education_univ" style={{ display: 'inline-block', width: 'calc(20% - 8px)' }} >
                        <Input defaultValue="서울대학교" />
                    </Form.Item>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={{ lineHeight:"30px" }}>전공: </span>
                    <Form.Item name="education_major" style={{ display: 'inline-block', width: '120px' }} >
                        <Input defaultValue="경영학" />
                    </Form.Item>
                    &nbsp; &nbsp;
                    <Form.Item name="education_level" style={{ display: 'inline-block' }} >
                        <Select defaultValue="학사" style={{ width: 80 }} >
                            <Option key="학사">학사</Option>
                            <Option key="석사">석사</Option>
                            <Option key="박사">박사</Option>
                        </Select>
                    </Form.Item>
                    &nbsp; &nbsp;
                    <Form.Item name="education_status" style={{ display: 'inline-block' }} >
                        <Select defaultValue="졸업" style={{ width: 80 }} >
                            <Option key="졸업">졸업</Option>
                            <Option key="재학">재학</Option>
                            <Option key="휴학">휴학</Option>
                            <Option key="중퇴">중퇴</Option>
                        </Select>
                    </Form.Item>
                </Form.Item>

                <h3><strong>면접 응시 회사</strong></h3>
                <Form.List name="appliedcompanies">
                    {(fields, { add, remove }) => {
                    return (
                        <div>
                        {fields.map((field, index) => (
                            <Form.Item
                            required={false}
                            key={field.key}
                            style={{ margin:'5px 0px' }}
                            >
                                <Form.Item {...field} {...config} noStyle>
                                    <Input style={{ width: '300px' }} />
                                </Form.Item>
                                <MinusCircleOutlined
                                    style={{ margin: '0 8px', color:"#FF0000" }}
                                    onClick={() => { remove(field.name); }}
                                />
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button type="link" onClick={() => { add(); }} >
                                <PlusOutlined /> 추가하기
                            </Button>
                        </Form.Item>
                        </div>
                    );
                    }}
                </Form.List>

                <br />
                <h1 style={{ fontWeight:"bold" }}>합격 당시 스펙</h1>
                <h3><strong>주요 경력 및 인턴 경험</strong></h3>                
                <Form.List name="workexperience">
                    {(fields, { add, remove }) => {
                    return (
                        <div>
                        {fields.map((field, index) => (
                            <Form.Item
                            required={false}
                            key={field.key}
                            style={{ margin:'5px 0px' }}
                            >
                                <span style={{ lineHeight:"30px" }}>회사명: </span>
                                <Form.Item
                                    {...field}
                                    {...config}
                                    name={[field.name, 'company']}
                                    fieldKey={[field.fieldKey, 'company']}
                                    style={{ display: 'inline-block', width: 'calc(20% - 8px)', marginBottom:0 }}
                                >
                                    <Input />
                                </Form.Item>

                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <span style={{ lineHeight:"30px" }}>기간: </span>
                                <Form.Item
                                    name={[field.name, 'work_from_year']}
                                    fieldKey={[field.fieldKey, 'work_from_year']}
                                    style={{ display: 'inline-block', marginBottom:0 }}
                                >
                                    <Select defaultValue="1990" style={{ width: 80 }} >
                                        {yearSelect}
                                    </Select>
                                </Form.Item>
                                <span style={{ lineHeight:"30px" }}> 년 </span> &nbsp;
                                <Form.Item
                                    name={[field.name, 'work_from_month']}
                                    fieldKey={[field.fieldKey, 'work_from_month']}
                                    style={{ display: 'inline-block', marginBottom:0 }}
                                >
                                    <Select defaultValue="5" style={{ width: 60 }} >
                                        {monthSelect}
                                    </Select>
                                </Form.Item>
                                <span style={{ lineHeight:"30px" }}> 월 ~ </span>
                                <Form.Item
                                    name={[field.name, 'work_to_year']}
                                    fieldKey={[field.fieldKey, 'work_to_year']}
                                    style={{ display: 'inline-block', marginBottom:0 }}
                                >
                                    <Select defaultValue="1995" style={{ width: 80 }} >
                                        {yearSelect}
                                    </Select>
                                </Form.Item>
                                <span style={{ lineHeight:"30px" }}> 년 </span> &nbsp;
                                <Form.Item
                                    name={[field.name, 'work_to_month']}
                                    fieldKey={[field.fieldKey, 'work_to_month']}
                                    style={{ display: 'inline-block', marginBottom:0 }}
                                >
                                    <Select defaultValue="8" style={{ width: 60 }} >
                                        {monthSelect}
                                    </Select>
                                </Form.Item>
                                <span style={{ lineHeight:"30px" }}> 월</span>
                                <MinusCircleOutlined
                                    style={{ margin: '0 8px', color:"#FF0000" }}
                                    onClick={() => { remove(field.name); }}
                                />
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button type="link" onClick={() => { add(); }} >
                                <PlusOutlined /> 추가하기
                            </Button>
                        </Form.Item>
                        </div>
                    );
                    }}
                </Form.List>
                
                <h3><strong>보유 자격증 및 어학 점수</strong></h3>
                <Form.List name="certificates">
                    {(fields, { add, remove }) => {
                    return (
                        <div>
                        {fields.map((field, index) => (
                            <Form.Item
                            required={false}
                            key={field.key}
                            style={{ margin:'5px 0px' }}
                            >
                                <Form.Item {...field} {...config} noStyle>
                                    <Input style={{ width: '300px' }} />
                                </Form.Item>
                                <MinusCircleOutlined
                                    style={{ margin: '0 8px', color:"#FF0000" }}
                                    onClick={() => { remove(field.name); }}
                                />
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button type="link" onClick={() => { add(); }} >
                                <PlusOutlined /> 추가하기
                            </Button>
                        </Form.Item>
                        </div>
                    );
                    }}
                </Form.List>
                <h3><strong>대외활동</strong></h3>
                <Form.List name="extracurricular">
                    {(fields, { add, remove }) => {
                    return (
                        <div>
                        {fields.map((field, index) => (
                            <Form.Item
                            required={false}
                            key={field.key}
                            style={{ margin:'5px 0px' }}
                            >
                                <Form.Item {...field} {...config} noStyle>
                                    <Input style={{ width: '300px' }} />
                                </Form.Item>
                                <MinusCircleOutlined
                                    style={{ margin: '0 8px', color:"#FF0000" }}
                                    onClick={() => { remove(field.name); }}
                                />
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button type="link" onClick={() => { add(); }} >
                                <PlusOutlined /> 추가하기
                            </Button>
                        </Form.Item>
                        </div>
                    );
                    }}
                </Form.List>
                <h3><strong>한 마디 소개</strong></h3>                
                <Form.Item name="intro">
                    <h4>* 본 항목은 메인페이지의 멘토님 카드에 노출되는 한 마디로, 클릭을 유도할 수 있도록 짧지만 강렬하게 작성하실 수록 좋습니다.</h4>
                    <Input/>
                </Form.Item>
                <h3><strong>드리는 말</strong></h3>                
                <Form.Item name="intro">
                    <h4>* 본 항목은 멘토님의 상담 유치를 위한 멘트로, 소개 페이지 최상단에 위치하게 됩니다. 최소 100자 이상 작성을 권장드립니다.</h4>
                    <TextArea rows={4} />
                </Form.Item>

                <br />
                <h1 style={{ fontWeight:"bold" }}>리워드 정보</h1>
                <h3><strong>입금 받을 계좌</strong></h3>
                <Form.Item style={{ marginBottom:0 }}>
                    <span style={{ lineHeight:"30px" }}>은행: </span>
                    <Form.Item name="bank" style={{ display: 'inline-block' }} >
                        <Select  style={{ width: 120 }} >
                        {/* {banks.map(item => (
                            <Option key={item} value={item}>
                                {item}
                            </Option>
                        ))} */}
                        {bankSelect}
                        </Select>
                    </Form.Item>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={{ lineHeight:"30px" }}>계좌번호: </span>
                    <Form.Item name="account_num" style={{ display: 'inline-block' }} >
                        <Tooltip title="본인 명의의 계좌를 입력해주세요." >
                            <Input style={{ width:"250px" }} />
                        </Tooltip>
                    </Form.Item>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span style={{ lineHeight:"30px" }}>예금주: {context.user_id}</span>
                </Form.Item>
                                
                <h3><strong>이메일 주소</strong></h3>
                <Form.Item name="account_email" style={{ display: 'inline-block' }} >
                    <h4>* 연락받으실 이메일 주소를 적어주세요. 기입해주신 주소로 확인 메일이 발송되오며, 미기입 시 인증해주신 회사 메일로 자동 입력됩니다.</h4>
                    <Input htmlType='email' style={{ width:"300px" }} />
                </Form.Item>
                <br />
                <br />
                <Form.Item>
                    <Button
                        htmlType="submit"
                        type="primary"
                        shape="round" 
                        size="large"
                        // href="/mentor"
                        style={{ color:"black", lineHeight:"25px", fontSize:"20px", width:'180px' }}
                    >
                        저장하기
                    </Button>
                </Form.Item>
            </Form>
            : null }
        </div>
    )
}

export default ChangeProfile
