import React from "react";
//import { withAuthentication } from "../session/withAuthentication";
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import axios from "axios";
import {withAuthorization, AuthUserContext, withAuthentication } from "../../session";
import {Card, Col, Row} from 'antd';
import "./chatbox.css"

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

     Chatbox = ({chat}, {is_user}) => (
        <>
            <Card size="small" title={this.state.mentor_id} style={{width:300}}>
                <p> {chat.content} </p>
            </Card>
        </>
    )



    render() {
        return (
              <div>
                <div className="chats"> {/* see chats based on chat - map each to each chat block*/ }

                    {this.state.chats.map(chat => {
                        console.log(this.state.user.uid)
                        return <p key={chat.timestamp}>
                            { (chat.uid == this.state.user.uid )
                            ? <this.Chatbox chat={chat} is_user={true} />
                            : <this.Chatbox chat={chat} is_user={false} />
                            }
                        </p>
                    })}
                </div>
                <form onSubmit = {this.handleSubmit}>  {/*form to update message, with button to send */}
                    <input onChange={this.handleChange} value={this.state.content}></input> {/*use this.handleChange to change state (is message okay?) */}
                     {this.state.error ? <p>{this.state.writeError}</p> : null}
                     <button type="submit">보내기</button>
                 </form>
                <div> {/*field available in email */}
                    Login as user : {
                        this.state.is_mentor
                        ? this.state.mentor_id
                        : this.state.mentee_id
                    }
                </div>
            </div>
        );
    }
}


const condition = authUser => authUser != null;


export default withAuthorization(condition)(ChatBlock);