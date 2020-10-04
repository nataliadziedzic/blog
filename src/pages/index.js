import React from "react";
import { graphql } from "gatsby";
import slugify from "slugify";
import BackgroundSection from "../components/Home/BackgroundSection";
import StartSectionWrapper from "../components/Home/StartSectionWrapper.js";
import PostsSection from "../components/Home/PostsSection/PostsSection";
import PostPreview from "../components/Home/PostsSection/PostPreview";
import PostsContainer from "../components/Home/PostsSection/PostsContainer";
import SelfDescription from "../components/Home/SelfDescription/SelfDescription"

const IndexPage = ({ data }) => {
  const { allDatoCmsPost: { nodes } } = data
  const handleMenuOnScroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      const menu = document.querySelector(".header");
      const logo = document.querySelector(".header__logo");
      const navigation = document.querySelector(".header__list");
      menu.style.height = "50px";
      logo.style.display = "none";
      if (window.innerWidth < 1024) {
        navigation.style.display = "flex";
      }
    }
    else {
      const menu = document.querySelector(".header");
      const logo = document.querySelector(".header__logo");
      const navigation = document.querySelector(".header__list");
      menu.style.height = "150px";
      logo.style.display = "block";
      if (window.innerWidth < 1024) {
        navigation.style.display = "none";
      }
    }
  }
  window.addEventListener("scroll", handleMenuOnScroll);
  return (
    <>
      <StartSectionWrapper>
        <BackgroundSection className="home__mainBackground" />
      </StartSectionWrapper>
      <SelfDescription />
      <PostsSection>
        <PostsContainer>
          {nodes.map(({ title, date, featuredImage }) => (
            <PostPreview key={title} title={title} date={date} image={featuredImage.fluid} slug={slugify(title, { lower: true })} />
          ))}
        </PostsContainer>
      </PostsSection>
    </>
  );
};

export const query = graphql`
{
  allDatoCmsPost {
    nodes {
      date
      title
      featuredImage {
        fluid(maxWidth: 450){
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
}
`


export default IndexPage
