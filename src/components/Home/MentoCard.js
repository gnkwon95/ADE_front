import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Tag, Divider, Card, Button, Row, Col } from "antd";

const MentoCard = ({ data }) => {
  const {
          current_company,
          current_job, 
          real_name,
          work_period_from,
          voter,
          PR,
          prepared_companies,
          logo,
        } = data;
  const prepare = prepared_companies.length
  const years = work_period_from
  const tagColor = years < 3 ? "#87d068"
                  : years < 7 ? "#2db7f5"
                  : "#108ee9"
  
  return (
    <Link to="/mentor">
      <Card hoverable>
        <Row style={{ padding:"10px" }}>
          <Col flex="70px">
            <Avatar shape="square" size={50} src={logo} />
          </Col>
          <Col flex="auto">
            {current_company} <Divider type="vertical"/>
            {current_job} <Divider type="vertical"/>
            <Tag color={tagColor}>{years}년차</Tag>
            <br />
            <span>{real_name} 멘토</span>
          </Col>
          <Col flex="120px">
            <Button type="primary" shape="round">컨택리스트에 추가</Button>
            <div style={{ fontSize:"12px", padding:"5px" }}>
              {voter > 5 ?
                <div><strong>{voter}</strong>명에게 추가됨</div>
                :
                null
              }
            </div>
          </Col>
        </Row>
        <Row style={{ padding:"10px" }}>        
          {PR}
        </Row>
        {prepare ? 
          <Row style={{ padding:"10px" }}>
            함께 합격했던 회사:&nbsp; &nbsp; 
              {prepared_companies.map((data, index) => (
                <Tag>{data}</Tag>
              ))}
          </Row>
          :
          null
        }
      </Card>
      <Divider />
    </Link>
  );
};

export default MentoCard;
