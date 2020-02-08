import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Index from '../layouts/index'
import ScrollTab from '../layouts/scrollTap'
import { Row, Col } from 'react-bootstrap'
import '../styles/post.css'
import Icon from '../components/Icon'

export default ({ data }) => {
  const post = data.markdownRemark
  if (post.frontmatter.header !== null) {
    var postHeaderImage = post.frontmatter.header.image
  }
  const result = post.frontmatter.tags.map(e => {
    return (
      <Icon name={e} w={36} h={36} key={e} />
    )
  })
  return (
    <Index>
      <Row>
        <Col sm={12}>
          <div className="blog-post-head">
            <img src={postHeaderImage !== undefined ? `/images/posts/header/${postHeaderImage}` : 'https://source.unsplash.com/random/1600x900'} />
          </div>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col sm={11}>
          <hr />
        </Col>
      </Row>
      <Row >
        <Col sm={2}>
          <ScrollTab categories={post.frontmatter.categories} toc={data.markdownRemark.headings} slug={data.markdownRemark.fields.slug} />
        </Col>
        <Col sm={10}>
          <Row>
            <Col sm={11}>
              <hr style={{ width: '90%' }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className='blog-post-title'>
                {post.frontmatter.title}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={11}>
              <hr style={{ width: '90%' }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='blog-post-icon'>
                {result}
              </div>
              <div className='blog-post-item' dangerouslySetInnerHTML={{ __html: post.html }} />
            </Col>
          </Row>
        </Col>
      </Row>
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
        header{
          image
        }
        tags
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