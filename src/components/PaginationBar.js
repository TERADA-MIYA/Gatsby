import React from "react"
import { Row, Col, Pagination } from "react-bootstrap"
import '../styles/Pagination.css'

class PaginationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: Math.ceil(this.props.numberOfPost / 3),
    }
  }

  render() {
    let result = []
    // 페이지 버튼을 생성
    for (let i = 1; i <= this.state.page; i++) {
      i === this.props.selected ? result.push(<Pagination.Item className='active' onClick={this.props.handleClick}>{`${i}`}</Pagination.Item>) : result.push(<Pagination.Item onClick={this.props.handleClick}>{`${i}`}</Pagination.Item>)
    }
    // 해결 됐는ㄷ데 li랑 a 가 사람 미치게함
    return (
      <Row>
        <Col className="sm-12">
          <Pagination >
            <span className='pagination-span'>
              <Pagination.First className='pagination-first' onClick={this.props.handleButton} />
              <Pagination.Prev className='pagination-prev' onClick={this.props.handleButton} />
              {result}
              <Pagination.Next className='pagination-next' onClick={this.props.handleButton} />
              <Pagination.Last className='pagination-last' onClick={this.props.handleButton} />
            </span>
          </Pagination>
        </Col>
      </Row>
    )
  }
}

export default PaginationBar
