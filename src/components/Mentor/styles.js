import styled from "styled-components";
export const StyledDetails = styled.div`
  margin: 0 10%;
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
  }
  > h1 {
    margin-top: 10%;
  }
  h1:nth-last-child(1) {
    margin-bottom: 5%;
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
  }
  p {
    span {
      display: block;
    }
    font-size: 1rem;
    font-weight: bold;
  }
  .mentor_spec {
    padding-left: 1%;
    margin-bottom: 7%;
  }
  @media only screen and (max-width: 900px) {
    min-width: 80%;
    margin: 0 10%;
    p {
      padding: 0px;
    }
  }
`;
export const StyledMentorInfo = styled.div`
  border-top: 1px solid grey;
  display: flex;

  .MentorPage_InfoCard {
    padding-top: 100px;
    padding-left: 5%;
    padding-right: 5%;
    > img {
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    > p {
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
  }
  .withCompanyLogo {
    background: #feda6a;
    padding: 5% 5%;
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
    .flex-column-reverse {
      display: flex;
      flex-direction: column;
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
        height: 40px;
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
        height: auto;
      }
      button:nth-child(2) {
        padding: 10px;
        margin: 10px;
        height: auto;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    .withCompanyLogo {
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      z-index: 300;
      padding-bottom: 0;
      a {
        display: none;
      }
      > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      h1 {
        margin-top: 10px;
        font-size: 1rem;
      }
      h2 {
        font-size: 1rem;
      }

      background: white;
      .flex-column-reverse {
        display: flex;
        flex-direction: column-reverse;
        margin: 0;
      }
      .MentorPage_buttons {
        display: flex;
        flex-direction: row-reverse;
        position: fixed;
        bottom: -13px;
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
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      > p {
        border-left: none;
        padding-left: 10px;
        font-size: 1.2rem;
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
