import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"

function Archive(props) {
    return (
        <Container>
            This archive depends on {props.category} !
                <Row>
                <Col sm={12}> 최근 포스팅</Col >
                <Col sm={6}>
                    이곳에 포스트의 제목과 excerpt 작성시각 카테고리 등이 들어가고
            </Col>
                <Col sm={6}>여기에 코드 미리보기나 이미지가 올라갑니다.</Col>
                <Col sm={6}>
                    이곳에 포스트의 제목과 excerpt 작성시각 카테고리 등이 들어가고
            </Col>
                <Col sm={6}>여기에 코드 미리보기나 이미지가 올라갑니다.</Col>
                <Col sm={6}>
                    이곳에 포스트의 제목과 excerpt 작성시각 카테고리 등이 들어가고
            </Col>
                <Col sm={6}>여기에 코드 미리보기나 이미지가 올라갑니다.</Col>
                <Col sm={6}>
                    이곳에 포스트의 제목과 excerpt 작성시각 카테고리 등이 들어가고
            </Col>
                <Col sm={6}>여기에 코드 미리보기나 이미지가 올라갑니다.</Col>
            </Row >
        </Container >
    )
}

export default Archive