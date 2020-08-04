import React, { Component } from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import { withFirebase } from '../../firebase'

class SignInGoogle extends Component {
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
  
export default withRouter(withFirebase(SignInGoogle));
