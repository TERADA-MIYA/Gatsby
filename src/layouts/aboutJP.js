import React from 'react'
import '../styles/about.css'
import AboutProfileJP from '../components/AboutProfileJP'
import AboutWorkJP from '../components/AboutWorkJP'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  var data = useStaticQuery(graphql`
        query getAuthorInJapanese {
          allSite {
            edges {
              node {
                siteMetadata {
                    author {
                      name{
                        kr
                        jp
                      }
                      location{
                        kr
                        jp
                      }
                      email{
                        kr
                        jp
                      }
                      word{
                        kr
                        jp
                      }
                  }
                }
              }
            }
          }
        }
    `)
  return (
    <div className='about'>
      <div className='about-profile'>
        <AboutProfileJP author={data.allSite.edges[0].node.siteMetadata.author} />
      </div>
      <div className='about-work'>
        <AboutWorkJP />
      </div>
    </div >
  )
}
