import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import { withFirebase } from '../../firebase'
import { FacebookFilled } from '@ant-design/icons';
import axios from "axios"

const SignInFacebook = props => {

  const onSubmit = event => {
    props.firebase
      .doSignInWithFacebook()
      .then(()=> {
        console.log("facebook login")
      })
      .then(() => {
        props.history.push('/');
      })
      .then(()=>{
        console.log(props.firebase.getCurrentUser().uid, props.firebase.getCurrentUser().email)
      })
      .then(() => {
        axios.get("mypage/?user="+props.firebase.getCurrentUser().uid)
        .then(function(response){
            (response.data.length == 0 ) // if there is no existing user
            ? (axios // create new user on db
                  .post("mypage/", {
                    user_uid: props.firebase.getCurrentUser().uid,
                    email: props.firebase.getCurrentUser().email,
                    user_id: "dummy",
                    credit: 0,
                    credit_used: 0,
                  },
                  {
                    headers: {
                        Authorization: 'Bearer ' + props.firebase.getCurrentUser().uid
                    }
                  })
                     .then(function (response) {
                        console.log(response);
                      })
                  .catch((error) => {
                    console.log("django error");
                    console.log(error);
                  })
          )
          : console.log("existing user") // log existing user. Can change to printing error - existing user logged in.
        })
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
      <Button htmlType="submit" className="social-login-button" size="large" icon={<FacebookFilled />}>페이스북으로 {props.purpose}하기</Button>
    </form>
  );

}

export default withRouter(withFirebase(SignInFacebook));
