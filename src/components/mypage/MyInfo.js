import React from "react";
import { Card, Col, Row, Space } from "antd";
import { Link } from "react-router-dom";
import "./MyInfo.css";
import MentorCard from "./MyInfoMentorCard";
import ChangePw from "./ChangePw"

const MyInfo = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col flex={1}>
          <Card
            title="닉네임"
            bordered={false}
            extra={<Link to="">변경하기</Link>}
          >
            <div className="card-single-text">
              <span
                level={4}
                className="card-text"
                style={{ fontSize: 28, color: "#000", fontWeight: 500 }}
              >
                백승렬
              </span>
            </div>
          </Card>
        </Col>
        <Col flex={1}>
          <Card
            title="보유 매칭권 수"
            bordered={false}
            extra={<Link to="">충전하기</Link>}
          >
            <div className="card-single-text">
              <span className="card-text">
                <span style={{ fontSize: 28, color: "#000", fontWeight: 500 }}>
                  1
                </span>{" "}
                장
              </span>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <ChangePw />
      </ Row>
      <Row>
        <Col flex={1}>
          <Card
            title="내가 찜한 멘토"
            bordered={false}
            extra={<Link to="">더보기</Link>}
          >
            <Card title={false} bordered={false} style={{ overflowX: "auto" }}>
              <Space size="large">
                <MentorCard />
                <MentorCard />
                <MentorCard />
              </Space>
            </Card>
          </Card>
        </Col>
        </Row>
    </>
  );
};

export default MyInfo;
