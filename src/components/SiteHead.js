import React from "react"
import "../styles/siteHead.css"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
export default () => (
  <div className="site-navbar">
    <div className="desktop">
      <Navbar bg="purple" variant="dark">
        <Link to="/" className="navbar-brand">
          테라다 단테의 블로그
        </Link>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            홈
          </Link>
          <Link to="category" className="nav-link">
            카테고리
          </Link>
          <Link to="about" className="nav-link">
            어바웃
          </Link>
        </Nav>
      </Navbar>
    </div>
    <div className="mobile">
      <Navbar bg="purple" expand="lg" >
        <Navbar.Brand style={{ color: "white" }}>
          <Link to="/" style={{ color: 'white' }}>
            테라다 단테의 블로그
           </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }}>
          <Nav className="mr-auto">
            <Link to="/" className="nav-link" style={{ color: "white" }}>
              홈
            </Link>
            <Link to="category" className="nav-link" style={{ color: "white" }}>
              카테고리
            </Link>
            <Link to="about" className="nav-link" style={{ color: "white" }}>
              어바웃
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>
)
