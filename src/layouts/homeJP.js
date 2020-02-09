import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHeadJP from "../components/SiteHeadJP"
import SiteBannerJP from "../components/SiteBannerJP"
import GalleryArchiveJP from '../layouts/GalleryArchiveJP'
import FooterJP from '../components/FooterJP'
import { graphql, useStaticQuery } from "gatsby"


function HomeJP() {
    const data = useStaticQuery(graphql`
      query getRecentPostsInJapanese {
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
        <>
            <div className="나중에 여기 일본 메타정보 들어감"></div>
            <div className="viewport">
                <div className="viewport-top">
                    <SiteHeadJP />
                </div>
                <div className="viewport-middle" >
                    <SiteBannerJP />
                    <GalleryArchiveJP data={data} />
                </div>
                <div className="viewport-bottom">
                    <FooterJP />
                </div>
            </div>
        </>
    )
}

export default HomeJP


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
