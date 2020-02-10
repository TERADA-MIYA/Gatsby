import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHeadJP from "../components/SiteHeadJP"
import SiteBannerJP from "../components/SiteBannerJP"
import GalleryArchiveJP from '../layouts/GalleryArchiveJP'
import FooterJP from '../components/FooterJP'
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet";

function HomeJP() {
  const data = useStaticQuery(graphql`
      query getRecentPostsInJapanese {
        allMarkdownRemark(limit: 4, sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {lang: {eq: "jp"}}}) {
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
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Terada DanteノBlog</title>
        <meta name="author" content="Terada Dante" />
        <meta
          name="description"
          content="創造は想像から, 楽な世界のためにjavascriptから React, hackingまで" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="Terada DanteノBlog" />
        <meta property="og:title" content="Terada DanteノBlog" />
        <link rel="canonical" href="https://terada-dante.netlify.com//" />
      </Helmet>
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
