import React from 'react'
import { Link } from 'gatsby'

export default (props) => {
    const { frontmatter } = props.data.allMarkdownRemark.edges[props.no].node
    const img = frontmatter.header === null ? `/images/home/galleryArchive/${frontmatter.categories}.jpg` : `/images/posts/header/${frontmatter.header.image}`
    return (
        <div className='galleryItem'>
            <Link to={`/jp/${frontmatter.categories}/${frontmatter.date}-${frontmatter.title}`}>
                <img
                    className="galleryImg"
                    src={img}
                    alt={`${frontmatter.title} header`}
                />
            </Link>
            <Link to={`/jp/${frontmatter.categories}/${frontmatter.date}-${frontmatter.title}`}>
                <div className='post'>
                    <div className='post-name'>
                        {frontmatter.title}
                    </div>
                    <div className='post-date '>
                        {frontmatter.date}
                    </div>
                    <div className='post-excerpt'>
                        {frontmatter.excerpt}
                    </div>
                </div>
            </Link>

            <div className='title-preview'>
                <h4>{frontmatter.title}</h4>
            </div>
        </div>
    )
}