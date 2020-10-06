import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, keywords, author }) => {
    const { site } = useStaticQuery(query)
    const { defaultTitle, defaultDescription, defaultAuthor, defaultImage } = site.siteMetadata
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        author: author || defaultAuthor,
        image: image || defaultImage,
        keywords: keywords || ["blog", "fashion blog", "outfits", "inspiration", "fashion ideas"],
    }
    return (
        <Helmet
            title={title}
            meta={[
                {
                    name: `description`,
                    content: seo.description,
                },
                {
                    property: `og:title`,
                    content: seo.title,
                },
                {
                    property: `og:image`,
                    content: seo.image,
                },
                {
                    property: `og:description`,
                    content: seo.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: seo.author,
                },
                {
                    name: `twitter:title`,
                    content: seo.title,
                },
                {
                    name: `twitter:description`,
                    content: seo.description,
                },
            ].concat(
                seo.keywords && seo.keywords.length > 0 ? {
                    name: `keywords`,
                    content: seo.keywords.join(", ")
                } : []
            )}
        />
    )
}
export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultAuthor: author
        defaultImage: image
      }
    }
  }
`

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
}
SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
}