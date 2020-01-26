import React from 'react'
import '../styles/category.css'
function Category() {
    return (
        <div className="category">
            <div className='desktop'>
                <div className="wrapper-2-2-2-2-2">
                    <div className='category-box'></div>
                    <div className='category-box'></div>
                    <div className='category-box'>1</div>
                    <div className='category-box'>2</div>
                    <div className='category-box'></div>
                </div>
                <div className="wrapper-2-2-2-2-2">
                    <div className='category-box'></div>
                    <div className='category-box'>3</div>
                    <div className='category-box'>4</div>
                    <div className='category-box'>5</div>
                    <div className='category-box'></div>
                </div>
                <div className="wrapper-2-2-2-2-2">
                    <div className='category-box'></div>
                    <div className='category-box'></div>
                    <div className='category-box'>6</div>
                    <div className='category-box'></div>
                    <div className='category-box'></div>
                </div>
            </div>
            <div className='mobile'>
            </div>
        </div>
    )
}

export default Category