import React from "react";
import { Typography, Space, Button } from "antd";
import "./MyPage.css";
import { withAuthorization, AuthUserContext } from "../session";
import NickName from "../components/mypage/NickName";
import MentorLove from "../components/mypage/MentorLove";
import MatchingCoupon from "../components/mypage/MatchingCoupon";
import ChangePwForm from "../components/mypage/ChangePwForm";

import { ExclamationCircleOutlined } from "@ant-design/icons";

function callback(key) {
  console.log(key);
}

const MyPage = (props) => {
  const { Title } = Typography;

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <Space
          size="large"
          direction="vertical"
          style={{ width: "100%", minWidth: "350px;" }}
        >
          <Title level={4} className="mypage-title">
            {authUser.email}님 안녕하세요 :)
          </Title>
          <MatchingCoupon />
          <NickName />
          <MentorLove />
          <ChangePwForm />
          <Button type="link" href="/delete-account" style={{float: "right", padding: "0"}} danger>
          <ExclamationCircleOutlined />탈퇴하기
          </Button>
        </Space>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => authUser != null;

export default withAuthorization(condition)(MyPage);

// export default MyPage;
