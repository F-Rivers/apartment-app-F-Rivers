import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Nav, 
  NavItem, 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse, 
  } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <header>
        <Navbar
          color="secondary"
          expand="md"
          light
        >
          <NavbarBrand to="/">
          Apartments Department
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav
            className="me-auto"
            navbar
            >
              <NavItem>
                <NavLink to="/">
                  Home   
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/apartmentindex">
                  See All 
                </NavLink>
              </NavItem>
              {logged_in &&
                <NavItem>
                  <a href={sign_out_route} className="nav-link">Sign Out</a>
                </NavItem>
              }
              {!logged_in &&
                <NavItem>
                  <a href={sign_in_route} className="nav-link">Sign In</a>
                </NavItem>
              }
              {!logged_in &&
                <NavItem>
                  <a href={new_user_route} className="nav-link">Sign Up</a>
                </NavItem>
              }
              <NavItem>
                <NavLink href="https://github.com/F-Rivers">
                  My GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>      
    )
  }
}
export default Header