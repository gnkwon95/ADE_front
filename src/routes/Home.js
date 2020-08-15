import React, { useState, useEffect } from "react";
import faker from "faker";
import shortid from "shortid";
import { BackTop, notification, Divider } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons'
import * as Comps from '../components/Home'
import "./Home.css";
import axios from "axios";

// faker.locale = "ko";

const DummyData = Array(5)
  .fill()
  .map(() => ({
    user: shortid.generate(),
    current_company: faker.company.companyName(),
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
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // *** AXIOS.GET from 백엔드
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

  return (
    <div className="home">
      <Comps.Banner />
      <Comps.Searchbox />
      <div className="home-mentorcard-container">
        <div className="home-mentorcard-filter">
          <Comps.Filter />
        </div>
        <div className="home-mentorcard-board">
          <div className="home-mentorcard-sort" style={{ fontSize:"12px", marginTop:"30px" , marginBottom:"10px" }}>
              최신순 <Divider type="vertical"/>
              별점순 <Divider type="vertical"/>
              리뷰 많은순 <Divider type="vertical"/>
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
