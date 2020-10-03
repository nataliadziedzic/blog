import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby'
// import { Link } from "gatsby";

const query = graphql`
{
file(name: {eq: "header-lady"}) {
    childImageSharp {
      fixed(width: 128, height: 130, quality: 90) {
          ...GatsbyImageSharpFixed_noBase64
        }
    }
  }
}
`

const Header = () => {
    const data = useStaticQuery(query)
    return (
        <div className="header">
            <div className="header__logo logo">
                <span className="logo__name">nurthixblog</span>
                <Img className="logo__img" fixed={data.file.childImageSharp.fixed} />
            </div>
            <ul className="header__list">
                <li className="header__listItem">Home</li>
                <li className="header__listItem">Posts</li>
                <li className="header__listItem">About</li>
                <li className="header__listItem">Contact</li>
            </ul>
        </div>
    );
};

export default Header