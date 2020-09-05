
import React, { useState,useEffect,useContext } from "react";
import { Button, Divider, BackTop } from 'antd'
import { UpCircleTwoTone } from '@ant-design/icons'
import { AuthUserContext } from "../../session";
import * as Comps from "../../components/Mentor"
import "./Mentor.css";
import Axios from "axios";

const Mentor = (props) => {
  const user = useContext(AuthUserContext)
  const [menu, setMenu] = useState("profile");
  const [error, setError] =useState(null);
  const [loading, setLoading] = useState(false);
  const [data,setData] = useState(null);

  console.log(data)
   const ex =async ()=>{
    if(data!==null){
      const res = await Axios.get(`http://15.164.251.155/profile_full/?user=${user.user_uid}`)
      setData(res.data);
      } 
   }
  useEffect(()=>{
  const fetch= async()=>{

    try {
     
      setLoading(true)
      ex()
      
    } catch (e) {
      setError(e)
      console.log('error')
    }
   
    setLoading(false);
  }
  fetch();

},[ex] )
if (loading) return <div>로딩중..</div>;
if (error) return <div>에러가 발생했습니다</div>;



  return (
    
    <AuthUserContext.Consumer>
      {user=> user!==null ?
      <div className="mentorpage">
        <div style={{ padding:"20px" }}>
          <h1 style={{ fontWeight:"bold" }}>
            <span style={{ color:"#5AB485" }}>멘토</span>님, 환영합니다:)
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
      :       <div className="mentorpage">
      <div style={{ padding:"20px" }}>
        <h1 style={{ fontWeight:"bold" }}>
          <span style={{ color:"#5AB485" }}>멘티</span>님, 환영합니다:)
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
          <Comps.BusinessCard info={data} />
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
      }
    </AuthUserContext.Consumer>
  );
};

export default Mentor;
