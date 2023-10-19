import React from 'react';
import { MDBContainer, 
        MDBRow, 
        MDBCol,
        MDBListGroup,
        MDBListGroupItem,
      } from 'mdb-react-ui-kit';

export default function About() {

  return (
    <>
      <h3 className='mt-5 mb-4 d-flex justify-content-center align-items-center' id='about-me-title'>About Me</h3>
      <MDBContainer fluid className='d-flex flex-wrap justify-content-center about-me-content'>
        <MDBRow>
          <MDBCol className='mt-4 mb-2 d-flex justify-content-center'>
            <img id='about-me-img' src='images/me.jpg'></img>
          </MDBCol>
          <MDBCol>
            <MDBContainer id='about-me-text' className='mt-4 mb-2 flex-wrap'>
              <p>I've been coding as a hobby for several years seeking opportunities to write code to provide solutions for problems I've encountered in my day-to-day life. I enjoy the essence of logical-creativity and find a lot of that within the processes of web development.</p>
              <p>I recently graduated from the <a id='u-of-m-link' href='https://ccaps.umn.edu/full-stack-web-development-certificate-coding-boot-camp' alt='link to university website'><em>University of Minnesota Full Stack Web Development Coding Bootcamp</em></a>.</p>

              <div id='cert-badge'>
                <div className='wobble-animation'>
                  <a href='https://www.credly.com/badges/dfed0a33-d201-4047-9e5a-9913d4abdad9/public_url'>
                      <img src='/images/full-stack-web-development-certificate-coding-boot-camp.png' alt='certificate badge'/>
                    </a>
                </div>
              </div>
              

              <p>Through my computer endeavors I've participated in several team-focused development projects, one being a full-stack react application <em style={{ fontSize: "80%" }}>(<a href="https://github.com/johntg96/ThinkSync" style={{ color: 'lightblue' }}>ThinkSync</a>)</em>.</p>
              <p>My resume is available &#x2192; <a href='https://docs.google.com/document/d/1sd07dV3R7xevumimU5AJD6_v1yE2rwYursuW1r_Ypqg/edit?usp=sharing' id='resume-link' style={{textDecoration:'underline'}}>here</a><span style={{fontSize: '0.7em', marginLeft:'1em'}}>(Google Docs)</span></p>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        <MDBContainer className='mb-4'>
          <MDBRow>
            <MDBCol>
              <p className='mt-4'><em>My skill set includes these development technologies:</em></p>
              <div className='mt-4 tech-chip-container d-flex flex-wrap justify-content-evenly'>
                <div className='tech-chip'>
                  <p>HTML</p>
                </div>
                <div className='tech-chip'>
                  <p>CSS</p>
                </div>
                <div className='tech-chip'>
                  <p>JavaScript</p>
                </div>
                <div className='tech-chip'>
                  <p>Node.JS</p>
                </div>
                <div className='tech-chip'>
                  <p>Express.JS</p>
                </div>
                <div className='tech-chip'>
                  <p>MongoDB</p>
                </div>
                <div className='tech-chip'>
                  <p>Mongoose</p>
                </div>
                <div className='tech-chip'>
                  <p>Sequelize</p>
                </div>
                <div className='tech-chip'>
                  <p>Bootstrap 5</p>
                </div>
                <div className='tech-chip'>
                  <p>Tailwind</p>
                </div>
                <div className='tech-chip'>
                  <p>JQuery</p>
                </div>
                <div className='tech-chip'>
                  <p>React</p>
                </div>
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}