import React from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image";

const PostPreview = ({ title, date, image, slug }) => {
  return (
    <Link className="post" to={`/${slug}`}>
      <h2 className="post__title" >{title}</h2>
      <p className="post__date" >{date}</p>
      <div className="post__bgContainer">
        <Img className="post__background" fluid={image} />
      </div>
    </Link>
  );
};
export default PostPreview