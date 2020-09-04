import React from "react";
//import { withAuthentication } from "../session/withAuthentication";
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import styled,{css} from "styled-components";
import axios from "axios";
import {withAuthorization, AuthUserContext, withAuthentication } from "../../session";
import {Card, Col, Row, Button, Layout} from 'antd';


//import ChatLayout from "./ChatBox";
//import makeStyles from "@material-ui/core/styles/makeStyles";
const {Content, Sider} = Layout;
const pattern = /^\s+|\s+$/g;
const date = new Date();
const year = date.getFullYear();
const month= (date.getMonth()+1)<10?"0"+(date.getMonth()+1):date.getMonth()+1;
const day = date.getDay()<10?"0"+date.getDay():date.getDay();
const today = year+"-"+month+"-"+day
/*
const ChatLayout = makeStyles(theme => ({
  container: {
    bottom: 0
    // position: "fixed" // remove this so we can apply flex design
  },
  bubbleContainer: {
    width: "100%",
    display: "flex" //new added flex so we can put div at left and right side
    //check style.css for left and right classnaeme based on your data
  },
  bubble: {
    border: "0.5px solid black",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    display: "inline-block"
  }
}));*/

/*
.chatbox {
    padding: 8px 8px 0 8px;
    background: rgb(190, 200, 200);
}*/

class ChatBlock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mentor: this.props.connection.mentor_uid,
            mentee: this.props.connection.mentee_uid,
            mentor_id: this.props.connection.mentor_id,
            meeting_date:this.props.connection.meeting_date,
            mentee_id: this.props.connection.mentee_id,
            user: this.props.firebase.getCurrentUser(),
            chats: [],
            content: '',
            readError: null,
            writeError: null,

            is_mentor: this.props.is_mentor,

            prev_uid: "",
            repeat: []

        }
         this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        this.setState({ readError: null});
        console.log(this.state.meeting_date)
        console.log(today)
        console.log(this.props)
        try{
              this.props.firebase.getDB().ref("chats").child(this.state.mentor).child(this.state.mentee).on("value", snapshot => {
                let chats = [];
                let repeat = [];
                let prev_uid = "";
                snapshot.forEach((snap) => {

             chats.push(snap.val());
                        snap.val().uid == prev_uid
                        ? repeat.push(true)
                        : repeat.push(false)
                        prev_uid = snap.val().uid
                    }
                );
                this.setState({chats});
                this.setState({repeat});
                this.scrollBottom();
               

             });
         } catch (error) {
            this.setState({readError: error.message});
         }
    }


    handleChange(event){ // get value from input field, set state variable
       
        this.setState({
            content: event.target.value
        })
    }
   
    async handleSubmit(event){ //reference to chat, and push with unique key. If error, there is error.
        console.log(event);
        event.preventDefault();
        
        this.setState({writeError: null});
        try{
            console.log(this.state.mentor);
            console.log(this.state.mentee);
            await this.props.firebase.getDB().ref("chats").child(this.state.mentor).child(this.state.mentee).push({
                content: this.state.content,
                timestamp: Date.now(),
                uid: this.state.user.uid
            });
            this.setState({ content: ''});
            this.messageEnd.scrollIntoView(false);
        } catch(error) {
            this.setState({ writeError: error.message});
        }
    }

    scrollBottom=()=>{
        this.messageEnd.scrollIntoView(false);
       
     }
     


