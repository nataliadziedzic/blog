import React from "react";
import { graphql } from "gatsby";
import slugify from "slugify";
import BackgroundSection from "../components/Home/BackgroundSection";
import StartSectionWrapper from "../components/Home/StartSectionWrapper.js";
import PostsSection from "../components/Home/PostsSection/PostsSection";
import PostPreview from "../components/Home/PostsSection/PostPreview";
import PostsContainer from "../components/Home/PostsSection/PostsContainer";
import SelfDescription from "../components/Home/SelfDescription/SelfDescription";
import SEO from "../components/Seo";

const IndexPage = ({ data }) => {
  const { allDatoCmsPost: { nodes } } = data
  return (
    <>
      <SEO />
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
