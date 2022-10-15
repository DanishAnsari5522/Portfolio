import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div className="navigation">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"  className="navbar navbar-dark"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto ml-10 my-2 my-lg-0 w-100"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>

            <Nav>
              <NavLink exact to="/" className="dan" activeClassName="menu_active" >Home</NavLink>
              <a href="https://zenithclown.github.io/" target="_blank" className="dan">Home 1</a>
              <NavLink exact to="/Project" activeClassName="menu_active" className="dan">Project</NavLink>
              <NavLink exact to="/Education" activeClassName="menu_active" className="dan">Education  And Work Experiences</NavLink>
              <NavLink exact to="/Activity" activeClassName="menu_active" className="dan">Activity</NavLink>
              <NavLink exact to="/Contact" activeClassName="menu_active" className="dan">Contact</NavLink>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation