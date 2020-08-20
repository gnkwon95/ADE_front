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

const {TabPane} = Tabs;
const {Content, Sider} = Layout;

axios.defaults.baseURL ='http://15.164.251.155:'
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [],
      booleans:false,
      testing: [{img:"https://pbs.twimg.com/profile_images/788558965718208512/ObqcIBUu.jpg",name:"김정현",company:"현대자동차",position:"마케팅 매니저",reply:"5"},
{img:"https://img.kr.news.samsung.com/kr/wp-content/uploads/2019/10/1017-pr-samsung-thumb.jpg",name:"박정환",company:"삼성전자",position:"엔지니어",reply:"6"},
{img:"https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",name:"김나현",company:"카카오",position:"소프트 엔지니어",reply:"7"},
{img:"https://i.pinimg.com/originals/ec/98/10/ec9810ba62e3d757fa0ac601f906769f.jpg",name:"이정수",company:"LG",position:"마케팅 매니저",reply:"9"},
{img:"https://m.kt.com/images/common/kt_ci.png",name:"오현정",company:"KT",position:"마케팅 매니저",reply:"20"},
{img:"https://lh3.googleusercontent.com/proxy/KM-YuNHPg0JTCC_U1flhQEGTTHX7sAB_uI10q5hwxNd9u_o55pealhyUMzn8giAF5mk00C44bRrknrhBN8hCbX3wm2FoO31sscXBAzDWjz-Jbzy1WNnO9sIJeyKSDv3ENss8Qv4-uuF7eLjMOiixH-1VRb1vL9wOGpSv9gabaZq-COAorR1G84ja0qH86xOVJ5k2hR2PNLdYKr4NAl2X9l7F5BLok-8P6SVKj-ACa26RHDVd_WcDUIU--pZenysCGPMnwle_hXzCzyfzGaxY4OiX1cDdHtyWUGaOJl_75Zta4g",name:"박주환",company:"SK",position:"마케팅 매니저",reply:"10"}]
    }
  }

     getConnections = async() => {
        try{
         const response  = await axios.get(
               'connections/?user=' + this.props.firebase.getCurrentUser().uid
            ).then (
            console.log(this.props.firebase.getCurrentUser().uid),
            console.log(response)
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
        console.log(this.props)
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
                  <span className="tab_name" >{connection.mentee_id} <span className="tab_company">현대자동차</span></span>
                  <span className="position">마케팅 매니저</span>
                  <span className="last_reply">마지막 답장:&nbsp;5분전</span>
                </ProfileInfo>
              </div>} key={i}>
                      <ChatBlock  connection = {connection} is_mentor= {false} />
                    </TabPane>
                }

               </>
              )) }
           {/*this.state.testing.map((el,index)=>{
             return(  <TabPane key={index} tab={<div  onClick={this.changes} className={`tab_box ${this.state.booleans?"gray":""}`}>
             <div className="tab_img_box"><img className="tab_img" src={el.img} /></div>
             <ProfileInfo>
               <span className="tab_name" >{el.name} <span className="tab_company">{el.company}</span></span>
               <span className="position">{el.position}</span>
               <span className="last_reply">마지막 답장:&nbsp;{el.reply}분전</span>
             </ProfileInfo>
           </div>}>             
             {index}
           </TabPane>)
           })*/}
        </Tabs>
           <ChatProfile />
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