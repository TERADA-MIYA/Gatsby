import React from "react"
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/PostCard.css"
import { Row } from "react-bootstrap"
import Icon from "../components/Icon"
import Date from '../components/Date'

function PostCard(props) {
  const result = props.arr.map(s => {
    const post = s.node.frontmatter
    const title = post.title
    const date = post.date
    const categories = post.categories
    const excerpt = post.excerpt.length > 110
      ? `${post.excerpt.substring(0, 110)}...`
      : post.excerpt
    if (post.tags) {
      var iconArr = post.tags.map((s) => {
        return (
          <span key={Math.random()}>
            <Icon name={`${s}`} w='24' h='24' />
          </span>
        )
      })
    }
    return (
      <div className="postcard-inner" key={Math.random()}>
        <Link to={`/${categories}/${date}-${title}/`}>
          <Row className="aling-items-center">
            <div className="col-lg-6">
              <div style={{ overflow: "hidden", position: "relative" }}>
                {/*이미지 크기 맞추고 그안에 핏인되게 조정 */}
                <img
                  alt="이미지는 alt를 가져야함"
                  src="https://source.unsplash.com/random/600x300"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="h3 mt-4 mt-lg-0">{title}</p>
              <p className="text-muted">{<Date date={date} />}</p>
              <h5>{excerpt}</h5>
              <div>
                {iconArr ? iconArr : null}
              </div>
            </div>
          </Row>
        </Link>
      </div >
    )
  })
  return <div className="postcard">{result}</div>
}

export default PostCard
