import React, { Fragment } from "react"
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
  return (
    <Fragment>
      <div className='desktop'>
        <div className='site-banner-desktop'>
          < Carousel >
            <Carousel.Item>
              <img
                className="d-block"
                src={`/images/home/${categoryArr[0]}.jpg`}
                // default 포토 정해야함
                alt="Category 1"
              />
              <Carousel.Caption>
                <Link to={`/${categoryArr[0]}`}>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`/images/home/${categoryArr[1]}.jpg`}
                // default 포토 정해야함
                alt="Category 2"
              />

              <Carousel.Caption>
                <Link to={`/${categoryArr[1]}`}>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`/images/home/${categoryArr[2]}.jpg`}
                // default 포토 정해야함
                alt="Category 3"
              />
              <Carousel.Caption>
                <Link to={`/${categoryArr[2]}`}>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel >
        </div>
      </div>
      <div className='mobile'>

      </div>
    </Fragment>
  )
}

export default SiteBanner
