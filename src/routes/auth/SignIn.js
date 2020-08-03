import React, { Component } from "react";
import { Card, Form, Input, Button, Typography, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import { AuthUserContext } from '../../session'
import { withFirebase } from '../../firebase'
import "./SignIn.css";

const { Title } = Typography;

const SignIn = (props) => (
  <AuthUserContext.Consumer>
    {authUser => authUser ? props.history.push('/')
                            : <SignInPage />
    }
  </AuthUserContext.Consumer>
)

const SignInPage = () => (
  <Card title={false} bordered={false} className="login-card">
    <div className="signin-texts">
      <Title level={2} className="signin-title">
        로그인
      </Title>
    </div>
    <SignInGoogle />
    <SignInFacebook />
    <SignInEmail />
  </Card>
)

const SignInEmailForm = (props) => {
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
          계정이 없으세요?{" "}
          <Link to="/join" className="signin-option">
            회원가입
          </Link>
        </Form.Item>
      </Form>
  )
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    console.log(event)
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push('/');
      })
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          error.message = '해당 이메일로 가입된 계정이 이미 있습니다.';
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Button htmlType="submit" className="login-form-button">구글 아이디로 로그인</Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push('/');
      })
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          error.message = '해당 이메일로 가입된 계정이 이미 있습니다.';
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Button htmlType="submit" className="login-form-button">페이스북 아이디로 로그인</Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInEmail = withRouter(withFirebase(SignInEmailForm));
const SignInGoogle = withRouter(withFirebase(SignInGoogleBase));
const SignInFacebook = withRouter(withFirebase(SignInFacebookBase));

export default SignIn;
