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
const pattern = /^\s+|\s+$/g;


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
              this.props.firebase.getDB().ref("chats").child(this.state.mentor).child(this.state.mentee).on("value", snapshot => {
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
        } catch(error) {
            this.setState({ writeError: error.message});
        }
    }


ChatBox = ({pos, left_id, right_id, content}) => {
 
    return (
    <>
        <div style={{display:"block",marginBottom:"10px"}}>
            {/* pos==='left'
            ? <h5 style={{float:pos}}> {left_id} </h5>
            : <h5 style={{float:pos}}> {right_id} </h5>
             */}
             {pos==="left"
            ? <h5 style={{marginRight:'96.5%'}}> {left_id} </h5>
            : <h5 style={{marginLeft:'97%'}}> {right_id} </h5>
            }
            
            {pos === 'left'? <span style={{postion:"relative",background: "pink",float:pos,padding:"5px 25px 5px 25px",borderRadius:"40px",whiteSpace:"pre-line", wordBreak:"break-all"}}> {content} </span>: 
            <span style={{postion:"relative",background: "orange",  float:pos,padding:"5px 25px 5px 25px",borderRadius:"40px",whiteSpace:"pre-line", wordBreak:"break-all"}}> {content} </span>}
           {/* pos === 'left'? <Button  type="text" shape="round" size="middle" style={{background: "pink",  float:pos,cursor:"default"}}><span style={{width:"100%"}}>{content}</span></Button>: 
            <Button type="text" shape="round" size="middle" style={{background: "orange",  float:pos,cursor:"default"}}> <span style={{width:"100%"}}>{content}</span> </Button> */}
        </div>
        <br />
       </>
    )
}
able = ()=>{
    if(this.state.content.replace(pattern,'')===""){
      return  (<div className="fixed" style={{position:"sticky",bottom:"0px",zIndex:"100"}}>
        <form onSubmit = {this.handleSubmit} >  {/*form to update message, with button to send */}
            <Layout>
                <div style={{display:"flex",width:"100%"}}>
            <Content>
                <input type="textarea" className="text" onChange={this.handleChange} value={this.state.content} style={{width:"100%",height:38,borderRadius:"100px 0 0 100px",outline:"none" ,border:"1px solid gray",borderRight:"none",paddingLeft:"20px"}}></input> {/*use this.handleChange to change state (is message okay?) */}
                 {this.state.error ? <p>{this.state.writeError}</p> : null}
             </Content>
                 <div style={{width:"10%",height:38,background:"white",borderRadius:"0 100px 100px 0",border:"1px solid gray",borderLeft:"none"}}>
                 <button type="submit" className="send_btn" style={{width:"100%",height:"100%",borderRadius:"100px",background:"#0b283a",color:"gray",border:"none",outline:"none"}} disabled>전송</button>
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
                <input type="textarea" className="text" onChange={this.handleChange} value={this.state.content} style={{width:"100%",height:38,borderRadius:"100px 0 0 100px",outline:"none" ,border:"1px solid gray",borderRight:"none",paddingLeft:"20px"}}></input> {/*use this.handleChange to change state (is message okay?) */}
                 {this.state.error ? <p>{this.state.writeError}</p> : null}
             </Content>
             <div style={{width:"10%",height:38,background:"white",borderRadius:"0 100px 100px 0",border:"1px solid gray",borderLeft:"none"}}>
                 <button type="submit" className="send_btn" style={{width:"100%",height:"100%",borderRadius:" 100px",background:"#0b283a",color:"white",border:"none",outline:"none"}} >전송</button>
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
       
              <div className="chats">
               <div style={{height:"60%"}}>
                { this.state.chats.map( (chat,index) => {
                 
                    return <p style={{width:"100%"}} key={chat.timestamp}>
                        { (chat.uid === this.state.user.uid)
                        ? <this.ChatBox   pos='right' left_id={left_id} right_id={right_id} content= {chat.content} />
                        : <this.ChatBox  pos='left' left_id={left_id} right_id={right_id} content= {chat.content} />
                        }
                    </p>
                })}
        </div>
        {this.able()}
                </div>
             
        );
    }
}


const condition = authUser => authUser != null;


export default withAuthorization(condition)(ChatBlock);