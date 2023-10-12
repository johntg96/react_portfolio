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
        <MDBNavbarBrand href='/'>Portfolio | John Garrison</MDBNavbarBrand>

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
              <MDBNavbarLink href='https://github.com/johntg96'>Github</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='https://www.linkedin.com/in/johntg96/'>LinkedIn</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Projects
                </MDBDropdownToggle>
                <MDBDropdownMenu dark>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/ThinkSync'>ThinkSync</a>
                  </MDBDropdownItem>
                  
                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/konsoom'>konsoom</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/super_space_chicken'>Super Space Chicken</a> 
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/tech_blog'>tech_blog</a> 
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/module6_weather_dashboard'>Weather Dashboard</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/module4_code_quiz'>code_quiz</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/h0ldb1nz'>h0ldb1nz</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/watercalc'>waterCalc</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/readme_generator'>README Generator</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/module5_work_day_scheduler'>Work Day Scheduler</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/svg_logo_maker'>SVG Logo Maker</a>
                  </MDBDropdownItem>

                  <MDBDropdownItem link toggle={false} className='nav-project-link'>
                    <a href='https://github.com/johntg96/employee_tracker'>Employee Tracker</a>
                  </MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}