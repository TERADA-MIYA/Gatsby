import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import PostCard from '../components/PostCard'
import { Container, Row, Col } from "react-bootstrap"
import Index from "../layouts/index"

// Archive는 독립적으로 Archive 생성
const Archive = (props) => {
    const data = useStaticQuery(graphql`
    query getAllPosts {
        allMarkdownRemark {
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


    // 카테고리별 포스트 배열 정의 후 PostCard 컴포넌트에 전송하여 렌더링
    let javascript = []
    let webhacking = []
    let react = []
    let python = []
    let algorithm = []
    let talk = []
    data.allMarkdownRemark.nodes.forEach(element => {
        switch (element.frontmatter.categories.toLowerCase()) {
            case 'javascript':
                javascript.push(element)
                break
            case 'webhacking':
                webhacking.push(element)
                break
            case 'react':
                react.push(element)
                break
            case 'algorithm':
                algorithm.push(element)
                break
            case 'python':
                python.push(element)
            default:
                talk.push(element)
                break
        }
    })
    switch (props.categories) {
        case 'javascript':
            return (
                <Index>
                    <Container className='archive archive-all'>
                        <div className='text-center h1' style={{ marginBottom: '20px' }}>Recent Posts</div>
                        <Row>
                            <Col sm={12}>
                                <PostCard arr={javascript} />
                            </Col>
                        </Row>
                    </Container>
                </Index>
            )
        case 'python':
            return (
                <Index>
                    <Container className='archive archive-all'>
                        <div className='text-center h1' style={{ marginBottom: '20px' }}>Recent Posts</div>
                        <Row>
                            <Col sm={12}>
                                <PostCard arr={python} />
                            </Col>
                        </Row>
                    </Container>
                </Index>
            )
        case 'webhacking':
            return (
                <Index>
                    <Container className='archive archive-all'>
                        <div className='text-center h1' style={{ marginBottom: '20px' }}>Recent Posts</div>
                        <Row>
                            <Col sm={12}>
                                <PostCard arr={webhacking} />
                            </Col>
                        </Row>
                    </Container>
                </Index>
            )
        case 'react':
            return (
                <Index>
                    <Container className='archive archive-all'>
                        <div className='text-center h1' style={{ marginBottom: '20px' }}>Recent Posts</div>
                        <Row>
                            <Col sm={12}>
                                <PostCard arr={react} />
                            </Col>
                        </Row>
                    </Container>
                </Index>
            )
        case 'algorithm':
            return (
                <Index>
                    <Container className='archive archive-all'>
                        <div className='text-center h1' style={{ marginBottom: '20px' }}>Recent Posts</div>
                        <Row>
                            <Col sm={12}>
                                <PostCard arr={algorithm} />
                            </Col>
                        </Row>
                    </Container>
                </Index>
            )
        default:
            return (
                <Index>
                    <Container className='archive archive-all'>
                        <div className='text-center h1' style={{ marginBottom: '20px' }}>Recent Posts</div>
                        <Row>
                            <Col sm={12}>
                                <PostCard arr={talk} />
                            </Col>
                        </Row>
                    </Container>
                </Index>
            )
    }
}

export default Archive