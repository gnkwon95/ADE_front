import React, { useState } from "react";
import { Typography, Space, Button } from "antd";
import "./MyPage.css";
import { withAuthorization, AuthUserContext } from "../session";
import NickName from "../components/mypage/NickName";
import ContagList from "../components/mypage/ContagList";
import MatchingCoupon from "../components/mypage/MatchingCoupon";
import ChangePwForm from "../components/mypage/ChangePwForm";
import { Log } from "../Log/Log"

import { ExclamationCircleOutlined } from "@ant-design/icons";

function callback(key) {
  console.log(key);
}

const MyPage = (props) => {
  const { Title } = Typography;

  const [name, setName] = useState("");
  const [credit, setCredit] = useState("");

  console.log('mypage test')
   //Log('MyPage', 'Load')
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <Space
          size="large"
          direction="vertical"
          style={{ width: "100%", minWidth: "350px;" }}
        >
          <Title level={4} className="mypage-title">
            {name}님 안녕하세요 :)
          </Title>
          <MatchingCoupon credit={credit}/>
          <NickName uid={authUser.uid} setName={setName} mail={authUser.email} setCredit={setCredit}/>
          <ContagList />
          <ChangePwForm />
          <Button type="link" href="/delete-account" style={{float: "right", padding: "0"}} danger>
          <ExclamationCircleOutlined />탈퇴하기
          </Button>
          {console.log(authUser.uid)}
        </Space>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => authUser != null;

export default withAuthorization(condition)(MyPage);

// export default MyPage;
