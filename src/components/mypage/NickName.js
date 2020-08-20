import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Button, Drawer, Form, Input, Spin, Alert, message } from "antd";
import { EditOutlined } from "@ant-design/icons";

const NickName = (props) => {
  // Drawer states
  const [visible, setVisible] = useState(false);
  const [nickname, setNickname] = useState("");

  // Axios states
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchName = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsername(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        `http://15.164.251.155:8000/mypage/?user=${props.uid}`
      );
      const len = response.data.length;
      const data = response.data[len - 1];

      setUsername(data.user_id); // 데이터는 response.data 안에 들어있습니다.
      props.setName(data.user_id); // 데이터는 response.data 안에 들어있습니다.
      props.setCredit(data.credit); // 데이터는 response.data 안에 들어있습니다.
    //  props.setId(data.id); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchName();
  }, []);

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    const submitNickname = async () => {
      try {
        console.log(props)
        await axios.delete(
          `http://15.164.251.155:8000/mypage/${props.id}`
         );

        await fetchName()
        await message.success('닉네임이 변경됐습니다.')
      } catch (e) {
        console.log(e);
        message.error('닉네임이 변경에 실패했습니다.')
      }
    };

    submitNickname();
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const userInfo = (
    <div className="user-info">
      <div className="card-single-text">
        <span style={{ marginRight: "8px" }}>닉네임</span>
        <span
          level={4}
          className="card-text"
          style={{ fontSize: 16, color: "#000", fontWeight: 500 }}
        >
          {username}
        </span>
      </div>
      <div className="card-single-text">
        <span style={{ marginRight: "8px" }}>이메일</span>
        <span
          level={4}
          className="card-text"
          style={{ fontSize: 16, color: "#000", fontWeight: 500 }}
        >
          {props.mail}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <Card
        title="사용자 정보"
        bordered={false}
        extra={
          <Button
            type="link"
            onClick={() => setVisible(true)}
            style={{ padding: "0" }}
          >
            <EditOutlined />
            변경하기
          </Button>
        }
      >
        {error ? (
          <Alert message="에러가 발생했습니다." type="error" />
        ) : loading ? (
          <Spin />
        ) : (
          userInfo
        )}
      </Card>
      <Drawer
        title="닉네임 변경하기"
        onClose={() => setVisible(false)}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              onClick={() => setVisible(false)}
              style={{ marginRight: 8 }}
            >
              취소
            </Button>
            <Button
              onClick={() => setVisible(false)}
              type="primary"
              htmlType="submit"
              form="nicknameForm"
            >
              확인
            </Button>
          </div>
        }
      >
        <Form
          id="nicknameForm"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="name"
            label="닉네임"
            rules={[{ required: true, message: "변경할 닉네임을 입력하세요!" }]}
          >
            <Input
              placeholder="변경할 닉네임을 입력하세요"
              value={nickname}
              onChange={onChangeNickname}
            />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default NickName;
