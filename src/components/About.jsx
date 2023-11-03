import React, { useState } from 'react';
import { MDBContainer, 
        MDBRow, 
        MDBCol,
        MDBListGroup,
        MDBListGroupItem,
      } from 'mdb-react-ui-kit';
import DraggableBird from './DraggableBird';


export default function About() {

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDraggableBirdData = (dragging, newPosition) => {
    setIsDragging(dragging);
    setPosition(newPosition);
  };

  return (
    <>
      <h3 className='mt-5 mb-4 d-flex justify-content-center align-items-center' id='about-me-title'>About Me</h3>
      <MDBContainer fluid className='about-me-content'>
        <MDBRow>
          <MDBCol>
            <div id='about-me-img-container' className='mt-4 mb-2' >
              {/* DraggableBird is a small super space chicken that the user can drag around if using a touchscreen capable device */}
              <DraggableBird isDragging={isDragging} onDraggableBirdData={handleDraggableBirdData} />
              <img id='about-me-img' src='images/me_animated.webp'></img>
            </div>
            
          </MDBCol>
          <MDBCol className='mt-5 about-me-bullet-list'>
            <ul style={{minWidth: '15em', maxWidth: '30em', }}>
            <li><p>I am currently seeking a position as a full-time web developer.</p></li>
            <li><p>My resume is available &#x2192; <a href='https://docs.google.com/document/d/1sd07dV3R7xevumimU5AJD6_v1yE2rwYursuW1r_Ypqg/edit?usp=sharing' id='resume-link' style={{textDecoration:'underline'}}>here</a><span style={{fontSize: '0.7em', marginLeft:'1em'}}><br/>(Google Docs)</span></p></li>
              <li><p>Through my computer endeavors I've participated in several team-focused development projects, one being a full-stack react application <em style={{ fontSize: "80%" }}>(<a href="https://github.com/johntg96/ThinkSync" style={{ color: 'white' }}>ThinkSync</a>)</em>.</p></li>
            </ul>
          </MDBCol>
        </MDBRow>
          <MDBRow>
            <MDBCol className='mt-4'>
            <div className='d-flex flex-column align-items-center'>
              <p className='mt-3 personal-description'>
                My name is John and I am a certified full-stack web developer from the <a id='u-of-m-link' href='https://ccaps.umn.edu/full-stack-web-development-certificate-coding-boot-camp' alt='link to university website'>University of Minnesota Full Stack Web Development Coding Boot Camp</a>.
              </p>
              <div id='cert-badge-mobile' className='mt-2 mb-3'>
                <div className='wobble-animation'>
                  <a href='https://www.credly.com/badges/dfed0a33-d201-4047-9e5a-9913d4abdad9/public_url'>
                    <img src='/images/full-stack-web-development-certificate-coding-boot-camp_mobile.png' alt='certificate badge' style={{width: '7.5em'}}/>
                  </a>
                </div>
              </div>
              <p className='personal-description'>
                Before diving into web development, I taught myself web development basics. I used this knowledge to create web applications that improved my work, like making a tool to perform hot tub and pool calculations for me when I worked at the YMCA.&nbsp;
                <img src='images/me_cats_plant_art.png' className='me-cats-art'/>
                My background was in computer hardware repair, but I gradually shifted towards software. I'm dedicated to enhancing my skills to consistently improve the quality of my work.
              </p>
            </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className='mb-4'>
          <MDBRow>
            <MDBCol>
              <p className='mt-4'><em>I am familiar to fluent in these languages, libraries, and frameworks (and always learning):</em></p>
              <div className='mt-4 tech-chip-container'>
                <div className='tech-chip'>
                  <p>HTML</p>
                  <img src='/images/tech-chip-icons/html.png'/>
                </div>
                <div className='tech-chip'>
                  <p>CSS</p>
                  <img src='/images/tech-chip-icons/css.png'/>
                </div>
                <div className='tech-chip'>
                  <p>JavaScript</p>
                  <img src='/images/tech-chip-icons/javascript.png'/>
                </div>
                <div className='tech-chip'>
                  <p>React</p>
                  <img src='/images/tech-chip-icons/react.png'/>
                </div>
                <div className='tech-chip'>
                  <p>Node</p>
                  <img src='/images/tech-chip-icons/node.png'/>
                </div>
                <div className='tech-chip'>
                  <p>Express</p>
                  <img src='/images/tech-chip-icons/express.png'/>
                </div>
                <div className='tech-chip'>
                  <p>MongoDB</p>
                  <img src='/images/tech-chip-icons/mongodb.png'/>
                </div>
                <div className='tech-chip'>
                  <p>Mongoose</p>
                  <img src='/images/tech-chip-icons/mongoose.png'/>
                </div>
                <div className='tech-chip'>
                  <p>MySQL</p>
                  <img src='/images/tech-chip-icons/mysql.png'/>
                </div>
                <div className='tech-chip'>
                  <p>Sequelize</p>
                  <img src='/images/tech-chip-icons/sequelize.png'/>
                </div>
                <div className='tech-chip'>
                  <p>Bootstrap</p>
                  <img src='/images/tech-chip-icons/bootstrap.png'/>
                </div>
                {/* <div className='tech-chip'>
                  <p>Tailwind</p>
                  <img src='/images/tech-chip-icons/tailwind.png'/>
                </div> */}
                <div className='tech-chip'>
                  <p>JQuery</p>
                  <img src='/images/tech-chip-icons/jquery.png'/>
                </div>
                <div className='tech-chip'>
                  <p>Python</p>
                  <img src='/images/tech-chip-icons/python.png'/>
                </div>
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}