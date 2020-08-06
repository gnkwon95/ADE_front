import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Sample from "../../imageSamples/Sample.PNG";

import "./MentorCard.scss";

const MentoCard = () => {
  return (
    <div className="Mentor_Card">
      <div className="Mentor_Avatar">
        <Avatar src={Sample} size={60} icon={<UserOutlined />} />

        <h1>
          라인, Buisiness Analyst
          <br />
          <span>김 갓 멘토</span>
        </h1>

        <a>더 알아보기 &gt;</a>
      </div>
      <div className="Mentor_company">
        <p>
          소개글 줄글소개글 줄글소개글 줄글소개글 줄글소개글 줄글소개글
          줄글소개글 줄글소개글 줄글소개글 줄글소개글 줄글소개글 줄글소개글
          줄글소개글 줄글소개글 줄글소개글 줄글소개글 줄글글 줄글소개글 줄글글
          줄글소개글 줄글글 줄글소개글 줄글
        </p>
        <h3>함께 준비했던 회사</h3>
        <div>
          <span>보기</span>
          <span>보기</span>
          <span>보기</span>
          <span>보기</span>
          <span>보기</span>
        </div>
      </div>
    </div>
  );
};

export default MentoCard;
