import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Sample from "../../imageSamples/Sample.PNG";

import { Link } from "react-router-dom";

import HeartsAndStars from "../Etc/HeartAndStars";
import { StyledMentorCard } from "./styles";

const MentoCard = ({ title }) => {
  return (
    <Link to="/mentor" style={{ color: "black" }}>
      <StyledMentorCard>
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
        <HeartsAndStars hearts={`99`} stars={"4.5"} />
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
      </StyledMentorCard>
    </Link>
  );
};

export default MentoCard;
