import React from 'react'
import Icon from '../components/Icon'
import '../styles/Footer.css'
import { Row, Col } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

function Footer() {
  const data = useStaticQuery(graphql`
        query getFooter {
          allSite {
            edges {
              node {
                siteMetadata {
                  description{
                    kr
                  }
                }
              }
            }
          }
        }
    `)
  const description = data.allSite.edges[0].node.siteMetadata.description
  return (
    <div className='footer'>
      <Row>
        <Col sm={6}>
          <div className='footer-head'>
            <p>{description.kr}</p>
          </div>
        </Col>
        <Col sm={6}>
          <div className='footer-tail'>
            <Icon name={'gatsby'} w={24} h={24} /> <Icon name={'netlify'} w={24} h={24} /> <Icon name={'bootstrap'} w={24} h={24} /> <Icon name={'materialui'} w={24} h={24} /> <Icon name={'nodejs'} w={24} h={24} /> <Icon name={'heroku'} w={24} h={24} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer