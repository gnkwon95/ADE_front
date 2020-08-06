import React from "react";
import { Row, Col } from "antd";
import "./Mentor.css";

import MentorInfo from "../components/Mentor/MentorInfo";
import MentorDetails from "../components/Mentor/MentorDetails";

const Mentor = () => {
  return (
    <>
      <MentorInfo />
      <Row>
        <Col sm={24} md={4}></Col>
        <Col sm={24} md={16}>
          <MentorDetails />
        </Col>
        <Col sm={24} md={4}></Col>
      </Row>
    </>
  );
};

export default Mentor;
