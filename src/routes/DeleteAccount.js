import React, {useState} from "react";
import { Card, Form, Button, Input, Select, message } from "antd";
import { withAuthorization } from '../session'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
  
const { Option } = Select;
const optionData = [
    '더 이상 필요가 없어서',
    '타사 서비스를 사용하기 위해서',
    '사용이 불편해서',
    '비싼 요금',
    '원하는 기능이 없음',
    '기타',
]

const ERROR_MSG_VALUE_NEEDED = '필수 항목입니다.'

const DeleteAccount = (props) => {
    const authProvider = props.firebase.getCurrentUser().providerData[0].providerId
    const userValue = authProvider === "password" ? "비밀번호를" : "이메일을";
    console.log(props.firebase.getCurrentUser())

    const onFinish = values => {
        const option = values.option

        if(authProvider === 'password'){
            props.firebase
                .doDeleteUserEmail(values.password)
                // .then(() => {
                //     // 탈퇴 사유 저장
                // })
                .then(() => {
                    message.info("탈퇴 처리 완료 ㅠㅠ")
                    props.history.push("/");
                })
                .catch((error) => {
                    alert(error)
                    console.log(error);
                });
        } else {
            if(values.email != props.firebase.getCurrentUser().email){
                message.info(`이메일 주소가 일치하지 않습니다.`)
                return;
            }
            // *** Auth Provider로 가입한 경우의 탈퇴 처리 ***
            // props.firebase
            //     .doDeleteUserOAuth()
            //     .then(() => {
            //         // 탈퇴 사유 저장
            //     })
            //     .then(() => {
            //         message.info("탈퇴 처리 완료 ㅠㅠ")
            //         props.history.push("/");
            //     })
            //     .catch((error) => {
            //         alert(error)
            //         console.log(error);
            //     });
        }
    };

    return(
        <Card title={false} bordered={false} className="delete-account-card">
            <p className="delete-account-texts">
                계정을 영구 삭제하시겠어요?
                <br /><br />탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 영구 삭제되며 복구가 불가합니다.
                <br />확인을 위해 {userValue} 적어주세요.
            </p>
            <br />
            <Form {...layout} name="control-hooks" onFinish={onFinish}>
                { authProvider === "password" ?
                <Form.Item name="password" label="비밀번호" rules={[{ required: true, message: ERROR_MSG_VALUE_NEEDED }]} >
                    <Input type="password" />
                </Form.Item>
                :
                <Form.Item name="email" label="이메일" rules={[{ required: true, message: ERROR_MSG_VALUE_NEEDED }]} >
                    <Input type="email" />
                </Form.Item>}
                <Form.Item name="option" label="해지 이유" rules={[{ required: true, message: ERROR_MSG_VALUE_NEEDED }]}>
                    <Select defaultValue='옵션 선택'>
                        {optionData.map(option => (
                            <Option key={option}>{option}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item name="delete-detail" label="상세 사유 (선택)" >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item {...tailLayout} >
                    <Button htmlType="submit">
                    계정 탈퇴
                    </Button>
                    <Button type="primary" style={{ margin: '0 8px' }} href="/mypage" >
                    취소
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

const condition = (authUser) => authUser != null;

export default withAuthorization(condition)(DeleteAccount);
