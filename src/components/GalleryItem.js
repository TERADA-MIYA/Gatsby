import React from 'react'
import { Link } from 'gatsby'

export default (props) => {
    const { frontmatter } = props.data.allMarkdownRemark.edges[props.no].node
    // title.jpg == header.image == file name
    // '' 대신에 디폴트 사진 선정
    const img = frontmatter.header === null ? '' : frontmatter.header.image.replace('/static', '')
    return (
        <div className='galleryItem'>
            <Link to={`/${frontmatter.categories}/${frontmatter.date}-${frontmatter.title}`} />
            <img
                className="galleryImg"
                src={`/images/posts/header/${img}`}
                alt={'postHeadImg'}
            />
            <div className='post'>
                <p className='post-title'>
                    {frontmatter.title}}
                </p>
                <h5 className='post-excerpt'>
                    {frontmatter.excerpt}
                </h5>
            </div>
            <div className='title-preview'>
                <h4>{frontmatter.title}</h4>
            </div>
        </div>
    )
}