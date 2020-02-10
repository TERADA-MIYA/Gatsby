import React from "react"
import Archive from "../layouts/archive"
import Index from "../layouts/index"
import { Container, Row, Col, Alert } from "react-bootstrap"
import '../styles/PostCard.css'

export default ({ pageContext: { categories } }) => {
  // gatsby node 에서 한번만 실행하므로 페이지 하나 생성
  console.log(categories)
  return (
    <Index>
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
    </Index>
  )
}