import React from "react";
import Sample from "../../imageSamples/Sample.PNG";
import styled from "styled-components";

const StyledMentorInfo = styled.div`
  .withCompanyLogo {
    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
    }
  }
`;

const MentorInfo = () => {
  return (
    <StyledMentorInfo>
      <div className="withCompanyLogo">
        <img src={Sample} alt={Sample} />
        <h1>김 갓 멘토님</h1>
        <h2>CompanyName</h2>
      </div>
      <div></div>
      <div></div>
    </StyledMentorInfo>
  );
};

export default MentorInfo;
