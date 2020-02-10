import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import '../styles/SiteBanner.css'
import { Link, graphql, useStaticQuery } from "gatsby"

function SiteBanner(props) {
  const data = useStaticQuery(graphql`
      query getRandomCategories {
        allMarkdownRemark {
          distinct(field: frontmatter___categories)
        }
      }
    `)
  const categoryArr = data.allMarkdownRemark.distinct
  while (categoryArr.length > 3) {
    categoryArr.splice(Math.floor(Math.random() * categoryArr.length), 1)
  }
  function categoryNameKorean(s) {
    switch (s) {
      case 'algorithm':
        return '알고리즘'
      case 'javascript':
        return '자바스크립트'
      case 'python':
        return '파이썬'
      case 'react':
        return '리액트'
      case 'webhacking':
        return '웹 해킹'
      default:
        return '잡담'
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
            <Link to={`/${categoryArr[0]}`}>
              <h3>{categoryNameKorean(categoryArr[0])}</h3>
              <p>{categoryNameKorean(categoryArr[0])} 카테고리 페이지로 이동</p>
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
            <Link to={`/${categoryArr[1]}`}>
              <h3>{categoryNameKorean(categoryArr[1])}</h3>
              <p>{categoryNameKorean(categoryArr[1])} 카테고리 페이지로 이동</p>
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
            <Link to={`/${categoryArr[2]}`}>
              <h3>{categoryNameKorean(categoryArr[2])}</h3>
              <p>{categoryNameKorean(categoryArr[2])} 카테고리 페이지로 이동</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
    </div>
  )
}

export default SiteBanner
