import React, { useState, useEffect } from "react";
import faker from "faker";
import shortid from "shortid";
import { BackTop, notification, Divider, Button, Menu } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons'
import * as Comps from '../components/Home'
import "./Home.css";
import axios from "axios";

faker.locale = "ko";

const DummyData = Array(5)
  .fill()
  .map(() => ({
    user: shortid.generate(),
    current_company: faker.company.companyName(1),
    current_job: faker.name.jobTitle(),
    real_name: faker.name.findName(),
    work_period_from: faker.random.number(15),
    voter: faker.random.number(99),
    PR: faker.lorem.paragraph(),
    prepared_companies: Array(faker.random.number(5))
      .fill()
      .map(() => faker.random.word()),
    logo: faker.image.avatar(),
  }));


const Home = () => {

  // *** Fetch 멘토 데이터 ***
  // const [cards, setCards] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setError(null);
  //       setCards(null);
  //       setLoading(true);
  //       const response = await axios.get('http://15.164.251.155:8000/profiles/');
  //       setCards(response.data);
  //     } catch (e) {
  //       setError(e);
  //     }
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // if (!cards) return null; 

  // *** 알림 ***
  const openNotification = placement => {
    notification.open({
      message: `ConTag으로 취업할 시 1만원 환급!`,
      placement,
    });
  };

  useEffect(() => {
    openNotification('bottomLeft')
  }, [])
  
  // *** 렌더링 ***
  return (
    <div className="home">
      <Comps.Banner />
      <Comps.Searchbox />
      <div className="home-mentorcard-container" style={{maxWidth: "1280px", margin: "0 auto"}}>
        <div className="home-mentorcard-filter">
          <Comps.Filter />
        </div>
        <div className="home-mentorcard-board">
          <div className="home-mentorcard-sort" style={{ marginTop:"30px", marginBottom:"10px" }}>
              <span key="recent">최신순</span> <Divider type="vertical"/>
              <span key="rating">별점순</span> <Divider type="vertical"/>
              <span key="reviews">리뷰 많은순</span>
          </div>
          <div className="home-mentorcard-cards">
          <h2>{DummyData.length}명의 멘토가 있습니다.</h2>
            {DummyData.map(data => (
              <Comps.MentoCard key={data.user} data={data} />
            ))}
          </div>
        </div>
        <div style={{ width:"15%" }}></div>
      </div>
      <BackTop>
        <UpCircleTwoTone twoToneColor="orange" style={{ fontSize: '32px' }} />
      </BackTop>
    </div>
  );
};

export default Home;
