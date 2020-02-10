import React from 'react'
import '../styles/about.css'
import AboutProfile from '../components/AboutProfile'
import AboutWork from '../components/AboutWork'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  var data = useStaticQuery(graphql`
        query getAuthor {
          allSite {
            edges {
              node {
                siteMetadata {
                    author {
                      name
                      {
                        kr
                        jp
                      }
                      location
                      {
                        kr
                        jp
                      }
                      email
                      {
                        kr
                        jp
                      }
                      word
                      {
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
        <AboutProfile author={data.allSite.edges[0].node.siteMetadata.author} />
      </div>
      <div className='about-work'>
        <AboutWork />
      </div>
    </div >
  )
}
