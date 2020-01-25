import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import PostCard from '../components/PostCard'
import { Container, Row, Col } from "react-bootstrap"

const Archive = (props) => {
    const data = useStaticQuery(graphql`
    query getAllPostsInKorean {
        allMarkdownRemark(filter: {frontmatter: {lang: {eq: "kr"}}}) {
          nodes {
            frontmatter {
              title
              date(formatString: "MMM/D/YYYY")
              excerpt
              categories
            }
          }
        }
    }`)

    const postArr = data.allMarkdownRemark.nodes

    switch (props.category) {
        default:
            return (
                <Container className='archive archive-all'>
                    <div className='text-center h1' style={{ marginBottom: '20px' }}>Recent Posts</div>
                    <Row>
                        <Col sm={12}>
                            <PostCard postArr={postArr} />
                        </Col>
                    </Row>
                </Container>
            )
    }
}

export default Archive