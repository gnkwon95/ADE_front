import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { withFirebase } from '../firebase';
import AuthUserContext from './Context'
import { message } from 'antd'
 
/***************************************************************************

  < 접근 권한 제어하는 법 >
 
  1. import { withAuthorization } from '...session'
  2. 페이지 하단에 접근을 "허용"하는 condition 설정
  3. export withAuthorization(condition)(TheComponent)
  
  < Example Conditions >
  
  - 로그인한 사용자만 접근 가능
    const condition = authUser => authUser != null;
    const condition = authUser => !!authUser;
  
  - (아직 X) 관리자만 접근 가능
    const condition = authUser => authUser && authUser.role === 'ADMIN';
  
  - (아직 X) 허용된 사용자만 접근 가능
    const condition = authUser => authUser.permissions.canEditAccount;

 ***************************************************************************/


const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser)) {
            message.info("잘못된 접근입니다.")
            this.props.history.push('/')
          }
        },
      );
    }
 
    componentWillUnmount() {
      this.listener();
    }
 
    render() {
      return (
        <AuthUserContext.Consumer>
          { authUser => 
              condition(authUser) ? <Component {...this.props} /> : null }
        </AuthUserContext.Consumer>
      );
    }
  }
 
  return withRouter(withFirebase(WithAuthorization));
};
 
export default withAuthorization;