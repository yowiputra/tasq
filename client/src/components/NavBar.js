import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <Navbar inverse fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">tasq</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem key={1}>
              <Link to={this.props.link}>Switch Views</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
