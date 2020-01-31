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
    const { page } = this.state
    let result = []
    if (this.props.selected === 1 || this.props.selected === 2) {
      for (let i = 1; i <= this.state.page; i++) {
        if (i > 3) { break }
        i === this.props.selected ? result.push(<Pagination.Item key={Math.random()} onClick={this.props.handleClick} className='active'>{`${i}`}</Pagination.Item>) : result.push(<Pagination.Item key={Math.random()} onClick={this.props.handleClick}>{`${i}`}</Pagination.Item>)
      }
      if (3 < this.state.page) {
        result.push(<Pagination.Ellipsis key={Math.random()} />)
        result.push(<Pagination.Item key={Math.random()} onClick={this.props.handleClick}>{`${this.state.page}`}</Pagination.Item>)
      }
    }
    else {
      for (let i = this.props.selected - 1; i <= this.state.page; i++) {
        if (i - this.props.selected > 1) { break }
        i === this.props.selected ? result.push(<Pagination.Item key={Math.random()} onClick={this.props.handleClick} className='active'>{`${i}`}</Pagination.Item>) : result.push(<Pagination.Item key={Math.random()} onClick={this.props.handleClick}>{`${i}`}</Pagination.Item>)
      }
      if (this.props.selected + 1 < this.state.page) {
        result.push(<Pagination.Ellipsis key={Math.random()} />)
        result.push(<Pagination.Item key={Math.random()} onClick={this.props.handleClick}>{`${this.state.page}`}</Pagination.Item>)
      }
      if (1 < this.props.selected - 2) {
        result.unshift(<Pagination.Ellipsis key={Math.random()} />)
        result.unshift(<Pagination.Item key={Math.random()} onClick={this.props.handleClick}>{`${1}`}</Pagination.Item>)
      }
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
