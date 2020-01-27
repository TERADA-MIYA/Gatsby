import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ArchivePagination from "../layouts/archivePagination"
import { Container, Row, Col } from "react-bootstrap"
import Index from "../layouts/index"

// Archive는 독립적으로 Archive 생성
const Archive = props => {
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
    }
  `)

  // 카테고리별 포스트 배열 정의 후 PostCard 컴포넌트에 전송하여 렌더링
  let javascript = []
  let webhacking = []
  let react = []
  let python = []
  let algorithm = []
  let talk = []
  data.allMarkdownRemark.nodes.forEach(element => {
    switch (element.frontmatter.categories.toLowerCase()) {
      case "javascript":
        javascript.unshift(element)
        break
      case "webhacking":
        webhacking.unshift(element)
        break
      case "react":
        react.unshift(element)
        break
      case "algorithm":
        algorithm.unshift(element)
        break
      case "python":
        python.unshift(element)
        break
      default:
        talk.unshift(element)
        break
    }
  })
  switch (props.categories) {
    case "javascript":
      return (
        <Index>
          <Container className="archive archive-all">
            <div className="text-center h1" style={{ marginBottom: "20px" }}>
              Recent Posts
            </div>
            <Row>
              <Col sm={12}>
                <ArchivePagination arr={javascript} />
              </Col>
            </Row>
          </Container>
        </Index>
      )
    case "python":
      return (
        <Index>
          <Container className="archive archive-all">
            <div className="text-center h1" style={{ marginBottom: "20px" }}>
              Recent Posts
            </div>
            <Row>
              <Col sm={12}>
                <ArchivePagination arr={python} />
              </Col>
            </Row>
          </Container>
        </Index>
      )
    case "webhacking":
      return (
        <Index>
          <Container className="archive archive-all">
            <div className="text-center h1" style={{ marginBottom: "20px" }}>
              Recent Posts
            </div>
            <Row>
              <Col sm={12}>
                <ArchivePagination arr={webhacking} />
              </Col>
            </Row>
          </Container>
        </Index>
      )
    case "react":
      return (
        <Index>
          <Container className="archive archive-all">
            <div className="text-center h1" style={{ marginBottom: "20px" }}>
              Recent Posts
            </div>
            <Row>
              <Col sm={12}>
                <ArchivePagination arr={react} />
              </Col>
            </Row>
          </Container>
        </Index>
      )
    case "algorithm":
      return (
        <Index>
          <Container className="archive archive-all">
            <div className="text-center h1" style={{ marginBottom: "20px" }}>
              Recent Posts
            </div>
            <Row>
              <Col sm={12}>
                <ArchivePagination arr={algorithm} />
              </Col>
            </Row>
          </Container>
        </Index>
      )
    default:
      return (
        <Index>
          <Container className="archive archive-all">
            <div className="text-center h1" style={{ marginBottom: "20px" }}>
              Recent Posts
            </div>
            <Row>
              <Col sm={12}>
                <ArchivePagination arr={talk} />
              </Col>
            </Row>
          </Container>
        </Index>
      )
  }
}

export default Archive
