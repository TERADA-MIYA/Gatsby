import React from "react"
import PostCard from "../components/PostCard"
import PaginationBar from "../components/PaginationBar"

class archivePagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 1,
      postToShow: 3,
      arr: this.props.arr,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleFirstButton = this.handleFirstButton.bind(this)
    this.handlePrevButton = this.handlePrevButton.bind(this)
    this.handleNextButton = this.handleNextButton.bind(this)
    this.handleLastButton = this.handleLastButton.bind(this)
  }
  handleFirstButton() {
    this.setState({
      selected: 1
    })

  }
  handlePrevButton() {
    this.setState({
      selected: this.state.selected - 1 > 0 ? this.state.selected - 1 : this.state.selected
    })

  }
  handleNextButton() {
    this.setState({
      selected: this.state.selected + 1 <= Math.ceil(this.props.arr.length / this.state.postToShow) ? this.state.selected + 1 : this.state.selected
    })

  }
  handleLastButton() {
    this.setState({
      selected: Math.ceil(this.props.arr.length / this.state.postToShow)
    })

  }
  handleClick(e) {
    // 게시판 번호 클릭시 실행
    this.setState({
      selected: e.target.innerText * 1 // 숫자
    })
    //document.documentElement.scrollTop = 0;
  }

  render() {
    const postNumber = 3 * (this.state.selected - 1)
    const { postToShow } = this.state
    const numberOfPost = this.state.arr.length
    const selectedPost = this.state.arr.filter(function (s, idx) {
      return postNumber <= idx && idx < postNumber + postToShow
    })
    return (
      <div className="archive-post">
        <PostCard arr={selectedPost} />
        <PaginationBar
          numberOfPost={numberOfPost}
          handleClick={this.handleClick}
          selected={this.state.selected}
          handleFirstButton={this.handleFirstButton}
          handlePrevButton={this.handlePrevButton}
          handleNextButton={this.handleNextButton}
          handleLastButton={this.handleLastButton} />
      </div>
    )
  }
}

export default archivePagination
