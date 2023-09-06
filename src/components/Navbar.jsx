import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Portfolio | John Garrison</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/contact'>
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='https://github.com/johntg96'>Github</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Projects
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>konsoom</MDBDropdownItem>
                  <MDBDropdownItem link>tech_blog</MDBDropdownItem>
                  <MDBDropdownItem link>Weather Dashboard</MDBDropdownItem>
                  <MDBDropdownItem link>code_quiz</MDBDropdownItem>
                  <MDBDropdownItem link>h0ldb1nz</MDBDropdownItem>
                  <MDBDropdownItem link>waterCalc</MDBDropdownItem>
                  <MDBDropdownItem link>README Generator</MDBDropdownItem>
                  <MDBDropdownItem link>Work Day Schedluer</MDBDropdownItem>
                  <MDBDropdownItem link>SVG Logo Maker</MDBDropdownItem>
                  <MDBDropdownItem link>Employee Tracker</MDBDropdownItem>


                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}