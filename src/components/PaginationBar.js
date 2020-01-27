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
    for (let i = 1; i <= this.state.page; i++) {
      i === this.props.selected ? result.push(<Pagination.Item key={Math.random()} className='active' onClick={this.props.handleClick}>{`${i}`}</Pagination.Item>) : result.push(<Pagination.Item onClick={this.props.handleClick} key={Math.random()}>{`${i}`}</Pagination.Item>)
    }
    return (
      <Row>
        <Col className="sm-12">
          <Pagination >
            <span className='pagination-span'>
              <Pagination.First onClick={this.props.handleFirstButton} />
              <Pagination.Prev onClick={this.props.handlePrevButton} />
              {result}
              <Pagination.Next onClick={this.props.handleNextButton} />
              <Pagination.Last onClick={this.props.handleLastButton} />
            </span>
          </Pagination>
        </Col>
      </Row>
    )
  }
}

export default PaginationBar
