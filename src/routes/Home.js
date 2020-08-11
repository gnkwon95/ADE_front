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
const DummyData = [
  {
    id: 1,
    title: "안녕 나는 멘토 1번이야!",
    profile: "김 갓",
    hearts: 99,
    stars: 4.5,
    info_paragraph:
      "소개소개 저는 바보입니다 소개소개 하하하하으헤헤헤메롱메롱 히호횔호히횧아 내가 취업시켜줄게!!",
    prepared_companies: ["라인", "네이버"],
    img_src: "",
  },
  {
    id: 2,
    title: "안녕 나는 멘토 2번이야!",
    profile: "최 하",
    hearts: 78,
    stars: 4.2,
    info_paragraph:
      "나는 천재입니다 하하 소개소개 하하하하으헤헤헤메롱메롱 히호횔호히횧아 내가 취업시켜줄게!!",
    prepared_companies: ["카카오", "키움증권", "네이버웹툰", "삼성생명"],
    img_src: "",
  },
  {
    id: 3,
    title: "안녕 나는 멘토 3번이야!",
    profile: "고길동",
    hearts: 34,
    stars: 3.5,
    info_paragraph:
      "가을이오면 눈부신 아침 햇살에 비추는 그대미소가 아름다워요~ 내가 취업시켜줄게!!",
    prepared_companies: ["구글", "메롱증권", "롯데", "산와머니", "롯데캐피탈"],
    img_src: "",
  },
  {
    id: 4,
    title: "안녕 나는 멘토 4번이야!",
    profile: "도우너",
    hearts: 39,
    stars: 2.5,
    info_paragraph:
      "그대 오직 그대만이 내 첫사랑 내 끝사랑 지금부터 내가 취업시켜줄게!!",
    prepared_companies: ["네이버", "삼성전자", "삼성SDI"],
    img_src: "",
  },
  {
    id: 5,
    title: "안녕 나는 멘토 5번이야!",
    profile: "둘 리",
    hearts: 77,
    stars: 2.5,
    info_paragraph:
      "외로운 둘리는 귀여운 아기공룡 호잇호잇 둘리는 초능력 내 친구 내가 취업시켜줄게!!",
    prepared_companies: ["고길동집"],
    img_src: "",
  },
];

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
          {DummyData.map((data) => (
            <MentoCard key={data.id} data={data} />
          ))}
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </>
  );
};

export default Home;
