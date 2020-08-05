import React from "react";
import "./Home.css";
import { Carousel } from "antd";
import MainPageCarousel from "../components/mainpage/mainpagecarousel";


/*
state = {
    profile: []
}

getProfiles = () => {
    axios.get('profiles').then(res => this.setState({profiles: res.data}));
};

resetState = () => {
    this.getProfiles();
}
*/

const Home = () => {
  return (
    <MainPageCarousel />
  );
};

export default Home;
