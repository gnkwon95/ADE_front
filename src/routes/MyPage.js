import React from "react";
import { withRouter } from "react-router-dom";
import { Tabs, Typography } from "antd";
import "./MyPage.css";
import MyInfo from "../components/mypage/MyInfo";
import Counsel from "../components/mypage/Counsel";
import OneOnOne from "../components/mypage/OneOnOne";
import { withAuthorization } from '../session'

function callback(key) {
  console.log(key);
}

const MyPage = () => {
  const { TabPane } = Tabs;
  const { Title } = Typography;

  return (
    <>
      <Title level={4} className="mypage-title">
        {"백승렬"}님 안녕하세요 :)
      </Title>
      <Tabs defaultActiveKey="1" onChange={callback} size="large">
        <TabPane tab="내 정보" key="myInfo">
          <MyInfo/>
        </TabPane>
        <TabPane tab="상담 내역" key="counsel">
          <Counsel />
        </TabPane>
        <TabPane tab="1대1 문의" key="oneOnOne">
          <OneOnOne />
        </TabPane>
      </Tabs>
    </>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(MyPage);

// export default MyPage;
