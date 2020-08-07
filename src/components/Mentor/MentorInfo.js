import React from "react";
import Sample from "../../imageSamples/Sample.PNG";

import { OriginalHnS } from "../Etc/HeartAndStars";
import { Link } from "react-router-dom"


import quotes from "../../imageSamples/quotes.PNG";
import heart from "../../imageSamples/heart.png";
import MentorDetails from "./MentorDetails";
import {StyledMentorInfo} from "./styles"

const MentorInfo = () => {
  return (
    <StyledMentorInfo>
      <div className="MentorPage_InfoCard">
        <img src={quotes} alt="quotes" />
        <p>
          여러분과 저는 다르지 않다고 생각합니다.
          <br /> 똑같이 힘든 취업 과정을 겪고 다만 조금 먼저 이겨낸 사람으로써,
          그 과정이 얼마나 힘든지 알기에 어떠한 도움이라도 되어드리고 싶습니다.
          제가 실패했던 이유, 그리고 결국 성공을 일궈낼 수 있엇던 이유, 가감없이
          전부 말씀드리겠습니다.
        </p>
        <MentorDetails />
      </div>

      <div className="withCompanyLogo">
        <div>
          <Link to="#">멘토소개</Link> <Link to="#">상담후기</Link>
        </div>

        <img src={Sample} alt={Sample} />
        <h1>
          <strong>김 갓</strong> 멘토님
        </h1>
        <div className="flex-column-reverse">
          <div>
            <OriginalHnS stars={"4.5"} hearts={10} />
          </div>
          <h2>CompanyName</h2>  
        </div>
        <div className="MentorPage_buttons">
          <button>상담 신청하기</button>
          <button>
            <img src={heart} alt={`찜하기${heart}개`}/> 찜하기
          </button>
        </div>

        <Link to="#">상담 방식이 궁금해요!</Link>
      </div>
    </StyledMentorInfo>
  );
};

export default MentorInfo;
