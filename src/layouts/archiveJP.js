import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ArchivePaginationJP from "../layouts/archivePaginationJP"

// Archive는 독립적으로 Archive 생성
const ArchiveJP = props => {
  const data = useStaticQuery(graphql`
    query getAllPostsInJapanese {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {lang: {eq: "jp"}}}) {
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
      <ArchivePaginationJP arr={postFiltered} />
    </>
  )
}

export default ArchiveJP
