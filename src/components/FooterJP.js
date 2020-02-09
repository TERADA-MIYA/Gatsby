import React from 'react'
import Icon from '../components/Icon'
import '../styles/Footer.css'
import { Row, Col } from 'react-bootstrap'
import { graphql, useStaticQuery } from "gatsby"

function FooterJP() {
  const data = useStaticQuery(graphql`
        query getFooterInJapanese {
          allSite {
            edges {
              node {
                siteMetadata {
                  jp {
                    footer
                  }
                }
              }
            }
          }
        }
    `)
  const footer = data.allSite.edges[0].node.siteMetadata.jp.footer
  return (
    <div className='footer'>
      <Row>
        <Col sm={6}>
          <div className='footer-head'>
            {footer}
          </div>
        </Col>
        <Col sm={6}>
          <div className='footer-tail'>
            <Icon name={'gatsby'} w={24} h={24} /> Gatsby <Icon name={'netlify'} w={24} h={24} /> Netlify <Icon name={'bootstrap'} w={24} h={24} /> Bootstrap <Icon name={'materialui'} w={24} h={24} /> Material UI
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default FooterJP