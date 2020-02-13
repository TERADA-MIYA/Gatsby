import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'

const DisqusDetails = (props) => {
    var data = useStaticQuery(graphql`
        query getSiteMetadata {
          site{
              siteMetadata{
                  url
                  disqusShortname
              }
          }
        }
    `)
    const { siteMetadata } = data.site
    if (!siteMetadata.disqusShortname) {
        return null
    }

    let disqusConfig = {
        url: siteMetadata.url + props.post.fields.slug,
        identifier: props.post.id,
        title: props.post.frontmatter.title
    }

    return (
        <Disqus config={disqusConfig} ></Disqus>
    )

}

export default DisqusDetails