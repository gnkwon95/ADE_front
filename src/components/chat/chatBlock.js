import React from "react";
//import { withAuthentication } from "../session/withAuthentication";
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import axios from "axios";
import {withAuthorization, AuthUserContext, withAuthentication } from "../../session";
import {Card, Col, Row, Button, Layout} from 'antd';


//import ChatLayout from "./ChatBox";
//import makeStyles from "@material-ui/core/styles/makeStyles";
const {Content, Sider} = Layout;
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
            mentee_id: this.props.connection.mentee_id,
            user: this.props.firebase.getCurrentUser(),
            chats: [],
            content: '',
            readError: null,
            writeError: null,
            is_mentor: this.props.is_mentor
        }
         this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        this.setState({ readError: null});
        try{
              this.props.firebase.getDB().ref("chats").child("UBLojFqhwVZ752MYk47RXL18jD73").child("FtyN99N55NRhuglRDEjiea6mE3p1").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                this.setState({chats});
             });
         } catch (error) {
            this.setState({readError: error.message});
         }
    }

    handleChange(event){ // get value from input field, set state variable
        console.log(event)
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
            await this.props.firebase.getDB().ref("chats").child("UBLojFqhwVZ752MYk47RXL18jD73").child("FtyN99N55NRhuglRDEjiea6mE3p1").push({
                content: this.state.content,
                timestamp: Date.now(),
                uid: this.state.user.uid
            });
            this.setState({ content: ''});
        } catch(error) {
            this.setState({ writeError: error.message});
        }
    }


ChatBox = ({pos, left_id, right_id, content}) => {
    return (
    <>
        <div>
            {pos == 'left'
            ? <h5 style={{float:pos}}> {left_id} </h5>
            : <h5 style={{float:pos}}> {right_id} </h5>
            }
            <br />
            <Button type="text" shape="round" size="middle" style={{background: "orange",  float:pos}}> {content} </Button>
        </div>
        <br />
       </>
    )
}
able = ()=>{
    if(this.state.content===""){
      return  (<div className="fixed" style={{position:"sticky",bottom:"0px"}}>
        <form onSubmit = {this.handleSubmit} >  {/*form to update message, with button to send */}
            <Layout>
            <Content>
                <input type="textarea" className="text" onChange={this.handleChange} value={this.state.content} style={{width:"100%",height:40,borderRadius:"100px",outline:"none" ,border:"1px solid gray",paddingLeft:"20px"}}></input> {/*use this.handleChange to change state (is message okay?) */}
                 {this.state.error ? <p>{this.state.writeError}</p> : null}
             </Content>
             <Sider style={{background:"none",width:"30px",maxWidth:"30px",minWidth:"20px"}}>
                 <button type="submit" className="send_btn" style={{width:"100%",height:"100%"}} disabled>보내기</button>
             </Sider>
             </Layout>
         </form>
         </div>)
    }else{
      return ( <div className="fixed" style={{position:"sticky",bottom:"0px"}}>
        <form onSubmit = {this.handleSubmit} >  {/*form to update message, with button to send */}
            <Layout>
            <Content>
                <input type="textarea" className="text" onChange={this.handleChange} value={this.state.content} style={{width:"100%",height:40,borderRadius:"100px",outline:"none" ,border:"1px solid gray",paddingLeft:"20px"}}></input> {/*use this.handleChange to change state (is message okay?) */}
                 {this.state.error ? <p>{this.state.writeError}</p> : null}
             </Content>
             <Sider style={{background:"none",width:"30px",maxWidth:"30px",minWidth:"20px"}}>
                 <button type="submit" className="send_btn" style={{width:"100%",height:"100%"}} >보내기</button>
             </Sider>
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

        console.log(left_id)
        return (
       
              <div className="chats">
                { this.state.chats.map( chat => {
                    return <p key={chat.timestamp}>
                        { (chat.uid == this.state.user.uid)
                        ? <this.ChatBox  pos='right' left_id={left_id} right_id={right_id} content= {chat.content} />
                        : <this.ChatBox  pos='left' left_id={left_id} right_id={right_id} content= {chat.content} />
                        }
                    </p>
                })}
          {this.able()}
                </div>
             
        );
    }
}


const condition = authUser => authUser != null;


export default withAuthorization(condition)(ChatBlock);