import React from "react"
import { Carousel } from "react-bootstrap"
import '../styles/SiteBanner.css'
import { Link, graphql, useStaticQuery } from "gatsby"

function SiteBannerJP() {
    const data = useStaticQuery(graphql`
      query getRandomCategoriesInJapanese {
        allMarkdownRemark(filter: {frontmatter: {lang: {eq: "jp"}}}) {
            distinct(field: frontmatter___categories)
          }
      }
    `)
    const categoryArr = data.allMarkdownRemark.distinct
    while (categoryArr.length > 3) {
        categoryArr.splice(Math.floor(Math.random() * categoryArr.length), 1)
    }
    function categoryNameJapanese(s) {
        switch (s) {
            case 'algorithm':
                return 'Algorithm'
            case 'javascript':
                return 'Javascript'
            case 'python':
                return 'Python'
            case 'react':
                return 'React'
            case 'webhacking':
                return 'Web hacking'
            default:
                return '一般'
        }
    }
    return (
        <div className='site-banner'>
            < Carousel >
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={`/images/home/${categoryArr[0]}.jpg`}
                        // default 포토 정해야함
                        alt="Blog category banner1"
                    />
                    <Carousel.Caption>
                        <Link to={`/jp/${categoryArr[0]}`}>
                            <h3>{categoryNameJapanese(categoryArr[0])}</h3>
                            <p>{categoryNameJapanese(categoryArr[0])} カテゴリーページへ</p>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`/images/home/${categoryArr[1]}.jpg`}
                        // default 포토 정해야함
                        alt="Blog category banner2"
                    />

                    <Carousel.Caption>
                        <Link to={`/jp/${categoryArr[1]}`}>
                            <h3>{categoryNameJapanese(categoryArr[1])}</h3>
                            <p>{categoryNameJapanese(categoryArr[1])} カテゴリーページへ</p>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`/images/home/${categoryArr[2]}.jpg`}
                        // default 포토 정해야함
                        alt="Blog category banner3"
                    />
                    <Carousel.Caption>
                        <Link to={`/jp/${categoryArr[2]}`}>
                            <h3>{categoryNameJapanese(categoryArr[2])}</h3>
                            <p>{categoryNameJapanese(categoryArr[2])} カテゴリーページへ</p>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >
        </div>
    )
}

export default SiteBannerJP
