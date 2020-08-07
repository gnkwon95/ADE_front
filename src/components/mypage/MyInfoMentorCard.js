import React from "react";
import { Avatar, Card } from "antd";
import { BankOutlined } from "@ant-design/icons";

const MentorCard = () => {
  const gridStyle = {
    width: 200,
    textAlign: "center",
    paddingTop: 48,
    paddingBottom: 32,
  };

  return (
    <Card.Grid style={gridStyle}>
      <Avatar
        className="mentor-avatar"
        src="https://lh3.googleusercontent.com/Kbu0747Cx3rpzHcSbtM1zDriGFG74zVbtkPmVnOKpmLCS59l7IuKD5M3MKbaq_nEaZM"
        icon={<BankOutlined />}
        style={{
          width: 100,
          height: 100,
          fontSize: 60,
          lineHeight: "100px",
          display: "block",
          margin: "auto",
        }}
      />
      <p style={{ paddingTop: 8, margin: 0, textAlign: "center" }}>네이버</p>
      <p className="mentor-name" style={{ margin: 0 }}>
        멘토 <span style={{ fontSize: 18, fontWeight: 600 }}>국서경</span>
      </p>
    </Card.Grid>
  );
};

export default MentorCard;
