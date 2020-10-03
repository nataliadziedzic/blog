import React from 'react';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby';

const queryMainPhoto = graphql`
{
  file(name: {eq: "home-author-photo"}) {
      childImageSharp {
        fixed(width: 500, quality: 90) {
            ...GatsbyImageSharpFixed_noBase64
          }
      }
    }
  }
  `

const MainPhoto = () => {
    const mainPhoto = useStaticQuery(queryMainPhoto)
    return (
        <Img className="home__mainPhoto" fixed={mainPhoto.file.childImageSharp.fixed} />
    );
};
export default MainPhoto