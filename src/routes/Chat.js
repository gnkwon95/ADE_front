import React from "react";
import "./Chat.css";
//import { withAuthentication } from "../session/withAuthentication";
import {withAuthorization, AuthUserContext, withAuthentication } from "../session";
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import ChatBlock from "../components/chat/chatBlock";
import ChatProfile from "../components/chat/chatProfile";
import axios from "axios";
import styled from "styled-components";
import {Layout, Menu} from 'antd';
import { Tabs, Typography, Radio } from "antd";
import {Log} from "../Log/Log"

const {TabPane} = Tabs;

axios.defaults.baseURL ='http://15.164.251.155:'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [],

      booleans:false

    }
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

    };

    resetState = () => {
        this.getConnections();
    }

    componentDidMount(){
        this.resetState();
        
        
      
    };
    changes =()=>{
     this.setState({
       booleans:true
     })
   
    }
   


  render() {
   
    return (
      <div className="frame" style={{display:'block'}}>
        <div>

        </div>
      <div className="chat_profile_block">
    
        <Tabs defaultActiveKey="10" tabPosition='left' style={{width:'78%'}}>

        { this.state.connections.map( (connection, i) => (
             <>
                {connection.mentor_uid === this.props.firebase.getCurrentUser().uid
                ? 
                   <TabPane  tab={<div  onClick={this.changes} className={`tab_box ${this.state.booleans?"gray":""}`}>
                   <div className="tab_img_box"><img className="tab_img" src="https://pbs.twimg.com/profile_images/788558965718208512/ObqcIBUu.jpg" /></div>
                   <ProfileInfo>
                     <span className="tab_name" >{connection.mentee_id} <span className="tab_company">현대자동차</span></span>
                     <span className="position">마케팅 매니저</span>
                     <span className="last_reply">마지막 답장:&nbsp;5분전</span>
                   </ProfileInfo>
                 </div>} key={i}>
                      <ChatBlock connection = {connection} is_mentor = {true} />
                    </TabPane>
                : <TabPane  tab={<div  onClick={this.changes} className={`tab_box ${this.state.booleans?"gray":""}`}>
                <div className="tab_img_box"><img className="tab_img" src="https://pbs.twimg.com/profile_images/788558965718208512/ObqcIBUu.jpg" /></div>
                <ProfileInfo>
                  <span className="tab_name" >{connection.mentor_id} <span className="tab_company">현대자동차</span></span>
                  <span className="position">마케팅 매니저</span>
                  <span className="last_reply">마지막 답장:&nbsp;10분전</span>
                </ProfileInfo>
              </div>} key={i}>
                      <ChatBlock  connection = {connection} is_mentor= {false} />
                    </TabPane>
                }

               </>
              )) }
           
        </Tabs>
           <ChatProfile />
      </div>
      </div>
    );
  }
}
const Child = styled(ChatBlock)`
   .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab,
.ant-tabs-right > .ant-tabs-nav .ant-tabs-tab,
.ant-tabs-left > div > .ant-tabs-nav .ant-tabs-tab,
.ant-tabs-right > div > .ant-tabs-nav .ant-tabs-tab 
   {
    padding: 2px 24px;
    margin-bottom:0px;  
  }
   
   
`;

const ProfileInfo= styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  padding-left: 10px;
  color:black;
  .tab_company {
  color: rgba(0, 0, 0, 0.6);
}
.tab_name {
  font-weight: bold;
 
}
.position{
  font-size:12px;
}
.last_reply{
  font-size:10px;
}
`;

const condition = authUser => authUser != null;

export default withAuthorization(condition)(Chat);