import React, { useState } from 'react';
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
      <MDBContainer fluid className='about-me-content'>
        <MDBRow>
          <MDBCol>
            <div id='about-me-img-container' className='mt-4 mb-2' >
              <img id='about-me-img' src='images/pic-latest.webp'></img>
            </div>
          </MDBCol>
          <MDBCol className='mt-5 about-me-bullet-list'>
            <ul style={{minWidth: '15em', maxWidth: '30em', }}>
              <li><p>Welcome to my web development portfolio website 😃<br/> </p></li>
              <li><p>My resume is available &#x2192; <a href='https://docs.google.com/document/d/1sd07dV3R7xevumimU5AJD6_v1yE2rwYursuW1r_Ypqg/edit?usp=sharing' id='resume-link' style={{textDecoration:'underline'}}>here</a><span style={{fontSize: '0.7em', marginLeft:'1em'}}><br/>(Google Docs)</span></p></li>
              <li><p>Through my computer endeavors I've participated in several team-focused development projects, one being a full-stack react application <em style={{ fontSize: "80%" }}>(<a href="https://github.com/johntg96/ThinkSync" style={{ color: 'white' }}>ThinkSync</a>)</em>.</p></li>
            </ul>
          </MDBCol>
        </MDBRow>
          <MDBRow>
            <MDBCol className='mt-4'>
            <div className='d-flex flex-column align-items-center'>
              <p className='mt-3 personal-description'>
                My name is John and I am a certified full-stack web developer from the <a id='u-of-m-link' href='https://ccaps.umn.edu/full-stack-web-development-certificate-coding-boot-camp' alt='link to university website'>University of Minnesota Full Stack Web Development Coding Boot Camp</a>&nbsp;<span style={{ fontSize: '0.8em', fontStyle: "monospace" }}>('23)</span>.
              </p>
              <div id='cert-badge-mobile' className='mt-2 mb-3'>
                <div className='wobble-animation'>
                  <a href='https://www.credly.com/badges/dfed0a33-d201-4047-9e5a-9913d4abdad9/public_url'>
                    <img src='/images/full-stack-web-development-certificate-coding-boot-camp_mobile.webp' alt='certificate badge' style={{width: '7.5em'}}/>
                  </a>
                </div>
              </div>
              <p className='personal-description'>
                I am interested in computers and networking as a whole with subsets of knowledge (some deeper than others) in various areas.
                I am a general computer hobbyist with interests in fields of website development, OS administration, and game development (my next project).
                Some of my self-taught knowledge came from applying free learning resources to improve efficiency (even slightly) while I was on the job.
                <ul>
                  <br/>
                  <li>YMCA</li>
                    <ul>
                      <li>Position: Maintenance Associate</li>
                      <li>At the YMCA I was involved with general building maintenance. One of my duties was to check the pool and hot-tub water balance to see whether chemicals needed to be added to the water.
                        The calculations are simple, yet time-consuming enough that I built a simple UI to perform the calculations with JavaScript. This was one of my <em>first</em> web development applications <em style={{ fontSize: "80%" }}>(waterCalc)</em>.
                      </li>
                    </ul>
                    <br/>
                    <li>Trafera</li>
                    <ul>
                      <li>Position: Computer Repair Technician III</li>
                      <li>I was given the task of resolving data inconsitency/misalignment with hardware components and service repair order devices awaiting repair in hold bins.
                        I worked alongside the OEM receiving/shipping department and the OEM submission team to collect data and resolve errors such as:
                        <ul style={{ fontSize: '0.8em', fontFamily: 'monospace' }}>
                          <br/>
                          <li>OEM/internal parts being placed in the wrong warranty category</li>
                          <li>Devices being placed in the wrong warranty category</li>
                          <li>Parts being matched with the wrong devices</li>
                          <li>Parts + Devices being located in the wrong hold bin</li>
                          <li>Missing parts and/or devices</li>
                          <li>Mismatches between parts and devices</li>
                          <br/>
                        </ul>
                        After awhile I began to automate my Excel spreadsheets with Visual Basic. The data became larger and larger, yet the process to resolve these issues stayed the same.
                        I felt this was a great learning opportunity, so I then created a web application for myself to help speed up efficiency in the logging process.
                        This became a <em>deeper introduction</em> into web development for me <em style={{ fontSize: "80%" }}>(h0ldb1nz)</em>.
                      </li>
                    </ul>
                </ul>
                <img src='images/me_cats_plant_art_fresh-shadow.webp' className='me-cats-art-with-shadows'/>
                <img src='images/me_cats_plant_art_fresh.webp' className='me-cats-art-without-shadows'/>
                My background was in computer hardware repair, but I gradually shifted towards software. I'm dedicated to enhancing my skills to consistently improve the quality of my work.
              </p>
            </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className='mb-4'>
            <div className='mt-4 tech-chip-container'>
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
              {/* <div className='tech-chip'>
                <p>Tailwind</p>
                <img src='/images/tech-chip-icons/tailwind.webp'/>
              </div> */}
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