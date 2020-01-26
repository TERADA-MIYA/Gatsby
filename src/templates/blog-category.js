import React from "react"
import Archive from "../layouts/archive"

// 아래 arg 형식으로 gatsby-node로 부터 데이터 받아옴 - 안쓸거임
export default ({ pageContext: { category } }) => {
  // Archive 레이아웃에 각 요소 보냄 == 각 요소를 빌드 시 자동으로  업데이트 명령
  // Archive 는 자체 쿼리로 페이지 내용 생성
  return (
    <Archive categories={category} />
  )
}