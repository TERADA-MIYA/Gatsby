import React from "react"
import PostCard from "../components/PostCard"
import PaginationBar from "../components/PaginationBar"

class archivePagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postNumber: 0,
      postToShow: 3,
      selected: 1,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleButton = this.handleButton.bind(this)
  }
  handleButton(e) {
    // 게시판 버튼 클릭시 실행
    console.log(e.target.parentNode)

  }
  handleClick(e) {
    // 게시판 번호 클릭시 실행
    this.setState({
      postNumber: 3 * e.target.innerText - 3,
      selected: e.target.innerText * 1 // 숫자
    })
    //document.documentElement.scrollTop = 0;
  }

  render() {
    // 페이지 번호 1번 선택
    //document.querySelector('.pagination-span').childNodes[2]
    //
    const { postNumber, postToShow } = this.state
    const numberOfPost = this.props.arr.length
    const { arr } = this.props
    const selectedPost = arr.filter(function (s, idx) {
      return postNumber <= idx && idx < postNumber + postToShow
    })
    if (selectedPost.length > 0) {
      return (
        <div className="archive-post">
          <PostCard arr={selectedPost} />
          <PaginationBar numberOfPost={numberOfPost} handleClick={this.handleClick} selected={this.state.selected} handleButton={this.handleButton} />
        </div>
      )
    }
  }

}

export default archivePagination
