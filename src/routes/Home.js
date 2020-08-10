import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import MenuDrop from "../components/Home/MenuDrop";
import MentoCard from "../components/Home/MentoCard";
import Filter from "../components/Home/Filter";

import "./Home.css";

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
const StyledServiceImage = styled.div`
  min-height: 420px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #b5b5b5;
  @media only screen and (max-width: 600px) {
    min-height: 300px;
  }
`;

const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    margin: 58px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }
  button {
    margin-bottom: 5%;
    text-align: center;
  }
`;

const Home = () => {
  const [dropdownState, setDropdownState] = useState("최근 등록 순으로 정렬");
  return (
    <>
      <Row style={{ background: "#b5b5b5" }}>
        <Col md={24}>
          <StyledServiceImage className="Service_Intro_images"></StyledServiceImage>
          <StyledBtn>
            <Link to="/">&gt; 자세히 알아보기</Link>
          </StyledBtn>
        </Col>
      </Row>
      <Row gutter={0}>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={12}>
          <HomeMain>
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
          </HomeMain>
          <Filter />
          <MentoCard
            title={"20글자입니다20글자입니다20글자입니다20글자입니다"}
          />
          <MentoCard title={"15글자입니다15글자입니다15글자입니다"} />
          <MentoCard title={"가나다라마바사아자차카타파하"} />
          <MentoCard title={"5글자입니다"} />
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </>
  );
};

export default Home;
