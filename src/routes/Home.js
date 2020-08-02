import React from "react";
import "./Home.css";
import { Carousel } from "antd";

const Home = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3>상품소개 이미지 1</h3>
      </div>
      <div>
        <h3>상품소개 이미지 2</h3>
      </div>
      <div>
        <h3>상품소개 이미지 3</h3>
      </div>
      <div>
        <h3>상품소개 이미지 4</h3>
      </div>
    </Carousel>
  );
};

export default Home;
