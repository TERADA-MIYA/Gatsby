import React from "react"
import { graphql } from "gatsby"
import Index from '../layouts/index'
import IndexJP from '../layouts/indexJP'
import ScrollTab from '../layouts/scrollTap'
import { Row, Col } from 'react-bootstrap'
import '../styles/post.css'
import Icon from '../components/Icon'
import { Helmet } from "react-helmet"

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
  console.log(post.frontmatter)
  if (post.frontmatter.lang === 'jp') {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{post.frontmatter.title} </title>
          <meta name="description" content={[post.frontmatter.excerpt, post.frontmatter.categories, post.frontmatter.tags, post.frontmatter.date]} />
          <meta name="author" content="Terada Dante" />
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="테라다 단테의 블로그" />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:url" content={`https://terada-dante.netlify.com/${post.frontmatter.categories}/${post.frontmatter.title}/`} />
          <meta property="og:description" content={`${post.frontmatter.excerpt}`} />
          <meta property="article:published_time" content={`${post.frontmatter.date}T00:00:00+00:00:00`} />
          <link rel="canonical" href={`https://terada-dante.netlify.com/${post.frontmatter.categories}/${post.frontmatter.title}/`} />
        </Helmet>
        <IndexJP>
          <Row>
            <Col sm={12}>
              <div className="blog-post-head">
                <img alt={`${post.frontmatter.title}`} src={postHeaderImage !== undefined ? `/images/posts/header/${postHeaderImage}` : `/images/home/${post.frontmatter.categories}.jpg`} />
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
        </IndexJP>
      </>
    )
  }
  else {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{post.frontmatter.title} </title>
          <meta name="description" content={[post.frontmatter.excerpt, post.frontmatter.categories, post.frontmatter.tags, post.frontmatter.date]} />
          <meta name="author" content="Terada Dante" />
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:site_name" content="Terada DanteノBlog" />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:url" content={`https://terada-dante.netlify.com/${post.frontmatter.categories}/${post.frontmatter.title}/`} />
          <meta property="og:description" content={`${post.frontmatter.excerpt}`} />
          <meta property="article:published_time" content={`${post.frontmatter.date}T00:00:00+00:00:00`} />
          <link rel="canonical" href={`https://terada-dante.netlify.com/${post.frontmatter.categories}//${post.frontmatter.title}/`} />
        </Helmet>
        <Index>
          <Row>
            <Col sm={12}>
              <div className="blog-post-head">
                <img alt={`${post.frontmatter.title}`} src={postHeaderImage !== undefined ? `/images/posts/header/${postHeaderImage}` : `/images/home/${post.frontmatter.categories}.jpg`} />
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
      </>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
          markdownRemark(fields: {slug: {eq: $slug }}) {
          html
      frontmatter {
          title
        categories
        header{
          image
        }
        tags
        lang
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