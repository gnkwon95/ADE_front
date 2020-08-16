import React from "react";
import { Card, Space } from "antd";
// import { Link } from "react-router-dom";

const MentorLove = () => {
  return (
    <Card
    title="내가 찜한 멘토"
    bordered={false}
    // extra={<Link to="">더보기</Link>}
  >
    <Card title={false} bordered={false} style={{ overflowX: "auto" }}>
      <Space size="large">
      </Space>
    </Card>
  </Card>
  );
};

export default MentorLove;