ChatBox = ({pos, left_id, right_id, content, repeat}) => {
     
    return (
    <>
        <div style={{display:"flex",padding:"0px 0 0px 0"}}>
            {/* pos==='left'
            ? <h5 style={{float:pos}}> {left_id} </h5>
            : <h5 style={{float:pos}}> {right_id} </h5>
             */}
             {pos==="left"

            ?repeat===false?<ChatUser><img style={{width:40 ,height:40,borderRadius:"50%",border:"1px solid gray",marginTop:"5px"}} src="https://pbs.twimg.com/profile_images/788558965718208512/ObqcIBUu.jpg" /> <h5> {left_id} </h5></ChatUser>:<ChatUser></ChatUser>
            :repeat===false? <ChatUser><img style={{width:40 ,height:40,borderRadius:"50%",marginTop:"5px" }} src="https://lh3.googleusercontent.com/proxy/svNjgUbcdKgVxd-GarllzhHGf_Zdf-B8E1T2pzboU1WJ5_-YWwtluzQ8i2a9kb37TKG1bkQN1WJUyzD7q_VWGEhj8rvRTYidFB0xrYg39wln5oxO5f3VcdzMDPn-mgYTJrOLIsyH2QXB-X78_VCeo6qdqqoKjTA9oFbgAhMB1Rs" /> <h5> {right_id} </h5></ChatUser>:<ChatUser></ChatUser>
            }
            
            {pos === 'left'? <Message><span style={{postion:"relative",background:"#ceeddc",float:pos,padding:"3px 10px 3px 10px",borderRadius:"20px",whiteSpace:"pre-line", wordBreak:"break-all",margin:"5px 0 5px 0"}}> {content} </span></Message>: 
            <Message ><span style={{postion:"relative",  float:pos,padding:"5px 0px 3px 3px",whiteSpace:"pre-line", wordBreak:"break-all",marginBottom:"5px"}}> {content} </span></Message>}
           {/* pos === 'left'? <Button  type="text" shape="round" size="middle" style={{background: "pink",  float:pos,cursor:"default"}}><span style={{width:"100%"}}>{content}</span></Button>: 
            <Button type="text" shape="round" size="middle" style={{background: "orange",  float:pos,cursor:"default"}}> <span style={{width:"100%"}}>{content}</span> </Button> */}
        </div>
        
       </>
    )
}
able = ()=>{
    if(this.state.content.replace(pattern,'')===""||this.state.meeting_date!==today){
      return  (<div className="fixed" style={{position:"sticky",bottom:"0px",zIndex:"100"}}>
        <form onSubmit = {this.handleSubmit} >  {/*form to update message, with button to send */}
            <Layout>
                <div style={{display:"flex",width:"100%"}}>
            <Content>
                <ChatInput type="textarea" className="text" onChange={this.handleChange} value={this.state.content} /> {/*use this.handleChange to change state (is message okay?) */}
                 {this.state.error ? <p>{this.state.writeError}</p> : null}
             </Content>
                 <div style={{width:"10%",height:38,background:"white",borderRadius:"0 100px 100px 0",border:"1px solid gray",borderLeft:"none"}}>
                 <SubBtn type="submit" disabled>전송</SubBtn>
                 </div>
                 </div>
             </Layout>
         </form>
         </div>)
    }else{
      return ( <div className="fixed" style={{position:"sticky",bottom:"0px",zIndex:"100"}}>
        <form onSubmit = {this.handleSubmit} >  {/*form to update message, with button to send */}
            <Layout>
            <div style={{display:"flex", width:"100%"}}>
            <Content>
                <ChatInput type="textarea" className="text" onChange={this.handleChange} value={this.state.content} /> {/*use this.handleChange to change state (is message okay?) */}
                 {this.state.error ? <p>{this.state.writeError}</p> : null}
             </Content>
             <div style={{width:"10%",height:38,background:"white",borderRadius:"0 100px 100px 0",border:"1px solid gray",borderLeft:"none"}}>
                 <SubBtn type="submit">전송</SubBtn>
              </div>
             </div>
            </Layout>
         </form>
         </div>)
    }
}
    render() {

        const left_id = this.state.is_mentor
        ? this.state.mentee_id
        : this.state.mentor_id

        const right_id = this.state.is_mentor
        ? this.state.mentor_id
        : this.state.mentee_id

        
        return (
       
              <div className="chats" ref={el=>{this.messageEnd=el;}}>
               <div style={{}}>
                { this.state.chats.map( (chat,index) => {
                 
                    return <ChatDiv key={chat.timestamp}>
                        { (chat.uid === this.state.user.uid)

                        ? <this.ChatBox  pos="right"  left_id={left_id} right_id={right_id} content= {chat.content} repeat = {this.state.repeat[index]} />
                        : <this.ChatBox  pos='left' left_id={left_id} right_id={right_id} content= {chat.content} repeat = {this.state.repeat[index]} />

                        }
                    </ChatDiv>
                })}
        </div>
        {this.able()}
                </div>
             
        );
    }
}

const ChatDiv = styled.div`
   display:inline-block;
   width:100%;
   word-Break:break-all;
   margin-Bottom:5px;
  
   
   :hover{
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
   }
`;
const ChatUser = styled.div`
width:80px;    
display:flex;
flex-Direction:column;
align-Items:center;
padding-top:5px;
padding-bottom:2px;

`;
const Message = styled.div`
width:85%;
display:flex;
align-Items:flex-end;


`;
const SubBtn = styled.button`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100%;
border-Radius:100px;
background:#0b283a;
color:white;
border:none;
outline:none;
`;
const ChatInput = styled.input`
width:100%;
height:38px;
border-Radius:100px 0 0 100px;
outline:none;
border:1px solid gray;
border-Right:none;
padding-Left:20px;
`;
const condition = authUser => authUser != null;


export default withAuthorization(condition)(ChatBlock);