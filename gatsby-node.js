const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

/* not working
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/jp`) {
    console.log('dir')
    page.matchPath = `/jp/*`
    createPage(page)
  }
}
*/

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  const { createPage } = actions
  return graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            categories
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }  
  `).then(result => {
    // 포스트별 페이지 생성
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        }
      })
    })
    // 이하 각 페이지 매뉴얼리 생성
    createPage({
      path: `javascript`,
      component: path.resolve(`./src/templates/blog-category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'javascript'
      }
    })
    createPage({
      path: `react`,
      component: path.resolve(`./src/templates/blog-category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'react'
      }
    })
    createPage({
      path: `webhacking`,
      component: path.resolve(`./src/templates/blog-category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'webhacking'
      }
    })
    createPage({
      path: `algorithm`,
      component: path.resolve(`./src/templates/blog-category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'algorithm'
      }
    })
    createPage({
      path: `talk`,
      component: path.resolve(`./src/templates/blog-category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'talk'
      }
    })
    createPage({
      path: `python`,
      component: path.resolve(`./src/templates/blog-category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'python'
      }
    })
    // 이하 JP 페이지
    createPage({
      path: `jp`,
      component: path.resolve(`./src/templates/blog-home-jp.js`),
    })
    createPage({
      path: `/jp/javascript`,
      component: path.resolve(`./src/templates/blog-categoryJP.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'javascript'
      }
    })
    createPage({
      path: `/jp/react`,
      component: path.resolve(`./src/templates/blog-categoryJP.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'react'
      }
    })
    createPage({
      path: `/jp/webhacking`,
      component: path.resolve(`./src/templates/blog-categoryJP.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'webhacking'
      }
    })
    createPage({
      path: `/jp/algorithm`,
      component: path.resolve(`./src/templates/blog-categoryJP.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'algorithm'
      }
    })
    createPage({
      path: `/jp/talk`,
      component: path.resolve(`./src/templates/blog-categoryJP.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'talk'
      }
    })
    createPage({
      path: `/jp/python`,
      component: path.resolve(`./src/templates/blog-categoryJP.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        categories: 'python'
      }
    })
  }
  )
}

