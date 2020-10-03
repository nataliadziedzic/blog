import React from "react";
import BackgroundSection from "../components/Home/BackgroundSection";
import HomeWrapper from "../components/Home/HomeWrapper.js"
// import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <HomeWrapper>
      <BackgroundSection className="home__mainBackground" />
    </HomeWrapper>
  );
};

export default IndexPage
