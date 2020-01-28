import React from "react"
import { graphql } from 'gatsby'
import About from "../layouts/about"
import Index from '../layouts/index'

export default ({ data }) => {
    return (
        <Index>
            <About />
        </Index>
    )
}

/* 쿼리는 나중에~
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
*/