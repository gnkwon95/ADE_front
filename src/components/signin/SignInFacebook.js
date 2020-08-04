import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import { withFirebase } from '../../firebase'

const SignInFacebook = props => {

  const onSubmit = event => {
    props.firebase
      .doSignInWithFacebook()
      // .then(socialAuthUser => {
      //   // Create a user in your Firebase Realtime Database too
      //   return props.firebase.user(socialAuthUser.user.uid).set({
      //     username: socialAuthUser.additionalUserInfo.profile.name,
      //     email: socialAuthUser.additionalUserInfo.profile.email,
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
      <Button htmlType="submit" className="social-login-button">페이스북 아이디로 로그인하기</Button>
    </form>
  );

}

export default withRouter(withFirebase(SignInFacebook));
