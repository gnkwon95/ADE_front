import React, { useEffect } from "react";
import axios from "axios";

import Review from "./Review";
import { StyledDetails } from "./styles";

const dummyData_Review = {
  review: {
    contents: [
      {
        id: 1,
        user: "김",
        comment: "취뽀헀어요1!",
        createdAt: "2020.07.23",
      },
      {
        id: 2,
        user: "이",
        comment: "취뽀헀어요2!",
        createdAt: "2020.07.23",
      },
      {
        id: 3,
        user: "박",
        comment: "취뽀헀어요3!",
        createdAt: "2020.07.23",
      },
      {
        id: 4,
        user: "최",
        comment: "취뽀헀어요4!",
        createdAt: "2020.07.23",
      },
      {
        id: 5,
        user: "정",
        comment:
          "취뽀헀어요5!Ullamco dolor cillum deserunt veniam dolor enim ex ex nisi cillum. Exercitation veniam labore id ut officia sint consectetur commodo labore consectetur irure dolor ut. Adipisicing eu sit ut ad minim dolor.",
        createdAt: "2020.07.23",
      },
    ],
    score: 4.5,
  },
};

const MentorDetails = () => {
  const getComments = async () => {
    try {
      const data = await axios.get("http://15.164.251.155:8000/comments/");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getComments();
  }, []);
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
        <span>-SKTelecom 데이터 분석 직군</span>
        <span>-소카 데이터 분석 직군</span>
        <span>-스파크랩 벤쳐스 심사역</span>
      </p>
      <h1>주요 인턴 및 경험</h1>
      <p>
        <span>-쏘카 데이터사이언스팀 인턴</span>
      </p>

      <h1 style={{ marginBottom: "5%" }}>합격 당시 스펙</h1>

      <h2>보유 자격증 및 어학 시험 점수</h2>
      <div className="mentor_spec">
        <p>
          <span>-HSK 6급</span>
          <span>-정보처리 기능사</span>
        </p>
      </div>
      <h2>기타 활동</h2>
      <div className="mentor_spec">
        <p>
          <span>-SK Sunny 대학생 자원 봉사단</span>
          <span>-ㅇㅇ 봉사단 대상 수상</span>
        </p>
      </div>

      <Review id="review" review={dummyData_Review.review} />
    </StyledDetails>
  );
};

export default MentorDetails;
