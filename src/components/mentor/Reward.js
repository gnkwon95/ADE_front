import React from 'react'
import { Divider, Button } from 'antd'

function Reward() {
    return (
        <div>
            <br />
            <div style={{ fontSize:"36px" }}>획득하신 누적 리워드</div>
            <div style={{ fontFamily:"NovaMono", fontSize:"72px" }}>100,000 원</div>
            <hr style={{ border:"1px solid lightgray" }} />
            <br />
            <h1>리워드 계좌</h1>
            <div>1234-123-12****</div>
            <br />
            <h1>예금주 명</h1>
            <div>홍길동</div>
            <br />
            <h1>이메일 주소</h1>
            <div>aa@a.com</div>
            <br />
        </div>
    )
}

export default Reward
