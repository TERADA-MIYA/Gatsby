import React from 'react'
import '../styles/category.css'
import CategoryCard from '../components/CategoryCard'

function Category() {
    return (
        <div className="category">
            <div className='desktop'>
                <div className="wrapper-2-2-2-2-2">
                    <div className='category-box'></div>
                    <div className='category-box'><div className='flip-card'>a</div></div>
                    <div className='category-box'></div>
                    <div className='category-box'></div>
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
                    <div className='category-box'>7</div>
                    <div className='category-box'></div>
                </div>
            </div>
            <div className='mobile'>
            </div>
        </div>
    )
}

export default Category