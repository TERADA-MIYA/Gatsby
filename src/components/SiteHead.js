import React from "react"
import "../styles/siteHead.css"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'gatsby'
export default () => (
  <div className="site-navbar" >
    <div className="desktop" >
      <Navbar bg="purple" variant="dark" >
        <Link to='/' className='navbar-brand'>테라다 단테의 블로그</Link>
        <Nav className="mr-auto">
          <Link to='/' className='nav-link'>홈</Link>
          <Link to='category' className='nav-link'>카테고리</Link>
          <Link to='about' className='nav-link'> 어바웃 </Link>
        </Nav >
      </Navbar>
    </div >
    <div className="mobile" >
      <Navbar bg="purple" expand="lg" >
        <Navbar.Brand href="#home" > 테라다 단테의 블로그 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <Link to='/' className='nav-link'>홈</Link>
            <Link to='category' className='nav-link'>카테고리</Link>
            <Link to='about' className='nav-link'> 어바웃 </Link>
          </Nav >
        </Navbar.Collapse>
      </Navbar >
    </div>
  </div >
)