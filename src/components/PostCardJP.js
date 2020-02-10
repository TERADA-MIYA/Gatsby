import React from "react"
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col } from "react-bootstrap"
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
        if (post.header !== null) {
            var headerImage = post.header.image
        }
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
                <Link to={`/jp/${categories}/${date}-${title}/`}>
                    <Row className="aling-items-center">
                        <Col sm={6}>
                            <img
                                alt={`${title} post header`}
                                src={headerImage !== undefined ? `/images/posts/header/${headerImage}` : `/images/home/galleryArchive/${categories}.jpg`}
                                style={{ width: "100%", height: '100%' }}
                            />
                        </Col>
                        <Col sm={6}>
                            <div className='postcard-inner-desc'>
                                <p className="h3">{title}</p>
                                <span className="text-muted">{<Date date={date} />}</span>
                                <h5>{excerpt}</h5>
                                <div>
                                    {iconArr ? iconArr : null}
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Link>
            </div >
        )
    })
    return <div className="postcard">{result}</div>
}

export default PostCard
