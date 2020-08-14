import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Tag, Divider, Card, Button, Row, Col } from "antd";

const MentoCard = ({ data }) => {
  const { years, profile, in_list, info_paragraph, prepared_companies } = data;
  const prepare = prepared_companies.length
  const tagColor = years < 3 ? "#87d068"
                  : years < 7 ? "#2db7f5"
                  : "#108ee9"
  
  return (
    <Link to="/mentor">
      <Card hoverable>
        <Row style={{ padding:"10px" }}>
          <Col flex="70px">
            <Avatar shape="square" size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Col>
          <Col flex="auto">
            000회사 <Divider type="vertical"/>
            ㅁㅁㅁ직무 <Divider type="vertical"/>
            <Tag color={tagColor}>{years}년차</Tag>
            <br />
            <span>{profile} 멘토</span>
          </Col>
          <Col flex="120px">
            <Button type="primary" size="small">ConTag에 추가</Button>
            <div>{in_list}명에게 추가됨</div>
          </Col>
        </Row>
        <Row style={{ padding:"10px" }}>        
          {info_paragraph}
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
