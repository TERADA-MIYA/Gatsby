import React from "react"
import { graphql } from "gatsby"
import Index from '../layouts/index'
import ScrollTab from '../layouts/scrollTap'
import '../styles/scrollTab.css'
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Index>
      <div className='desktop'>
        <div className='wrapper-2-8'>
          <div className='post-guide'>
            <ScrollTab categories={post.frontmatter.categories} toc={data.markdownRemark.headings} />
          </div>
          <div className='post-item'>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
      <div className='mobile'>
        <div className='wrapper-10'>
          <div className='post-item'>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </Index>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        categories
      }
      headings{
        value
        depth
      }
    }
  }
`