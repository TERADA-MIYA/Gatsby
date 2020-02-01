import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHead from "../components/SiteHead"
import SiteBanner from "../components/SiteBanner"
import GalleryArchive from '../layouts/GalleryArchive'
import Footer from '../components/Footer'
import { graphql, useStaticQuery } from "gatsby"

function Home() {
  const data = useStaticQuery(graphql`
      query getRecentPosts {
        allMarkdownRemark(limit: 4, sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                date
                excerpt
                categories
                header {
                  image
                }
              }
            }
          }
        }
      }
    `)
  return (
    <div>
      <div className="나중에 여기 메타정보 들어감"></div>
      <div className="viewport">
        <div className="viewport-top">
          <SiteHead />
        </div>
        <div className="viewport-middle" >
          <SiteBanner />
          <GalleryArchive data={data} />
        </div>
        <div className="viewport-bottom">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home


// 레이아웃은 뷰포트 이외 렌더링
// 뷰 포트 기준

// 홈의 레이아웃
// 사이트 헤드
// 헤드 배너
// 바디
// 푸터

// i.e) 카테고리 레이아웃
// 사이트헤드
// 바디
// 푸터
