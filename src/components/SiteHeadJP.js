import React from "react"
import "../styles/siteHead.css"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import Icon from '../components/Icon'

export default () => {
    const data = useStaticQuery(graphql`
        query getSiteHeadInJpanese {
            allSite {
                edges {
                  node {
                    siteMetadata {
                      title {
                        jp
                      }
                      home {
                        jp
                      }
                      category {
                        jp
                      }
                      about {
                        jp
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
                    <Link to="/jp" className="navbar-brand">
                        {siteMetadata.title.jp}
                    </Link>
                    <Nav className="mr-auto">
                        <Link to="/jp" className="nav-link">
                            {siteMetadata.home.jp}
                        </Link>
                        <Link to="jp/category" className="nav-link">
                            {siteMetadata.category.jp}
                        </Link>
                        <Link to="jp/about" className="nav-link">
                            {siteMetadata.about.jp}
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
                        <Link to="/jp" style={{ color: 'white' }}>
                            {siteMetadata.title.jp}
                        </Link>
                    </Navbar.Brand>
                    <DropdownButton className='siteHead-dropdown' title={<Icon name='language' w={18} h={18} />} name={'site-dropdown-button'}>
                        <Dropdown.Item href="/"><Icon name='korea' w={18} h={18} /></Dropdown.Item>
                        <Dropdown.Item href="/jp/"><Icon name='japan' w={18} h={18} /></Dropdown.Item>
                    </DropdownButton>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }}>
                        <Nav className="mr-auto">
                            <Link to="/jp" className="nav-link" style={{ color: "white" }}>
                                {siteMetadata.home.jp}
                            </Link>
                            <Link to="/jp/category" className="nav-link" style={{ color: "white" }}>
                                {siteMetadata.category.jp}
                            </Link>
                            <Link to="/jp/about" className="nav-link" style={{ color: "white" }}>
                                {siteMetadata.about.jp}
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}
