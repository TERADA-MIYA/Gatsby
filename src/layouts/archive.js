import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ArchivePagination from "../layouts/archivePagination"

// Archive는 독립적으로 Archive 생성
const Archive = props => {
  const data = useStaticQuery(graphql`
    query getAllPosts {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}){
        edges{
        node {
          frontmatter {
            title
            date
            excerpt
            categories
            tags
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
    <Fragment>
      <ArchivePagination arr={postFiltered} />
    </Fragment>
  )
}

export default Archive
