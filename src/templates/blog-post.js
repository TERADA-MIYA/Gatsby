import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Index from '../layouts/index'
import ScrollTab from '../layouts/scrollTap'
import '../styles/scrollTab.css'
import Post from '../layouts/post'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Index>
      <div className='desktop'>
        <div className='wrapper-2-8'>
          <div className='post-guide'>
            <ScrollTab categories={post.frontmatter.categories} toc={data.markdownRemark.headings} slug={data.markdownRemark.fields.slug} />
          </div>
          <Fragment>
            <Post>
              <div className='post-body' dangerouslySetInnerHTML={{ __html: post.html }} />
            </Post>
          </Fragment>
        </div>
      </div>
      <div className='mobile'>
        <div className='wrapper-10'>
          <Fragment>
            <Post>
              <div className='post-body' dangerouslySetInnerHTML={{ __html: post.html }} />
            </Post>
          </Fragment>
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
      fields{
        slug
      }
    }
  }
`