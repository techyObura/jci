import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeB from "../components/HomeB";

const Home = () => {
  return (
    <div className=" mb-[500px] lg:mb-[100px]">
      <div className="">
        <Hero />
        <HomeB />
      </div>
    </div>
  );
};

export default Home;
