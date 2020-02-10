import React from "react"
import "../styles/siteHead.css"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import Icon from '../components/Icon'

export default () => {
  const data = useStaticQuery(graphql`
        query getSiteHead {
          allSite {
            edges {
              node {
                siteMetadata {
                  title {
                    kr
                  }
                  home {
                    kr
                  }
                  category {
                    kr
                  }
                  about {
                    kr
                  }
                }
              }
            }
          }
        }
    `)
  const siteMetadata = data.allSite.edges[0].node.siteMetadata
  return (
    <div className="site-navbar">
      <div className="desktop">
        <Navbar bg="purple" variant="dark">
          <Link to="/" className="navbar-brand">
            {siteMetadata.title.kr}
          </Link>
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              {siteMetadata.home.kr}
            </Link>
            <Link to="category" className="nav-link">
              {siteMetadata.category.kr}
            </Link>
            <Link to="about" className="nav-link">
              {siteMetadata.about.kr}
            </Link>
          </Nav>
          <DropdownButton className='siteHead-dropdown' title={<Icon name='language' w={18} h={18} />} name={'site-dropdown-button'}>
            <Dropdown.Item href="/"><Icon name='korea' w={18} h={18} /></Dropdown.Item>
            <Dropdown.Item href="/jp/"><Icon name='japan' w={18} h={18} /></Dropdown.Item>
          </DropdownButton>
        </Navbar>
      </div>
      <div className="mobile">
        <Navbar bg="purple" expand="lg" >
          <Navbar.Brand style={{ color: "white" }}>
            <Link to="/" style={{ color: 'white' }}>
              {siteMetadata.title.kr}
            </Link>
          </Navbar.Brand>
          <DropdownButton className='siteHead-dropdown' title={<Icon name='language' w={18} h={18} />} name={'category-dropdown-button'}>
            <Dropdown.Item href="/"><Icon name='korea' w={18} h={18} /></Dropdown.Item>
            <Dropdown.Item href="/jp/"><Icon name='japan' w={18} h={18} /></Dropdown.Item>
          </DropdownButton>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }}>
            <Nav className="mr-auto">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
                {siteMetadata.home.kr}
              </Link>
              <Link to="category" className="nav-link" style={{ color: "white" }}>
                {siteMetadata.category.kr}
              </Link>
              <Link to="about" className="nav-link" style={{ color: "white" }}>
                {siteMetadata.about.kr}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}
