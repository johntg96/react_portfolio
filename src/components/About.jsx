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
      <MDBContainer fluid className='about-me-content'>
        <MDBRow>
          <MDBCol>
              <div id='about-me-img-container' className='mt-4 mb-2' >
                <img id='about-me-img' src='images/me_animated.gif'></img>
              </div>
          </MDBCol>
          <MDBCol className='mt-5 about-me-bullet-list'>
            <ul style={{minWidth: '15em', maxWidth: '30em', }}>
              <li><p>Through my computer endeavors I've participated in several team-focused development projects, one being a full-stack react application <em style={{ fontSize: "80%" }}>(<a href="https://github.com/johntg96/ThinkSync" style={{ color: 'white' }}>ThinkSync</a>)</em>.</p></li>
              <li><p>My resume is available &#x2192; <a href='https://docs.google.com/document/d/1sd07dV3R7xevumimU5AJD6_v1yE2rwYursuW1r_Ypqg/edit?usp=sharing' id='resume-link' style={{textDecoration:'underline'}}>here</a><span style={{fontSize: '0.7em', marginLeft:'1em'}}><br/>(Google Docs)</span></p></li>
              <li><p>I am currently seeking a position as a full-time web developer.</p></li>
            </ul>
          </MDBCol>
        </MDBRow>
          <MDBRow>
            <MDBCol className='mt-4'>
              <div className='d-flex flex-wrap justify-content-center'>
                <img src='images/me_cats_art.png' className='me-cats-art-mobile'/>
                <p className='mt-5'>My name is John and I am a graduate from the <a id='u-of-m-link' href='https://ccaps.umn.edu/full-stack-web-development-certificate-coding-boot-camp' alt='link to university website'>University of Minnesota Full Stack Web Development Coding Boot Camp</a>.
                <br/>
                <div id='cert-badge-mobile' className='mt-3 mb-3'>
                  <div className='wobble-animation'>
                    <a href='https://www.credly.com/badges/dfed0a33-d201-4047-9e5a-9913d4abdad9/public_url'>
                        <img src='/images/full-stack-web-development-certificate-coding-boot-camp_mobile.png' alt='certificate badge' style={{width: '7.5em'}}/>
                      </a>
                  </div>
                </div>
                  In the several years prior to studying web development professionally, I self-taught myself web dev basics.
                  <br/>
                  Applying what I learned to build web applications to help me do my job better.
                  <br/>
                  I have a background in computer hardware repair, followed by a stronger interest in software.
                  <br/>
                  I am highly interested in developing my skills to continually improve the quality of my work.
                </p>
                <br/>
                <img src='images/me_cats_art.png' className='me-cats-art'/>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className='mb-4'>
          <MDBRow>
            <MDBCol>
              <p className='mt-4'><em>My skill set includes these development technologies (and always learning):</em></p>
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