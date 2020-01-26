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
          slug: node.fields.slug
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
  }
  )
}
    // 카테고리별 카테고리페이지 생성
    // 컴포넌트랑 컨텍스트 의미 없음 - 각 페이지에 대해서 실행하지 않기 때문에
    // 중복 페이지 생성 방지를 위해 템플릿에서 context 받아서 사용 안함
    // 페이지 생성 쿼리 효율 스위치
/* 스위치 변경 불가, 스위치 내 변수 변경 불가
let javascript = true
let webHacking = true
let python = true
let react = true
let algoritm = true
// 카테고리 이름 전부 소문자 필터링 혹시모를경우를 대비해
result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  console.log(node.frontmatter.categories.toLowerCase(), javascript)
  switch (node.frontmatter.categories.toLowerCase()) {
    case 'javascript' & javascript: {
      javascript = false
      createPage({
        path: `${node.frontmatter.categories.toLowerCase()}`,
        component: path.resolve('./src/templates/blog-category.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          category: node.frontmatter.categories.toLowerCase()
        }
      })
      break
    }
    case 'webHacking' & webHacking: {
      webHacking = false
      createPage({
        path: `${node.frontmatter.categories.toLowerCase()}`,
        component: path.resolve('./src/templates/blog-category.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          category: node.frontmatter.categories.toLowerCase()
        }
      })
      break
    }
    case 'python' & python: {
      python = false
      createPage({
        path: `${node.frontmatter.categories.toLowerCase()}`,
        component: path.resolve('./src/templates/blog-category.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          category: node.frontmatter.categories.toLowerCase()
        }
      })
      break
    }
    case 'react' & react: {
      react = false
      createPage({
        path: `${node.frontmatter.categories.toLowerCase()}`,
        component: path.resolve('./src/templates/blog-category.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          category: node.frontmatter.categories.toLowerCase()
        }
      })
      break
    }
    case 'algoritm' & algoritm: {
      algoritm = false
      createPage({
        path: `${node.frontmatter.categories.toLowerCase()}`,
        component: path.resolve('./src/templates/blog-category.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          category: node.frontmatter.categories.toLowerCase()
        }
      })
      break
    }
    default: {
      createPage({
        path: `talk`,
        component: path.resolve('./src/templates/blog-category.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          category: node.frontmatter.categories.toLowerCase()
        }
      })
      break
    }
  }

})
})
}

*/