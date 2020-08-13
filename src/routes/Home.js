import React, { useState } from "react";
import faker from "faker";
import shortid from "shortid";
import { Button, Breadcrumb } from 'antd';
import * as Comps from '../components/Home'
import "./Home.css";


const DummyData = Array(5)
  .fill()
  .map(() => ({
    id: shortid.generate(),
    title: faker.lorem.sentence(),
    profile: faker.name.findName(),
    in_list: faker.random.number(99),
    years: faker.random.number(10),
    info_paragraph: faker.lorem.paragraph(),
    prepared_companies: Array(faker.random.number(5))
      .fill()
      .map(() => faker.random.word()),
    img_src: "",
  }));



const Home = () => {

  return (
    <div className="home">
      <Comps.Banner />
      <Comps.Searchbox />
      <div className="home-mentorcard-container">
        <div className="home-mentorcard-filter">
          <Comps.Filter />
        </div>
        <div className="home-mentorcard-board">
          <div className="home-mentorcard-sort">
            <br />
            <Breadcrumb separator="">
              <Breadcrumb.Item>정렬</Breadcrumb.Item>
              <Breadcrumb.Separator>:</Breadcrumb.Separator>
              <Breadcrumb.Item>최신순</Breadcrumb.Item>
              <Breadcrumb.Separator>|</Breadcrumb.Separator>
              <Breadcrumb.Item>별점순</Breadcrumb.Item>
              <Breadcrumb.Separator>|</Breadcrumb.Separator>
              <Breadcrumb.Item>리뷰 많은 순</Breadcrumb.Item>
            </Breadcrumb> 
          </div>
          <div className="home-mentorcard-cards">
            <h2>10명이 검색되었습니다.</h2>
            {DummyData.map((data) => (
              <Comps.MentoCard key={data.id} data={data} />
            ))}
          </div>
        </div>
        <div style={{ width:"300px" }}></div>
      </div>
    </div>
  );
};

export default Home;
