import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import MainPhoto from "./MainPhoto"

const queryBackground = graphql`
       {
         file(name: { eq: "home" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }   
`
const BackgroundSection = ({ className }) => {
  const backgroundData = useStaticQuery(queryBackground);
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={backgroundData.file.childImageSharp.fluid}
      backgroundColor={`#fff`}
      id="home"
    >
      <MainPhoto />
      <div className="home__introductionBox">
        <h1 className="home__greeting">Hi there,</h1>
        <p className="home__intro">Welcome to my blog where fashion becomes simple.</p>
      </div>
    </BackgroundImage>
  );
};
export default BackgroundSection