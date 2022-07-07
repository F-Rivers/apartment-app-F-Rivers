import React, { Component } from 'react'
import { Nav, 
  NavItem, 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse, 
  NavLink, 
  } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
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
          <Nav className='header-links'>
          <NavLink to='/'>
            <img src={CozyLogo} alt="Image of reclining alligator: click to go home" id='cozy_drivergator'/>
          </NavLink>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
                <NavLink href="/apartmentindex">
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