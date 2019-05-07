import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

export default function NavHeader(props) {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Dog Rates</NavbarBrand>
          <Nav className="ml-auto " navbar>
            <NavItem id='Submit' className='p-3' onClick={(e) => props.onPresentationChange(e)}>Upload</NavItem>
            <NavItem id='Rate' className='p-3' onClick={(e) => props.onPresentationChange(e)}>Rate</NavItem>
            <NavItem id='Top' className='p-3' onClick={(e) => props.onPresentationChange(e)}>Top Trending</NavItem>
          </Nav>
      </Navbar>
    </div>
  )
}