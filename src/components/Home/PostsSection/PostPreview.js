import React from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image";

const PostPreview = ({ title, date, image }) => {
  return (
    <Link className="post" to="/">
      <h2 className="post__title" >{title}</h2>
      <p className="post__date" >{date}</p>
      <div className="post__bgContainer">
        <Img className="post__background" fluid={image} />
      </div>
    </Link>
  );
};
export default PostPreview