import React from "react";
import Sample from "../../imageSamples/Sample.PNG";
import styled from "styled-components";

import { OriginalHnS } from "../Etc/HeartAndStars";

import "./MentorInfo.scss";
import quotes from "../../imageSamples/quotes.PNG";
import heart from "../../imageSamples/heart.png";
import MentorDetails from "./MentorDetails";

const StyledMentorInfo = styled.div`
  border-top: 1px solid grey;
  display: flex;

  .MentorPage_InfoCard {
    padding-top: 100px;
    padding-left: 5%;
    padding-right: 5%;
    img {
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: bolder;
      font-size: 1.3rem;
      line-height: 36px;
      margin: 0 10%;
      border-left: 3px solid rgba(0, 0, 0, 0.5);
      padding: 10px;
      padding-left: 40px;
      text-align: center;
    }
    div {
      margin: 0 10%;
    }
  }
  .withCompanyLogo {
    margin: 5% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
    }
    a {
      display: block;
      font-size: 18px;
      color: black;
    }
    div {
      display: flex;
      margin-bottom: 2%;
      a:nth-child(1) {
        margin-bottom: 10px;
        margin-right: 10px;
      }
      a:nth-child(2) {
        margin-bottom: 10px;
        margin-left: 10px;
      }
    }
    .MentorPage_buttons {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      line-height: 29px;
      button {
        font-family: Roboto;
        font-weight: 999;
        font-size: 1.4rem;
        background: #a8a8a8;
        border: none;
        outline: none;
        width: 200px;
        height: 50px;
        margin: 0;
        border-radius: 20px;
        cursor: pointer;
      }
      button:active {
        outline: none;
      }
      button:nth-child(1) {
        padding: 10px;
        margin: 10px;
        height: 80px;
      }
      button:nth-child(2) {
        padding: 10px;
        margin: 10px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    .withCompanyLogo {
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      z-index: 300;
      a {
        display: none;
      }
      > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      background: white;
      .MentorPage_buttons {
        display: flex;
        flex-direction: row-reverse;
        position: fixed;
        bottom: -8px;
        left: 0;
        width: 100%;
        button {
          background: #ff9d2b;
          padding: 10px;
          color: #000000;
          font-family: Roboto;
          font-weight: bold;
          font-size: 20px;
          line-height: 29px;
          border: none;
          outline: none;
          border-radius: 0;
          margin: 0;
          img {
            width: 20px;
            height: 20px;
          }
        }
        button:nth-child(1) {
          width: 100%;
          margin: 0;
        }
        button:nth-child(2) {
          width: 40%;
          border-right: 1px solid black;
          margin: 0;
          height: auto;
        }
      }
    }
    .MentorPage_InfoCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin: 0;
        border-left: none;
        padding-left: 10px;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .withCompanyLogo {
      .MentorPage_buttons {
        button {
          font-size: 16px;
        }
      }
    }
  }
`;

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
          <a>멘토소개</a> <a>상담후기</a>
        </div>

        <img src={Sample} alt={Sample} />
        <h1>
          <strong>김 갓</strong> 멘토님
        </h1>
        <div>
          <OriginalHnS stars={10} hearts={"4.5"} />
        </div>
        <h2>CompanyName</h2>
        <div className="MentorPage_buttons">
          <button>상담 신청하기</button>
          <button>
            <img src={heart} /> 찜하기
          </button>
        </div>

        <a>상담 방식이 궁금해요!</a>
      </div>
    </StyledMentorInfo>
  );
};

export default MentorInfo;
