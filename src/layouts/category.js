import React, { Fragment } from 'react'
import CategoryBox from '../components/CategoryBox'
import '../styles/category.css'
import { graphql, useStaticQuery } from "gatsby"
//import CategoryCard from '../components/CategoryCard'

function createCategoryBox(arr) {
    let result = []
    arr.forEach(s => {
        switch (arr.indexOf(s) % 3) {
            case 0:
                result.push(
                    <Fragment key={s}>
                        <div className='blank'></div>
                        <CategoryBox name='box1' categories={`${s}`} />
                    </Fragment >
                )
                break
            case 1:
                result.push(
                    <Fragment key={s}>
                        <div className='blank'></div>
                        <CategoryBox name='box2' categories={`${s}`} />
                    </Fragment >
                )
                break
            case 2:
                result.push(
                    <Fragment key={s}>
                        <div className='blank'></div>
                        <CategoryBox name='box3' categories={`${s}`} />
                    </Fragment >
                )
                break
            default:
                return (
                    <Fragment>{'s'}</Fragment>
                )
        }
    })
    return result
}

function Category() {
    const data = useStaticQuery(graphql`
    query getCategories {
        allMarkdownRemark {
            nodes {
              frontmatter {
                categories
              }
            }
        }
    }
  `)
    let categoriesArr = []
    data.allMarkdownRemark.nodes.forEach(element => {
        if (categoriesArr.indexOf(element.frontmatter.categories) === -1) {
            categoriesArr.push(element.frontmatter.categories)
        }
    })
    const result = createCategoryBox(categoriesArr)
    return (
        <Fragment>
            <div className='desktop'>
                <div className="category">
                    <div className="quotes">
                        {result}
                        <div className="bg"></div>
                        <div className='blank'></div>
                    </div>
                </div>
            </div>
            <div className='mobile'>
                <div className="category">
                    <div className="quotes">
                        {result}
                        <div className="bg"></div>
                        <div className='blank'></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Category