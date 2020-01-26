import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/PostCard.css'
import { Row } from 'react-bootstrap'
import Icon from '../components/Icon'

const PostCard = (props) => {
    console.log(props)
    const { arr } = props
    const result = arr.map((s) => {
        const post = s.frontmatter
        const title = post.title
        const date = post.date
        const excerpt = post.excerpt.length > 110 ? `${post.excerpt.substring(0, 110)}...` : post.excerpt
        // const categories = post.categories 나중에 아이콘 쓸거임
        return (
            <div className='postcard-inner' key={s.frontmatter.title} >
                <Row className='aling-items-center'>
                    <div className='col-lg-6'>
                        <div style={{ overflow: 'hidden', position: 'relative' }}>
                            <img alt='이미지는 alt를 가져야함' src='https://source.unsplash.com/random/600x300' style={{ maxWidth: '100%' }} />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <p className='h3 mt-4 mt-lg-0'>
                            {title}
                        </p>
                        <p className='text-muted'>{date}</p>
                        <h5>{excerpt}</h5>
                        <div>
                            <Icon name='python' w='24' h='24' />
                        </div>
                    </div>
                </Row>
            </div>
        )
    })
    return (
        < div className='postcard' >
            {result}
        </div >
    )
}



export default PostCard