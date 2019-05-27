import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

const NavHeader = ({ changeCurrentView }) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Dog Rates</NavbarBrand>
          <Nav className="ml-auto " navbar>
          <NavItem id='Submit' className='p-3' onClick={(e) => changeCurrentView(e.target.id) }>Upload</NavItem>
          <NavItem id='Rate' className='p-3' onClick={(e) => changeCurrentView(e.target.id)}>Rate</NavItem>
          <NavItem id='Trending' className='p-3' onClick={(e) => changeCurrentView(e.target.id)}>Trending</NavItem>
          </Nav>
      </Navbar>
    </div>
  )
}
export default NavHeader;