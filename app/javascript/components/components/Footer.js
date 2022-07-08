import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Nav, 
  NavItem, 
  Navbar, 
  NavbarBrand, 
  Collapse, 
  } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar
          color="secondary"
          expand="md"
          fixed=""
          light
        >
          <NavbarBrand href="https://github.com/F-Rivers" className="nav-link">
            F-Rivers Productions
          </NavbarBrand>
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink to='/' className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <a href="https://www.linkedin.com/in/rivera-francisco/" className="nav-link">
                  LinkedIn
                </a></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </footer>     
    )
  }
}
