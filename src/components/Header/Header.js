import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

const authenticatedOptions = (
  <Fragment>
    {/* <NavLink to='/change-password' className='nav-link'>Change Password</NavLink> */}
    <NavLink to='/recipes' className='nav-link'>Recipes</NavLink>
    <div className='cp-signout-div'>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">Manage Account</Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
          <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Home</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='success' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>Recipes.com</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.userName}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
