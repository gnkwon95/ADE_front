import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Sample from "../../imageSamples/Sample.PNG";

import { Link } from "react-router-dom";

import HeartsAndStars from "../Etc/HeartAndStars";
import { StyledMentorCard } from "./styles";

const MentoCard = ({ data }) => {
  const { title, profile, hearts, stars, info_paragraph, prepared_companies } = data;
  return (
    <Link to="/mentor" style={{ color: "black" }}>
      <StyledMentorCard>
        <div className="Mentor_Avatar">
          <Avatar className="avatar_icon" src={Sample} size={60} icon={<UserOutlined />} />

          <h1>
            {title}
            <br />
            <span>{profile} 멘토</span>
          </h1>
        </div>
        <HeartsAndStars hearts={hearts} stars={stars} />
        <div className="Mentor_company">
          <p>{info_paragraph}</p>
          <h3>함께 준비했던 회사: </h3>
          <ul>
            {prepared_companies.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      </StyledMentorCard>
    </Link>
  );
};

export default MentoCard;
