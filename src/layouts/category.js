import React, { Fragment } from 'react'
import CategoryBox from '../components/CategoryBox'
import '../styles/category.css'
//import CategoryCard from '../components/CategoryCard'

function Category() {
    return (
        <Fragment>
            <div className='desktop'>
                <div className="category">
                    <div className="quotes">
                        <div className='blank'></div>
                        <CategoryBox name='box1' categories='javascript' />
                        <div className='blank'></div>
                        <div className="bg"></div>
                        <CategoryBox name='box2' categories='python' />
                        <div className="bg"></div>
                        <div className='blank'></div>
                        <CategoryBox name='box3' categories='talk' />
                        <div className="bg"></div>
                        <div className='blank'></div>
                    </div>
                </div>
            </div>
            <div className='mobile'>

            </div>
        </Fragment>
    )
}

export default Category