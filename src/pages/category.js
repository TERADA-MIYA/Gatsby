import React from "react"
import { graphql } from 'gatsby'
import Index from "../layouts/index"
import Category from '../layouts/category'

export default ({ data }) => (
  <Index>
    <Category />
  </Index>
)

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