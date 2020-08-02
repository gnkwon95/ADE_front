import React from "react";
import { Card, Col, Row } from 'antd';
import { Link } from "react-router-dom";

const Counsel = () => {
    return (
        <div className="site-card-wrapper" style={{paddingTop:24}}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="닉네임" bordered={false} extra={<Link to="">변경하기</Link>}>
              백승렬
            </Card>
          </Col>
          <Col span={8}>
            <Card title="보유 매칭권 수" bordered={false} extra={<Link to="">충전하기</Link>}>
              1 장
            </Card>
          </Col>
          <Col span={8}>
            <Card title="내가 찜한 멘토" bordered={false} extra={<Link to="">자세히</Link>}>
              국서경 멘토
            </Card>
          </Col>
        </Row>
      </div>
      );
    };

export default Counsel;