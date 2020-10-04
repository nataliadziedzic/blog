import React from 'react';
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ImagesSection from "../components/Post/ImagesSection";
import PostWrapper from "../components/Post/PostWrapper";

const Post = ({ data }) => {
  const { datoCmsPost } = data
    return (
        < PostWrapper >
            <h1>{datoCmsPost.title}</h1>
            {datoCmsPost.postContent.map(item => {
                const itemKey = Object.keys(item)[1];
                console.log(itemKey)
                switch (itemKey) {
                    case 'imageData':
                        return (
                            <ImagesSection>
                                <Img fluid={item[itemKey].fluid} key={item.id} />
                            </ImagesSection>
                        );
                    case 'headingContent':
                        return <h2>{item[itemKey]}</h2>;
                    case 'paragraphContent':
                        return <p>{item[itemKey]}</p>;
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