import React from "react";

import styled from "styled-components"

const StyledDetails = styled.div`
  margin: 0 10%;
  h1{
    margin-top: 10%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
  }
  p{
    span{
      display:block;
    }
  }
  @media only screen and (max-width: 600px) {
    margin: 0px;
    min-width: 80%;
    p{
      padding: 0px;
    }
  }
`

const MentorDetails = () => {
  return (
    <StyledDetails>
      <h1>지원직무</h1>
      <p>Financial + Business Analyst</p>
      <h1>현재직무</h1>
      <p>동일</p>
      <h1>입사시기</h1>
      <p>2020년 7월</p>
      <h1>학력</h1>
      <p>서울대학교 경영학과 졸업</p>
      <h1>함께 준비했던 회사 및 직군</h1>
      <p>
        <span>
        -SKTelecom 데이터 분석 직군
        </span>
        <span>
        -소카 데이터 분석 직군
        </span>
        <span>
        -스파크랩 벤쳐스 심사역
        </span>
      </p>
      <h1>주요 인턴 및 경험</h1>
      <p>
        <span>-쏘카 데이터사이언스팀 인턴</span>
      </p>
      <h1>합격 당시 스펙</h1>
      <p>
        <span>
          -HSK 6급
        </span>
        <span>
          -정보처리 기능사
        </span>
      </p>
      <h1>기타 활동</h1>
      <p>
        <span>-SK Sunny 대학생 자원 봉사단</span>
        <span>-ㅇㅇ 봉사단 대상 수상</span>
      </p>
    </StyledDetails>
  );
};

export default MentorDetails;
