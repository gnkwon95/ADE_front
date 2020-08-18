import React from "react";
import "./Chat.css";
//import { withAuthentication } from "../session/withAuthentication";
import {withAuthorization, AuthUserContext, withAuthentication } from "../session";
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import ChatBlock from "../components/chat/chatBlock";
import axios from "axios";
import styled from "styled-components";
import {Layout, Menu} from 'antd';
import { Tabs, Typography, Radio } from "antd";

const {TabPane} = Tabs;
const {Content, Sider} = Layout;
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [ ],
      booleans:false
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

    };

    resetState = () => {
        this.getConnections();
    }

    componentDidMount(){
        this.resetState();
        console.log(this.state.connections,"커넥션")
    };
    changes =()=>{
     this.setState({
       booleans:true
     })
     console.log("작동되고 있어요")
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
                {connection.mentor_uid == this.props.firebase.getCurrentUser().uid
                ? 
                   <TabPane  tab={`${connection.mentee_id}`} key={i}>
                      <ChatBlock connection = {connection} is_mentor = {true} />
                    </TabPane>
                : <TabPane  tab={`${connection.mentor_id}`} key={i}>
                      <ChatBlock  connection = {connection} is_mentor= {false} />
                    </TabPane>
                }

               </>
              )) }
              <TabPane key="14" tab={<div  onClick={this.changes} className={`tab_box ${this.state.booleans?"gray":""}`}>
                <div className="tab_img_box"><img className="tab_img" src="https://pbs.twimg.com/profile_images/788558965718208512/ObqcIBUu.jpg" /></div>
                <ProfileInfo>
                  <span className="tab_name" >아무개 <span className="tab_company">현대자동차</span></span>
                  <span className="position">마케팅 매니저</span>
                  <span className="last_reply">마지막 답장:&nbsp;5분전</span>
                </ProfileInfo>
              </div>}>YOLO</TabPane>
              <TabPane tab="tab4" key="15">
                   hi
              </TabPane>  
        </Tabs>
    
             
     <MentoProfile>
       <MPTOP>
         <span className="name">아무개</span>
         <span className="company">현대자동차</span>
         <span className="career">1년차</span>
         </MPTOP>
         <MPBOT>
           <Pbold>지원 직무</Pbold>
           <p>마케팅 매니저</p>
           <Pbold>현재 직무</Pbold>
           <p>동일</p>
           <Pbold>학력</Pbold>
           <p>서울대학교 컴퓨터공학과 전공</p>
           <Pbold>합격한 회사</Pbold>
           <ul className="ul_tag">
             <li>SKTelecom 데이터 분석 직군</li>
             <li>스파크랩벤쳐스 심사역</li>
             <li>쏘카 데이터 분석 직군</li>
           </ul>
           <Pbold>주요 경력 및 인턴 경험</Pbold>
           <ul className="ul_tag">
             <li>쏘카 퍼포먼스 마케팅팀 인턴 (2019.07~2019.09)</li>
           
           </ul>
           <Pbold>합격 당시 스펙</Pbold>
           <ul className="ul_tag">
             <li>TOEIC 900점</li>
             <li>HSK 6급</li>
             <li>정보처리 기능사 자격증</li>
             <li>SK Sunny 대학생 자원봉사단</li>
           </ul>
         </MPBOT>
     </MentoProfile>
      </div>
      </div>
    );
  }
}
const MentoProfile= styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
  display:block;
  width: 22%;
  font-family: "Roboto", sans-serif;
  border: 1px solid black;
  overflow-y:auto;
 
`;
const MPTOP = styled.div`
 
  display: flex;
  align-items: center;
  flex-direction: column;
  width:100%;
  font-style: normal;
  .name{
   font-weight: bold;
   font-size: 23px;
   line-height: 32px;
   color: #000000;
  }
  .company{
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);  
    font-weight: bold;
    margin-top:10px;
  }
  .career{
    display:flex;
    align-items: center;
    justify-content:center;
    padding-top:2px;
    width:70px;
    height: 25px;
    font-size:15px;
    font-weight:900;
    background-color:#262f47;
    border-radius: 60px;
    color:white;
    margin-top:5px;
  }
`;
const MPBOT =styled.div`
  display: block;
  width:80%;
  font-style: normal;
  margin:40px 40px 0 40px;
  
  ul { margin: 0;  padding: 0; }
  .ul_tag{
    padding-left:20px;
    margin-bottom:10px;
    font-size:13px;
  }
  p{
    font-size:13px;
  }
`;
const Pbold = styled.p`
  font-weight:bold;
  font-size:15px;
  color:black;
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