import React from "react"
import Archive from "../layouts/archiveJP"
import IndexJP from "../layouts/indexJP"
import { Container, Row, Col, Alert } from "react-bootstrap"
import '../styles/PostCard.css'

// 아래 arg 형식으로 gatsby-node로 부터 데이터 받아옴 - 안쓸거임
export default ({ pageContext: { categories } }) => {
  // Archive 레이아웃에 각 요소 보냄 == 각 요소를 빌드 시 자동으로  업데이트 명령
  // Archive 는 자체 쿼리로 페이지 내용 생성
  // 여기서 한번만 페이지 생성하고 싶다
  return (
    <IndexJP>
      <Container className="archive archive-all">
        <Alert className='blog-category-alert'>
          Recent Posts {`of ${categories}` || ''}
        </Alert>
        <Row>
          <Col sm={12}>
            <Archive categories={categories} />
          </Col>
        </Row>
      </Container>
    </IndexJP>
  )
}