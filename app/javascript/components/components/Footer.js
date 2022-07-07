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
          <NavbarBrand to="/">
            Wayne Enterprise
          </NavbarBrand>
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink to='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="https://github.com/F-Rivers">
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
