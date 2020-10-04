const path = require(`path`)
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
    query queryPosts {
        allDatoCmsPost {
          nodes {
            title
            id
          }
        }
      }
  `);
  // Create blog post pages.
  result.data.allDatoCmsPost.nodes.forEach(post => {
    const slug = slugify(post.title, { lower: true });
    createPage({
      path: `/${slug}`,
      component: blogPostTemplate,
      context: { id: post.id },
    });
  });
};