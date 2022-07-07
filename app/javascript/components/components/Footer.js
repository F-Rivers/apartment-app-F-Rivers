import React, { Component } from 'react'
import { Nav, 
  NavItem, 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse, 
  NavLink, 
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
          <NavbarBrand href="/">
            Wayne Enterprise
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/F-Rivers">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </footer>     
    )
  }
}
