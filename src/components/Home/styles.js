import styled from "styled-components";
import { Select } from "antd";

export const StyledFilter = styled.div`
  text-align: right;
  span:hover {
    cursor: pointer;
  }
  position: relative;
`;

export const StyledSelect = styled(Select)`
  width: 80%;
  text-align: center;
  margin-right: auto;
  margin-left: 10%;
  border: 1px solid black;
`;
export const StyledFilterSelector = styled.div`
  position: absolute;
  width: 223px;
  height: 360px;
  border: 1px solid grey;
  background-color: white;
  z-index: 5000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-right: auto;
  right: 0%;
  p {
    margin-right: auto;
    margin-left: 10%;
    font-weight: 900;
    margin-top: 20px;
  }
`;

export const StyledMentorCard = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  padding: 3% 10%;
  margin: 20px;
  border-bottom: 2px solid #b5b5b5;
  font-weight: bold;
  flex-wrap: wrap;
  a {
    margin-left: auto;
  }
  .Mentor_Avatar {
    display: flex;
    line-height: 29px;
    flex-wrap: nowrap;
    .avatar_icon {
      min-width: 60px;
      min-height: 60px;
    }
    h1 {
      margin-left: 5%;
      margin-bottom: 0px;
      font-style: normal;
      font-weight: bold;
      span {
        font-size: 0.9rem;
      }
    }
  }
  .Mentor_company {
    display: flex;
    flex-wrap: wrap;
    p {
      flex-basis: 100%;
      font-weight: 900;
    }
    h3 {
      display: inline;
      margin: 0;
      font-size: 0.8rem;
    }
    ul {
      display: flex;
      padding: 0;
      flex-wrap: wrap;
      li {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        padding: 1px 4px;
        display: inline-block;
        background: #c4c4c4;
        min-width: 97px;
        max-height: 17px;
        margin: 5px 5px;
        text-align: center;
        vertical-align: middle;
      }
      span:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    padding: 3% 3%;
    h1 {
      font-size: 1.1rem;
      span {
        font-size: 0.7rem;
      }
    }
    .Mentor_Avatar {
      margin-bottom: 0;
    }

    .Mentor_company {
      div {
        span {
          margin: 5px 5px !important;
        }
      }
    }
  }
`;
