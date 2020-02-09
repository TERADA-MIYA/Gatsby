import React, { Fragment } from 'react'
import CategoryBoxJP from '../components/CategoryBoxJP'
import '../styles/category.css'
import { graphql, useStaticQuery } from "gatsby"
//import CategoryCard from '../components/CategoryCard'

function createCategoryBoxJP(arr) {
    let result = []
    arr.forEach(s => {
        switch (arr.indexOf(s) % 3) {
            case 0:
                result.push(
                    <Fragment key={s}>
                        <div className='blank'></div>
                        <CategoryBoxJP name='box1' categories={`${s}`} />
                    </Fragment >
                )
                break
            case 1:
                result.push(
                    <Fragment key={s}>
                        <div className='blank'></div>
                        <CategoryBoxJP name='box2' categories={`${s}`} />
                    </Fragment >
                )
                break
            case 2:
                result.push(
                    <Fragment key={s}>
                        <div className='blank'></div>
                        <CategoryBoxJP name='box3' categories={`${s}`} />
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

function CategoryJP() {
    const data = useStaticQuery(graphql`
    query getCategoriesInJapanese {
        allMarkdownRemark(filter: {frontmatter: {lang: {eq: "jp"}}}) {
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
    const result = createCategoryBoxJP(categoriesArr)
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
                {/* 모바일 용 카테고리 화면 */}
            </div>
        </Fragment>
    )
}

export default CategoryJP