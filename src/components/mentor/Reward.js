import React from 'react'
import Description from './Description'

function Reward() {
    return (
        <div>
            <br />
            <div style={{ fontSize:"30px" }}>획득하신 누적 리워드</div>
            <div style={{ fontFamily:"NovaMono", fontSize:"68px" }}>100,000 원</div>
            <hr style={{ border:"1px solid lightgray" }} />
            <Description label="리워드 계좌" data="1234-123-12****" />
            <Description label="예금주 명" data="홍길동" />
            <Description label="이메일 주소" data="aa@a.com" />
        </div>
    )
}

export default Reward
