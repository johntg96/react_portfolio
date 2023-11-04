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
    <MDBNavbar id='navbar' expand='lg' dark>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>Portfolio | John Garrison |&nbsp;&nbsp;<span style={{fontSize:'0.7em', color:'lightgray'}}>johntg96</span></MDBNavbarBrand>

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

            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/contact'>
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem> */}

            <MDBNavbarItem>
              <MDBNavbarLink href='https://github.com/johntg96' className='navbar-link'>Github</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='https://www.linkedin.com/in/johntg96/' className='navbar-link'>LinkedIn</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown >
                <MDBDropdownToggle tag='a' className='nav-link navbar-link' role='button'>
                  Projects
                </MDBDropdownToggle>
                <MDBDropdownMenu dark style={{margin: '0', padding: '0'}}>

                  <MDBDropdownItem  className='nav-project-link'>
                    <a href='https://github.com/johntg96/ThinkSync'>ThinkSync</a>
                  </MDBDropdownItem>
                  
                  <MDBDropdownItem className='nav-project-link  nav-project-link-alt-bg'>
                    <a href='https://github.com/johntg96/konsoom'>konsoom</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link  nav-project-link-alt-bg'>
                    <a href='https://github.com/johntg96/tech_blog'>tech_blog</a> 
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link'>
                    <a href='https://github.com/johntg96/Weather-Dashboard'>Weather Dashboard</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link nav-project-link-alt-bg'>
                    <a href='https://github.com/johntg96/JavaScript-Code-Quiz'>JS Code Quiz</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link'>
                    <a href='https://github.com/johntg96/h0ldb1nz'>h0ldb1nz</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link nav-project-link-alt-bg'>
                    <a href='https://github.com/johntg96/watercalc'>waterCalc</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link'>
                    <a href='https://github.com/johntg96/readme_generator'>README Generator</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link nav-project-link-alt-bg'>
                    <a href='https://github.com/johntg96/Daily-Task-List'>Daily Task List</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link'>
                    <a href='https://github.com/johntg96/super_space_chicken'>Super Space Chicken</a> 
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link'>
                    <a href='https://github.com/johntg96/svg_logo_maker'>SVG Logo Maker</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem className='nav-project-link nav-project-link-alt-bg'>
                    <a href='https://github.com/johntg96/employee_tracker'>Employee Tracker</a>
                  </MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              
            </MDBNavbarItem>
          </MDBNavbarNav>
            
        </MDBCollapse>
          <div id='cert-badge'>
            <div className='wobble-animation'>
              <a href='https://www.credly.com/badges/dfed0a33-d201-4047-9e5a-9913d4abdad9/public_url'>
                  <img src='/images/full-stack-web-development-certificate-coding-boot-camp.png' alt='certificate badge' style={{width: '6em'}}/>
                </a>
            </div>
          </div>
      </MDBContainer>
    </MDBNavbar>
  );
}