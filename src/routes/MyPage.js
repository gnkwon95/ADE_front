import React from "react";
import { Tabs, Typography } from "antd";
import "./MyPage.css";
import MyInfo from "../components/mypage/MyInfo";
import Counsel from "../components/mypage/Counsel";
import OneOnOne from "../components/mypage/OneOnOne";
import { withAuthorization, AuthUserContext } from "../session";

function callback(key) {
  console.log(key);
}

const MyPage = (props) => {
  const { TabPane } = Tabs;
  const { Title } = Typography;
  console.log(props.firebase.getCurrentUser());

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          <Title level={4} className="mypage-title">
            {console.log(authUser)}
            1번: {authUser.email}님 안녕하세요 :)
            <br />
            2번: {props.firebase.getCurrentUser().email}
          </Title>
          <Tabs defaultActiveKey="1" onChange={callback} size="large">
            <TabPane tab="내 정보" key="myInfo">
              <MyInfo />
            </TabPane>
            <TabPane tab="상담 내역" key="counsel">
              <Counsel />
            </TabPane>
            <TabPane tab="1대1 문의" key="oneOnOne">
              <OneOnOne />
            </TabPane>
          </Tabs>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => authUser != null;

export default withAuthorization(condition)(MyPage);

// export default MyPage;
