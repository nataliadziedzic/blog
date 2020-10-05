import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links"

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
    const handleMenuOnScroll = () => {
        const menu = document.querySelector(".header");
        const logo = document.querySelector(".header__logo");
        const navigation = document.querySelector(".header__list");
        const listItem = document.querySelectorAll(".header li");
        listItem.forEach(li => li.style.transition = ".4s")
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            menu.style.height = "50px";
            logo.style.display = "none";
            listItem.forEach(li => li.style.color = "#555")
            if (window.innerWidth < 1024) {
                navigation.style.display = "flex";
            }
        }
        else {
            menu.style.height = "150px";
            logo.style.display = "block";
            listItem.forEach(li => li.style.color = "#fff")
            if (window.innerWidth < 1024) {
                navigation.style.display = "none";
            }
        }
    }
    window.addEventListener("scroll", handleMenuOnScroll);
    return (
        <div className="header">
            <div className="header__logo logo">
                <span className="logo__name">nurthixblog</span>
                <Img className="logo__img" fixed={data.file.childImageSharp.fixed} />
            </div>
            <ul className="header__list">
                <AnchorLink className="header__listItem" to="/#home" stripHash><li>Home</li></AnchorLink>
                <AnchorLink className="header__listItem" to="/#posts" stripHash><li>Posts</li></AnchorLink>
                <AnchorLink className="header__listItem" to="/about"><li>About</li></AnchorLink>
                <AnchorLink className="header__listItem" to="/contact"><li>Contact</li></AnchorLink>
            </ul>
        </div>
    );
};

export default Header