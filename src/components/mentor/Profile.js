import React, { useState, useEffect, useContext } from 'react'
import Description from './Description'
import Comments from './Comment'
import { Empty } from 'antd'
import axios from 'axios'
import { AuthUserContext } from '../../session'

const list = [
    "first",
    "second",
    "third",
]
const comments = [
  {
    "profile": 3,
    "user_id": "김모씨",
    "date_modified": null,
    "content": "저세상 친절을 보여주셔서 덕부네 합격했어요! 사랑합니다!!",
    "create_date": "2020-08-29T15:53:10+09:00",
    "voter": [
        1,2,3,4
    ]
  },
  {
    "profile": 3,
    "user_id": "이모씨",
    "date_modified": null,
    "content": "물어본 것들에 모두 친절하고 정성스레 답변 주셔서 도움이 많이 됐어요. 감사합니다 :D",
    "create_date": "2020-08-29T15:53:10+09:00",
    "voter": []
  },
  {
    "profile": 3,
    "user_id": "김모씨",
    "date_modified": null,
    "content": "좋았어요. 감사합니다.",
    "create_date": "2020-08-29T15:53:10+09:00",
    "voter": []
  },
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
            <div style={{ fontSize:"25px", fontWeight:"bold", borderBottom:"1px solid lightgray", paddingBottom:"20px" }}>
              후기 
              <span style={{ fontSize:"18px"}}>({comments.length}명)</span>
            </div>
            {comments.length > 0 ?
              comments.map(item => <Comments data={item}/>)
              :
              <Empty description="아직 후기가 없습니다!"/>
            }
        </div>
    )
}

export default Profile
