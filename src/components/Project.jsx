import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Project() {

  return (
    <MDBContainer className='mb-5'>

      <h2 id='project-title' className='d-flex justify-content-center'>Latest Projects</h2>

      <MDBRow>

        <MDBCol id='project-1' className='project-item'>
          <h4><a href='https://thinksync-1e5fbc55e5f7.herokuapp.com/'>ThinkSync</a></h4>
          <p>ThinkSync is a web application for coming to a decision between multiple ideas. It is created with React.js, MongoDB, Express, and Material Design for Bootstrap CSS framework. This is my final group project for University of Minnesota Full-Stack Flex Coding Bootcamp.</p>
          <img src='images/screenshot_thinksync.png' className='project-screenshot'></img>
        </MDBCol>

      </MDBRow>
      <MDBRow>

      <MDBCol id='project-2' className='project-item'>
          <h4><a href='https://github.com/johntg96/konsoom'>konsoom</a></h4>
          <p>A collaborative project curating a movie and TV series list for future viewing, with cover art, dark mode, and persistent data storage using browser local storage. Data fetched through the OMDB API for comprehensive results.</p>
          <img src='images/screenshot_konsoom.png' className='project-screenshot'></img>
        </MDBCol>

        <MDBCol id='project-3' className='project-item'>
          <h4><a href='https://github.com/johntg96/tech_blog'>tech_blog</a></h4>
          <p>Created using sequelize and express, this application has login/signup functionality and pages generated via Handlebars.</p>
          <img src='images/screenshot_tech_blog.png' className='project-screenshot'></img>
        </MDBCol>

        <MDBCol id='project-4' className='project-item'>
          <h4><a href='https://github.com/johntg96/waterCalc'>waterCalc</a></h4>
          <p>I designed a website to calculate Sodium Bicarbonate and Calcium Chloride weights for achieving optimal hot tub and pool water balance. Initially created for personal use during my role as a maintenance associate at the YMCA.</p>
          <img src='images/screenshot_waterCalc.png' className='project-screenshot'></img>
        </MDBCol>

      </MDBRow>
      <MDBRow>

        <MDBCol id='project-5' className='project-item'>
          <h4><a href='https://github.com/johntg96/h0ldb1nz'>h0ldb1nz</a></h4>
          <p>I developed a specialized work tool that optimizes the logging of computer hardware and service repair order ticket status (SRO) through a graphical user interface. This tool significantly enhanced my efficiency in performing specific work tasks. It possesses the capability to generate tabular data in both JSON and CSV formats. It's important to note that this is a front-end application exclusively.</p>
          <img src='images/screenshot_h0ldb1nz.png' className='project-screenshot'></img>
        </MDBCol>

        {/* <MDBCol id='project-6' className='project-item'>
          <h4><a href='https://github.com/johntg96/code_quiz'>code_quiz</a></h4>
          <p>A simple timed and graded quiz written using javascript.</p>
        </MDBCol> */}

      </MDBRow>
    </MDBContainer>
  )
}