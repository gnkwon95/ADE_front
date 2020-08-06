import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import MenuDrop from "../components/Home/MenuDrop";
import MentoCard from "../components/Home/MentoCard";
import Filter from "../components/Home/Filter";
import "./Home.scss";

const StyledBtn = styled(Button)`
  position: absolute;
  background: #c4c4c4;
  width: 226px;
  height: 62px;
  border-radius: 10%;
  font-weight: bolder;
  font-size: 1.4rem;
  top: 80%;
  left: 80%;
  :hover {
    background: #c4c4c4;
    color: black;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Home = () => {
  const [dropdownState, setDropdownState] = useState("최근 등록 순으로 정렬");

  return (
    <>
      <Row style={{ background: "#b5b5b5" }}>
        <Col md={24}>
          <div className="Service_Intro_images"></div>
          <StyledBtn>
            <Link to="/">&gt; 자세히 알아보기</Link>
          </StyledBtn>
        </Col>
      </Row>
      <Row gutter={0}>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={12}>
          <div className="home_main">
            <h2>Find your advisor!</h2>
            <Dropdown
              overlay={
                <MenuDrop
                  dropdownState={dropdownState}
                  setDropdownState={setDropdownState}
                />
              }
            >
              <Button>
                {dropdownState}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <Filter />
          <MentoCard />
          <MentoCard />
          <MentoCard />
          <MentoCard />
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </>
  );
};

export default Home;
