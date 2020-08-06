import React from "react";
import { Avatar } from "antd";
import { UserOutlined, HeartFilled, StarFilled } from "@ant-design/icons";
import Sample from "../../imageSamples/Sample.PNG";
import styled from "styled-components";

import "./MentorCard.scss";
import { Link } from "react-router-dom";

const HeartsAndStars = styled.div`
  margin-left: auto;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    position: static;
    flex-direction: row;
    margin-bottom: 10px;
    span {
      display: inline-block;
    }
  }
`;

const MentoCard = ({ title }) => {
  return (
    <Link to="/mentor" style={{ color: "black" }}>
      <div className="Mentor_Card">
        <div className="Mentor_Avatar">
          <Avatar
            className="avatar_icon"
            src={Sample}
            size={60}
            icon={<UserOutlined />}
          />

          <h1>
            {title}
            <br />
            <span>김 갓 멘토</span>
          </h1>
        </div>
        <HeartsAndStars>
          <span>
            <HeartFilled /> 999명
          </span>
          <span>
            <StarFilled /> 4.5점
          </span>
        </HeartsAndStars>
        <div className="Mentor_company">
          <p>
            소개글 줄글소개글 줄글소개글 줄글소개글 줄글소개글 줄글소개글
            줄글소개글 줄글소개글 줄글소개글 줄글소개글 줄글소개글 줄글소개글
            줄글소개글 줄글소개글 줄글소개글 줄글소개글 줄글글 줄글소개글 줄글글
            줄글소개글 줄글글 줄글소개글 줄글
          </p>
          <h3>함께 준비했던 회사: </h3>
          <div>
            <span>보기</span>
            <span>보기</span>
            <span>보기</span>
            <span>보기</span>
            <span>보기</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MentoCard;
