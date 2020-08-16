import React from "react";
import { Card, Button } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";

const MatchingCoupon = () => {
  return (
    <Card
      title="보유 매칭권 수"
      bordered={false}
      extra={
        <Button type="link" style={{padding:"0"}}>
          <CreditCardOutlined />충전하기
        </Button>
      }
    >
      <div className="card-single-text">
        <span className="card-text">
          <span style={{ fontSize: 20, color: "#000", fontWeight: 500 }}>
            1
          </span>{" "}
          장
        </span>
      </div>
    </Card>
  );
};

export default MatchingCoupon;
