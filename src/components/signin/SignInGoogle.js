import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import { withFirebase } from '../../firebase'
import { GoogleOutlined } from '@ant-design/icons'

const SignInGoogle = props => {
  
  const onSubmit = event => {
    console.log(event)
    props.firebase
      .doSignInWithGoogle()
      // .then(socialAuthUser => {
      //   // Create a user in your Firebase Realtime Database too
      //   return props.firebase.user(socialAuthUser.user.uid).set({
      //     username: socialAuthUser.user.displayName,
      //     email: socialAuthUser.user.email,
      //     roles: {},
      //   });
      // })
      .then(() => {
        props.history.push('/');
      })
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          error.message = '해당 이메일로 가입된 계정이 이미 있습니다.';
        }
      });

    event.preventDefault();
  };


  return (
    <form onSubmit={onSubmit}>
      <Button
        htmlType="submit"
        className="social-login-button"
        size="large"
        icon={<GoogleOutlined />}
      >구글 아이디로 {props.purpose}하기</Button>
    </form>
  );
}
  
export default withRouter(withFirebase(SignInGoogle));
