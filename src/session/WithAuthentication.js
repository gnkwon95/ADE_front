import React from 'react';
import { withFirebase } from '../firebase';
import AuthUserContext from './Context'
import axios from "axios";
 
const WithAuthentication = Component => {
  class WithAuthentication extends React.Component {

    constructor(props) {
      super(props);
   
      this.state = {
        authUser: null
      };
      this.update = this.update.bind(this);
    }
  
    update = () => {
      axios.get('http://15.164.251.155/mypage/?user='+ this.props.firebase.getCurrentUser().uid)
              .then( (response) => {
                   this.setState({
                      authUser: response.data[0]
                   }
                  // , () => console.log(this.state)
                  )})
               .catch(function(error){
                    console.log(error);
               });
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
        ? this.setState({authUser})
        : this.setState({ authUser: null });
      });
     
    }
  
    componentWillUnmount() {
      this.listener();
    }  

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }
 
  return withFirebase(WithAuthentication);
};
 
export default WithAuthentication;