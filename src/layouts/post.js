import React from 'react';
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ImagesSection from "../components/Post/ImagesSection";
import PostWrapper from "../components/Post/PostWrapper";
import SEO from "../components/Seo";

const Post = ({ data }) => {
  const { datoCmsPost } = data
  const seoImage = datoCmsPost.featuredImage.fluid
  return (
    < PostWrapper className="postWrapper" >
      <SEO
        title={datoCmsPost.title}
        image={seoImage}
      />
      <h1 className="postWrapper__mainTitle">{datoCmsPost.title}</h1>
      <ImagesSection className="imagesSection">
        <Img className="imagesSection__img" fluid={datoCmsPost.featuredImage.fluid} />
      </ImagesSection>
      {datoCmsPost.postContent.map(item => {
        const itemKey = Object.keys(item)[1];
        switch (itemKey) {
          case 'headingContent':
            return <h2 className="postWrapper__heading">{item[itemKey]}</h2>;
          case 'paragraphContent':
            return <p className="postWrapper__paragraph">{item[itemKey]}</p>;
          case 'imageData':
            return (
              <ImagesSection className="imagesSection">
                <Img className="imagesSection__img" fluid={item[itemKey].fluid} key={item.id} />
              </ImagesSection>
            );
          default:
            return
        }
      })}
    </PostWrapper >
  );
};
export const query = graphql`
  query queryPost($id: String!){
    datoCmsPost(id: {eq: $id}) {
        title
        featuredImage {
          fluid(maxWidth: 600) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        postContent {
          ... on DatoCmsPostImage {
            imageData {
              fluid(maxWidth: 600) {
                ...GatsbyDatoCmsFluid_tracedSVG

              }
            }
            id
          }
          ... on DatoCmsHeading {
            headingContent
            id
          }
          ... on DatoCmsParagraph {
            paragraphContent
            id
          }
        }
      }
  }
`
export default Post