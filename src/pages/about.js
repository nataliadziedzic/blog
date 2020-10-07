import React from 'react';
import { graphql } from "gatsby";
import Img from "gatsby-image";

const AboutPage = ({ data }) => {
  return (
    <div className="about">
      <Img className="about__photo" fixed={data.datoCmsAbout.myPicture.fixed} />
      <div className="about__bio">
        <h1 className="about__title">Let's get to know each other!</h1>
        <p className="about__description">{data.datoCmsAbout.description}</p>
      </div>
    </div>
  );
};

export const query = graphql`
  {
    datoCmsAbout {
      description
      myPicture {
        fixed(width: 450) {
          ...GatsbyDatoCmsFixed_noBase64
        }
      }
    }
  }
`
export default AboutPage