import React, { useState, useEffect } from "react";
import { Card, List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from "axios";
// import { Link } from "react-router-dom";

const ContagList = () => {
  const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `멘토 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      '네이버 | 카카오 | 몰로코 ',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
  

  return (
    <Card
      title="컨택리스트"
      bordered={false}
      // extra={<Link to="">더보기</Link>}
    >
      <List
      style={{maxWidth:"600px"}}
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>멘토에게 연락해서</b> 광명찾자
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        // extra={
        //   <img
        //     width={272}
        //     alt="logo"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        //   />
        // }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} size={58}/>}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
    </Card>
  );
};

export default ContagList;
