import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Tag, Divider, Card, Button } from "antd";

const MentoCard = ({ data }) => {
  const { years, profile, in_list, info_paragraph, prepared_companies } = data;
  const prepare = prepared_companies.length
  
  return (
    <Link to="/mentor">
      <Card hoverable>
        <Card.Grid hoverable={false} style={{ width: '100px' }}>
          <Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: '50%' }}>
          <span>000회사 | ㅁㅁㅁ직무 </span><Tag color="#108ee9">{years}년차</Tag>
          <br />
          <span>{profile} 멘토</span>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: '200px' }}>
          <Button type="primary">컨텍 리스트에 추가</Button>
          <div>{in_list}명에게 추가됨</div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "100%" }}>
          {info_paragraph}
        </Card.Grid>
        
        {prepare ? 
          <Card.Grid hoverable={false} style={{ width: "100%" }}>
            함께 합격했던 회사: 
              {prepared_companies.map((data, index) => (
                <Tag>{data}</Tag>
              ))}
          </Card.Grid>
          :
          null
        }
      </Card>
      <Divider />
    </Link>
  );
};

export default MentoCard;
