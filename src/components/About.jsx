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
              <p><em>Currently attending University of Minnesota Full-Stack Coding Bootcamp full-time.</em></p>
              <p>I've been coding as a hobby for several years seeking opportunities to write code to provide solutions for problems I've encountered in my day-to-day life. I enjoy the essence of logical-creativity and find a lot of that within the processes of web development.</p>
              <p>Through my computer endeavors I've participated in several team-focused development projects, one being a full-stack react application <em style={{ fontSize: "80%" }}>(MERN stack)</em>.</p>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <p className='mt-5'>My skill set includes these development technologies:</p>
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
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}