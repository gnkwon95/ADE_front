import React, { useState } from "react";
import { Button, Divider, BackTop } from 'antd'
import { UpCircleTwoTone } from '@ant-design/icons'
import { AuthUserContext } from "../../session";
import * as Comps from "../../components/mentor"
import "./Mentor.css";

const Mentor = () => {

  const [menu, setMenu] = useState("profile")

    

  return (
    <AuthUserContext.Consumer>
      {authUser => authUser ?
      <div className="mentorpage">
        <div style={{ padding:"20px" }}>
          <h1 style={{ fontWeight:"bold" }}>
            <span style={{ color:"#5AB485" }}>{authUser.user_id}</span>님, 환영합니다:)
          </h1>
          <button
            id="profile"
            onClick={(e) => setMenu(e.target.id)}
          >
            프로필
          </button>
          <Divider type="vertical"/>
          <button
            id="reward"
            onClick={(e) => setMenu(e.target.id)}
          >
            리워드
          </button>
        </div>

        <div className="mentorpage-container">
          <div className="mentorpage-card">
            <Comps.BusinessCard />
          </div>
          <div className="mentorpage-detail">
            { menu === "profile" ?
              <Comps.Profile /> : <Comps.Reward /> }
          </div>
        </div>
        <BackTop>
          <UpCircleTwoTone twoToneColor="orange" style={{ fontSize: '32px' }} />
        </BackTop>
      </div>
      : null
      }
    </AuthUserContext.Consumer>
  );
};

export default Mentor;
