import React from "react";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from '../../firebase'

const SignInEmail = (props) => {
    const onFinish = values => {
        const email = values.email
        const password = values.password
        
        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
            props.history.push('/');
            })
            .catch(error => {
            switch(error.code) {
                case 'auth/wrong-password':
                message.info(`가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.`);
                break;
                case 'auth/user-not-found':
                message.info(`가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.`);
                break;
                case 'auth/too-many-request':
                message.info(`잠시 후 다시 시도해주세요`);
                break;
                default:
                console.log(error)
            }
            form.resetFields()
            });
        };


    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
            name="email"
            rules={[
                {
                type: "email",
                message: "올바른 이메일 형식이 아닙니다!",
                },
                {
                required: true,
                message: "이메일 주소를 입력하세요!",
                },
            ]}
            >
            <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="이메일"
                size="large"
            />
            </Form.Item>
            <Form.Item
            name="password"
            rules={[
                {
                required: true,
                message: "비밀번호를 입력하세요!",
                },
            ]}
            >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="비밀번호"
                size="large"
            />
            </Form.Item>
            <Form.Item>
            <Link to="/forgotpw" className="signin-option">
                비밀번호를 잊으셨나요?
            </Link>
            </Form.Item>

            <Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
            >
                로그인
            </Button>
            </Form.Item>
        </Form>
    )
}

export default withRouter(withFirebase(SignInEmail));