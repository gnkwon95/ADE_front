import React from "react";
import "./Chat.css";
//import { withAuthentication } from "../session/withAuthentication";
import {withAuthorization, AuthUserContext, withAuthentication } from "../session";
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import ChatBlock from "../components/chat/chatBlock";
import axios from "axios";

import {Layout, Menu} from 'antd';
import { Tabs, Typography, Radio } from "antd";

const {TabPane} = Tabs;

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [ ]
    };
  }

     getConnections = async() => {
        try{
         const response  = await axios.get(
               'connections/?user=' + this.props.firebase.getCurrentUser().uid
            ).then (
            console.log(this.props.firebase.getCurrentUser().uid)
            );
            this.setState({
                connections: response.data,
            });
        } catch(e){
            console.log(e);
        }
/*
        try{
            const response = await axios.get(
                'mypage/?user=' + this.props.firebase.getCurrentUser().uid
            );
            this.setState({
                user: response.data
            });
            } catch(e){
                console.log(e);
            } */
    };

    resetState = () => {
        this.getConnections();
    }

    componentDidMount(){
        this.resetState();
    };


  render() {
    return (
      <div>
        <h5> Chat </h5>
        <Tabs defaultActiveKey="10" tabPosition='left' style={{ height: 500 }}>

             { this.state.connections.map( (connection, i) => (
             <>
                {connection.mentor_uid == this.props.firebase.getCurrentUser().uid
                ? <TabPane tab={`${connection.mentee_id}`} key={i}>
                      <ChatBlock connection = {connection} is_mentor = {true} />
                    </TabPane>
                : <TabPane tab={`${connection.mentor_id}`} key={i}>
                      <ChatBlock connection = {connection} is_mentor= {false} />
                    </TabPane>
                }

               </>
              )) }
        </Tabs>

      </div>
    );
  }
}


const condition = authUser => authUser != null;

export default withAuthorization(condition)(Chat);