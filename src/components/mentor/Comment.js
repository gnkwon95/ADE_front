import React from 'react'
import { Row, Col } from 'antd'
import { LikeTwoTone } from '@ant-design/icons';
import moment from 'moment'

function Comment({ data }) {
    const {
        user_id,
        date_modified, 
        content,
        create_date,
        voter,
      } = data;

    const recommend = "추천해요!"
    
    return (
        <div style={{ fontSize:"18px", padding:"10px", borderBottom:"1px solid lightgray" }}>
            <Row>
                <Col flex="130px">
                    <div style={{ borderRight:"1px solid lightgray", marginRight:"20px" }}>
                        <span style={{ fontSize:"20px", fontWeight:"bold" }}>{user_id.charAt(0)}**</span>
                        <br /> {moment(create_date).format("YYYY.MM.DD")}
                    </div>
                </Col>
                <Col flex="1 1 100px">
                    <div style={{ fontWeight:"bold", color: recommend === "추천해요!" ? "#5AB485" : "" }}>{recommend}</div>
                    {content}
                </Col>
                <Col flex="40px">
                    {voter.length} &nbsp;
                    <LikeTwoTone twoToneColor="#5AB485"/>
                </Col>
            </Row>
        </div>
    )
}

export default Comment
