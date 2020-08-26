import React, { useState, useEffect, useContext } from 'react'
import Description from './Description'
import axios from 'axios'
import { AuthUserContext } from '../../session'

const list = [
    "first",
    "second",
    "third",
]

function Profile() {

    const context = useContext(AuthUserContext)
    // Axios states
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const fetchData = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 를 초기화하고
          setError(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'http://15.164.251.155/profiles/?user='
          );
            console.log(response)
        } catch (e) {
          setError(e);
          console.log(e)
        }
        setLoading(false);
      };
    
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
            <Description label="드리는 말" data="여러분과 저는 다르지 않다고 생각합니다." />
            <Description label="학력" data="경영학 학사" />
            <Description label="면접 응시 회사" data={list} type="list" />
            <Description label="주요 경력 및 인턴 경험" data={list} type="list" />
            <Description label="합격 당시 스펙" data={list} type="list" />
            <h1>후기</h1>
            <div>후기들</div>
        </div>
    )
}

export default Profile
