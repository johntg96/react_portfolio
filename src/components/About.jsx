import React from 'react';
import { MDBContainer, 
        MDBRow, 
        MDBCol,
        MDBListGroup,
        MDBListGroupItem,
      } from 'mdb-react-ui-kit';

export default function About() {

  return (
    <MDBContainer>
      <h3 className='mt-4'>About Me</h3>
      <MDBRow>
        <MDBCol className='mt-5 d-flex'>
          <img id='about-me-img' src='images/me.jpg'></img>
          <MDBContainer id='about-me-text' className='flex-wrap'>
            <p><em>Currently attending University of Minnesota Full-Stack Coding Bootcamp full-time.</em></p>
            <p>I've been coding as a hobby for several years seeking opportunities to write code to provide solutions for problems I've encountered in my day-to-day life. I enjoy the essence of logical-creativity and am excited when I can leverage technology to engage users and drive productivity.</p>
            <p>Through my recent endeavors I've expanded my knowledge base and additionally have experience working on several group development projects, including a full-stack React application <em style={{ fontSize: "80%" }}>(MERN)</em>.</p>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol>
          <p className='mt-5'>My skill set includes these development technologies:</p>
          {/* <MDBListGroup>
            <MDBListGroupItem>HTML</MDBListGroupItem>
            <MDBListGroupItem>CSS</MDBListGroupItem>
              <div className='ms-2 me-auto'>Bootstrap</div>
              <div className='ms-2 me-auto'>Tailwind</div>
            <MDBListGroupItem>JavaScript</MDBListGroupItem>
              <div className='ms-2 me-auto'>subheading</div>
          </MDBListGroup> */}
          <div className='mt-4 tech-chip-container d-flex flex-wrap justify-content-evenly'>
            <div className='tech-chip'>
              <p>HTML</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>CSS</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>JavaScript</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>Node.JS</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>Express.JS</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>MongoDB</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>Mongoose</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>Sequelize</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>Bootstrap 5</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>Tailwind</p>
            </div>
            <div className='tech-chip shadow-5'>
              <p>JQuery</p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}