import React, { Fragment } from 'react'

import '../styles/post.css'

export default ({ children }) => {
    return (
        <div className='post-item'>
            <div className='post-head'>
                <img src='https://source.unsplash.com/random/400x200' />
            </div>
            <Fragment>
                {children}
            </Fragment>
        </div>
    )

}