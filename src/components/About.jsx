import React, { useState } from 'react';
import { MDBContainer, 
        MDBRow, 
        MDBCol
      } from 'mdb-react-ui-kit';

export default function About() {
  return (
    <>
      {/* <h3 className='mt-5 mb-4 d-flex justify-content-center align-items-center' id='about-me-title'></h3> */}
      <MDBContainer fluid className='about-me-content'>
        <MDBRow>
          <MDBCol>
            <div id='about-me-img-container' className='mt-4 mb-2' >
              <img id='about-me-img' src='images/pic-latest.webp'></img>
            </div>
          </MDBCol>
          <MDBCol className='about-me-bullet-list'>
            <ul style={{minWidth: '15em', maxWidth: '30em', }}>
              <li><strong>Welcome</strong> to my web development portfolio website 😃</li>
              <br/>
              <li>On this site you will find links to various web projects I've built (or with peers), repository links, and a contact form.</li>
              {/* <li><p>Through my computer endeavors I've participated in several team-focused development projects, one being a full-stack react application <em style={{ fontSize: "80%" }}>(<a href="https://github.com/johntg96/ThinkSync" style={{ color: 'blue' }}>ThinkSync</a>)</em>.</p></li> */}
            </ul>
          </MDBCol>
        </MDBRow>
          <MDBRow>
            <MDBCol className='mt-4'>
            <div className='d-flex flex-column align-items-center'>
              <p className='mt-3 personal-description'>
                My name is John and I am a web developer. I completed the <a id='u-of-m-link' href='https://ccaps.umn.edu/full-stack-web-development-certificate-coding-boot-camp' alt='link to university website'>University of Minnesota Full Stack Web Development Coding Boot Camp</a>&nbsp;<span style={{ fontSize: '0.8em', fontStyle: "monospace" }}>(2023)</span>.
                <br/>
                <br/>
                I am working towards a career in software development.
                I am planning to complete a college degree as well as various IT certifications.
                I enjoy coding and work/practice (often) to keep building upon what I've been building on.
                Such as:
              </p>
              <ul className='personal-description'>
                <li>Typing speed</li>
                <li>Terminal-centric OS use</li>
                <li>Hardware + software customization and configuration (farther down the rabbit hole)</li>
              </ul>
              <div id='cert-badge-mobile' className='mt-2 mb-3'>
                <div className='wobble-animation'>
                  <a href='https://www.credly.com/badges/dfed0a33-d201-4047-9e5a-9913d4abdad9/public_url'>
                    <img src='/images/full-stack-web-development-certificate-coding-boot-camp_mobile.webp' alt='certificate badge' style={{width: '7.5em'}}/>
                  </a>
                </div>
              </div>

              <p className='personal-description'>
                Recently I have been learning software development containerization.
                <br/>
                <br/>
                I am interested in freelance projects that are in my experience range, especially web development projects for small businessess.
              </p>

              <img src='images/me_cats_plant_art_with_tree.png' className='me-cats-art'/>

            </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className='mb-4 tech-chip-container'>
            <div className='mt-4 tech-chip-row'>
              <div className='tech-chip'>
                <p>HTML</p>
                <img src='/images/tech-chip-icons/html.webp'/>
              </div>
              <div className='tech-chip'>
                <p>CSS</p>
                <img src='/images/tech-chip-icons/css.webp'/>
              </div>
              <div className='tech-chip'>
                <p>JavaScript</p>
                <img src='/images/tech-chip-icons/javascript.webp'/>
              </div>
              <div className='tech-chip'>
                <p>React</p>
                <img src='/images/tech-chip-icons/react.webp'/>
              </div>
              <div className='tech-chip'>
                <p>Node</p>
                <img src='/images/tech-chip-icons/node.webp'/>
              </div>
              <div className='tech-chip'>
                <p>Express</p>
                <img src='/images/tech-chip-icons/express.webp'/>
              </div>
              <div className='tech-chip'>
                <p>MongoDB</p>
                <img src='/images/tech-chip-icons/mongodb.webp'/>
              </div>
              <div className='tech-chip'>
                <p>Mongoose</p>
                <img src='/images/tech-chip-icons/mongoose.webp'/>
              </div>
              <div className='tech-chip'>
                <p>MySQL</p>
                <img src='/images/tech-chip-icons/mysql.webp'/>
              </div>
              <div className='tech-chip'>
                <p>Sequelize</p>
                <img src='/images/tech-chip-icons/sequelize.webp'/>
              </div>
              <div className='tech-chip'>
                <p>Bootstrap</p>
                <img src='/images/tech-chip-icons/bootstrap.webp'/>
              </div>
              <div className='tech-chip'>
                <p>JQuery</p>
                <img src='/images/tech-chip-icons/jquery.webp'/>
              </div>
              <div className='tech-chip'>
                <p>Python</p>
                <img src='/images/tech-chip-icons/python.webp'/>
              </div>
            </div>
         
      </MDBContainer>
    </>
  )
}