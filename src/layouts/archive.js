import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ArchivePagination from "../layouts/archivePagination"

// Archive는 독립적으로 Archive 생성
const Archive = props => {
  const data = useStaticQuery(graphql`
    query getAllPosts {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {lang: {nin: "jp"}}}) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              categories
              tags
              header {
                image
              }
            }
          }
        }
      }
  }
  `)

  const postArr = data.allMarkdownRemark.edges
  const postFiltered = postArr.filter(function (e) {
    return e.node.frontmatter.categories === props.categories
  })
  return (
    <>
      <ArchivePagination arr={postFiltered} />
    </>
  )
}

export default Archive
