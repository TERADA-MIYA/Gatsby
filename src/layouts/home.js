import React from "react"
import SiteBanner from "../components/SiteBanner"
import GalleryArchive from '../layouts/galleryArchive'
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet";
import Index from '../layouts/index'

function Home() {
  const data = useStaticQuery(graphql`
      query getRecentPosts {
        allMarkdownRemark(limit: 4, sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {lang: {nin: "jp"}}}) {
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
    <Index>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>테라다 단테의 블로그</title>
        <meta name="author" content="테라다 단테" />
        <meta
          name="description"
          content="자바스크립트, 웹해킹에서 파이썬, 리액트까지 얕지만 넓은 테라다 단테의 기술 블로그" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="테라다 단테의 블로그" />
        <meta property="og:title" content="테라다 단테의 블로그" />
        <link rel="canonical" href="https://terada-dante.netlify.com//" />
      </Helmet>
      <SiteBanner />
      <GalleryArchive data={data} />
    </Index>
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
