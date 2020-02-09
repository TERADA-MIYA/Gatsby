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
                  jp {
                    title
                    home
                    category
                    about
                  }
                }
              }
            }
          }
        }
    `)
    const siteHead = data.allSite.edges[0].node.siteMetadata.jp
    return (
        <div className="site-navbar">
            <div className="desktop">
                <Navbar bg="purple" variant="dark">
                    <Link to="/jp" className="navbar-brand">
                        {siteHead.title}
                    </Link>
                    <Nav className="mr-auto">
                        <Link to="/jp" className="nav-link">
                            {siteHead.home}
                        </Link>
                        <Link to="jp/category" className="nav-link">
                            {siteHead.category}
                        </Link>
                        <Link to="jp/about" className="nav-link">
                            {siteHead.about}
                        </Link>
                    </Nav>
                    <DropdownButton className='siteHead-dropdown' id="dropdown-basic-button" title={<Icon name='language' w={18} h={18} />}>
                        <Dropdown.Item href="/"><Icon name='korea' w={18} h={18} /></Dropdown.Item>
                        <Dropdown.Item href="/jp/"><Icon name='japan' w={18} h={18} /></Dropdown.Item>
                    </DropdownButton>
                </Navbar>
            </div>
            <div className="mobile">
                <Navbar bg="purple" expand="lg" >
                    <Navbar.Brand style={{ color: "white" }}>
                        <Link to="/jp" style={{ color: 'white' }}>
                            {siteHead.title}
                        </Link>
                    </Navbar.Brand>
                    <DropdownButton className='siteHead-dropdown' id="dropdown-basic-button" title={<Icon name='language' w={18} h={18} />}>
                        <Dropdown.Item href="/"><Icon name='korea' w={18} h={18} /></Dropdown.Item>
                        <Dropdown.Item href="/jp/"><Icon name='japan' w={18} h={18} /></Dropdown.Item>
                    </DropdownButton>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }}>
                        <Nav className="mr-auto">
                            <Link to="/jp" className="nav-link" style={{ color: "white" }}>
                                {siteHead.home}
                            </Link>
                            <Link to="/jp/category" className="nav-link" style={{ color: "white" }}>
                                {siteHead.category}
                            </Link>
                            <Link to="/jp/about" className="nav-link" style={{ color: "white" }}>
                                {siteHead.about}
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}
