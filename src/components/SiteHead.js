import React from "react"
import "../styles/siteHead.css"
import {
  Navbar,
  Nav
} from "react-bootstrap"

export default () => (
  <div className="site-navbar" >
    <div className="site-navbar-desktop" >
      <Navbar bg="purple" variant="dark" >
        <Navbar.Brand href="#home" > Navbar </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" > Home </Nav.Link>
          <  Nav.Link href="#features" > Features </Nav.Link>
          <  Nav.Link href="#pricing" > Pricing </Nav.Link>
        </Nav >
      </Navbar>
    </div >
    <div className="site-navbar-mobile" >
      <Navbar bg="purple" expand="lg" >
        <Navbar.Brand href="#home" > React - Bootstrap </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Link href="#home" > Home </Nav.Link>
            <Nav.Link href="#link" > Link </Nav.Link>
          </Nav >
        </Navbar.Collapse>
      </Navbar >
    </div>
  </div >
)