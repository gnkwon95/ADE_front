import {Calendar, Modal, Button} from 'antd';
import React from "react";
import "./ChooseDateModal.css"
import { StyledMentorInfo } from "./styles";
import HandleOK from "./handleok";
import { AuthUserContext, withAuthorization } from "../../session";

import moment from 'moment';
import 'moment/locale/ko';
import axios from "axios";

axios.defaults.baseURL ='http://15.164.251.155:8000/'



class ChooseDateModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mentor: {
                    user:{
                        user_uid: "FtyN99N55NRhuglRDEjiea6mE3p1",
                        email: "user2@mail.com",
                        user_id: "user2",
                        credit: 0,
                        credit_used: 0
                    },
                current_company: "NAVER",
                current_job: "개발자",
                work_period_from: "2020-08-07",
                work_period_to: null,
                PR: "2번",
                voter: [],
                real_name: "권기남",
                phone_number: 1086840649,
                bank: "굳은행",
                account_num: 61615151,
                account_email: "hello@naver.com",
                create_date: "2020-08-07T14:14:37+09:00",
                date_modified: null
            }, // 멘토페이지부터 링크 필요 this.props.mentor
            user: [],
            visible: false,
            date: moment().locale('ko').format('YYYY-MM-DD')
        }
        //this.handleChange = this.handleChange.bind(this);
        this.sendConnection = this.sendConnection.bind(this);
    }


    showModal = () => {
        this.getUserData();
        this.setState({
            visible: true,
        });
    };


    sendConnection = () => (
         axios.post('connections/', {
                mentor: this.state.mentor,
                mentee: this.state.user,
                meeting_date: this.state.date
            })
            .then(function (response) {
                console.log("success");
                console.log(response);
            })
            .catch(function(error){
                console.log("error");
                console.log(error);
            })
    )

    handleOk = e => {
        console.log(e);
        console.log(this.state);
         this.state.user.credit != 1
         ? (
         Modal.confirm().update({
            Title: '구매 확인',
            okText: '확인',
            cancelText: '취소',
            destroyOnClose: true,
            content: (
                <div> {this.state.mentor.user.user_id} 님과 {this.state.date}일에 미팅이 신청됩니다 </div>
            ),
            onOk: this.sendConnection

           })
        )
        : (
         Modal.confirm().update({
            Title: '이용권 부족',
            okText: '확인',
            cancelText: '취소',
            destroyOnClose: true,
            content: (
                <div> 필요한 크래딧이 부족합니다. 충전 페이지로 전송됩니다 </div>
            )
        })
        )

        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible:false,
        });
    }

    onSelect = e => {
        this.setState({
            date: e.format('YYYY-MM-DD'),
        })
        console.log(this.state.user)
    }

    getUserData = () => {
        axios.get('mypage/?user='+this.props.firebase.getCurrentUser().uid)
        .then(
            res => {return this.setState({user:res.data[0]})}
        );
    }

    render() {
      return (
      <>
        <div className="MentorPage_buttons">
         <Button type="primary" onClick={this.showModal}> 상담 신청하기 </Button>

        </div>

        <Modal title="상담 신청하기"
            visible = {this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
         >
            <>
            <div className="site-calendar-demo-card" >
            <Calendar fullscreen={false}
                onSelect = {this.onSelect}
            />

          </div>
          <h3> 남은 컨택 가능 횟수: {this.state.user.credit} </h3>
          </>
        </Modal>
       </>
      )
  }
};

const condition = authUser => authUser != null;

export default withAuthorization(condition)(ChooseDateModal);

