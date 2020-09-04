import React, { useState, useEffect, useContext, useRef } from "react";
import faker from "faker";
import shortid from "shortid";
import { BackTop, notification, Divider, Button, Menu, Pagination, Anchor } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons'
import * as Comps from '../components/Home'
import "./Home.css";
import axios from "axios";
import { auth } from "firebase";
import {Log} from "../Log/Log";
import { AuthUserContext } from "../session";

const { Link } = Anchor;

faker.locale = "ko";

const scrollToRef = (ref) => window.scrollTo(0, ref)

axios.defaults.baseURL ='http://15.164.251.155'

const DummyData = Array(10)
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


const MentorData = () => {
    console.log("calling mentor data")
    const response = axios.get('http://15.164.251.155/profile_full/');
    console.log(response);
}


const Home = () => {
   // Log('Home', 'Load')
   const authUser = useContext(AuthUserContext)
   console.log("user: ", authUser)

  // *** Fetch 멘토 데이터 ***
   const [cards, setCards] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [min, setMin] = useState(null);
   const [max, setMax] = useState(null);
   const myRef = useRef(null);

   useEffect(() => {
     setMin(0);
     setMax(5);
     const fetchData = async () => {
       try {
         setError(null);
         setCards(null);
         setLoading(true);
         const response = await axios.get('http://15.164.251.155/profile_full/');
         console.log(response.data); //여기는 잘찍힘
         setCards(response.data); //이걸 어떻게 하는지 모르겠음. this.setState({cards: response.data})같은 느낌으로 하고싶은데
       } catch (e) {
         setError(e);
       }
       setLoading(false);
     };
     fetchData();
     console.log(cards);
   }, []);

   if (loading) return <div>로딩중..</div>;
   if (error) return <div>에러가 발생했습니다</div>;
   if (!cards) return null;

  // *** 알림 ***
  const openNotification = placement => {
    notification.open({
      message: `ConTag으로 취업할 시 1만원 환급!`,
      placement,
    });
  };


  const handleChange = value => (
    setMin ((value-1) * 5),
    setMax((value) * 5),

    //myRef.current.scrollIntoView({behavior: 'smooth', block:'start'})
    window.scrollTo(0, 265),
    console.log(cards)
  );

  return (
    <div  className="home">

      <Comps.Banner />
      <div ref={myRef} > </div>
        <Comps.Searchbox />
      <div  className="home-mentorcard-container" style={{maxWidth: "1280px", margin: "0 auto"}}>

        <div className="home-mentorcard-filter">
          <Comps.Filter />
        </div>
        <div  className="home-mentorcard-board">
          <div className="home-mentorcard-sort" style={{ marginTop:"30px", marginBottom:"10px" }}>
              <span key="recent">최신순</span> <Divider type="vertical"/>
              <span key="rating">별점순</span> <Divider type="vertical"/>
              <span key="reviews">리뷰 많은순</span>
          </div>

          <div className="home-mentorcard-cards">
            <h2>{cards.length}명의 멘토가 있습니다.</h2>
            {cards && cards.length>0 && cards.slice(min, max).map(data =>
                <Comps.MentoCard key={data.user} data={data} />
            )}

          <Pagination
              defaultCurrent={1}
              defaultPageSize={5} //default size of page
              onChange={handleChange}
              total={cards.length} //total number of card data available
            />
          </div>


          {/*<div className="home-mentorcard-cards">
          <h2>{cards.length}명의 멘토가 있습니다.</h2>
            {DummyData && DummyData.length > 0 && DummyData.slice(min, max).map(data =>
                <Comps.MentoCard key={data.user} data={data} />
            )}

              <Pagination
                  defaultCurrent={1}
                  defaultPageSize={5} //default size of page
                  onChange={handleChange}
                  total={DummyData.length} //total number of card data available
                />
          </div>*/}



        </div>
      </div>
      <BackTop>
        <UpCircleTwoTone twoToneColor="orange" style={{ fontSize: '32px' }} />
      </BackTop>
    </div>
  );
};

export default Home;
