import React, {useState} from 'react';
import {  MDBContainer, 
          MDBRow,
          MDBCol,
          MDBIcon
} from 'mdb-react-ui-kit';
import MoveableBird from './MoveableBird';

export default function Project() {

  const [isDragging, setIsMoving] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMoveableBirdData = (dragging, newPosition) => {
    setIsMoving(dragging);
    setPosition(newPosition);
  };

  return (
    <MDBContainer className='mb-5'>

      <h2 id='project-title' className='d-flex justify-content-center'>Featured Projects</h2>

      <MDBRow>

        <MDBCol id='project-1' className='project-item'>
          <h4><a href='https://thinksync-1e5fbc55e5f7.herokuapp.com/' title='visit deployed application'>ThinkSync <img src='/images/project-icons/thinksync.ico' style={{width: '1.5em'}}/></a>&nbsp;&nbsp;<a href='https://github.com/johntg96/ThinkSync' title='go to GitHub repository'><MDBIcon fab icon='github' /></a></h4>
          <p>ThinkSync is a web application for coming to a decision between multiple ideas. It is created with MongoDB, Express.js, React.js, Node.js (MERN stack) and Material Design for Bootstrap CSS framework. This is my final group project for University of Minnesota Full-Stack Web Development Coding Bootcamp.</p>
          <img src='images/screenshot_thinksync.png' className='project-screenshot'></img>
        </MDBCol>

      </MDBRow>
      <MDBRow>

      <MDBCol id='project-2' className='project-item'>
          <h4><a href='https://johntg96.github.io/konsoom/' title='visit deployed application'>konsoom&nbsp;&nbsp;<img src='images/project-icons/konsoom.ico' style={{width: '1.5em'}}/></a>&nbsp;&nbsp;<a href='https://github.com/johntg96/konsoom' title='go to GitHub repository'><MDBIcon fab icon='github' /></a></h4>
          <p>A collaborative project curating a movie and TV series list for future viewing, with cover art, dark mode, and persistent data storage using browser local storage. Data fetched through the OMDB API for comprehensive results.</p>
          <img src='images/screenshot_konsoom.png' className='project-screenshot'></img>
        </MDBCol>

        <MDBCol id='project-3' className='project-item'>
          <h4><a href='https://tech-blog-johntg96-6194751df56d.herokuapp.com/' title='visit deployed application'>tech_blog</a>&nbsp;&nbsp;<a href='https://github.com/johntg96/tech_blog' title='go to GitHub repository'><MDBIcon fab icon='github' /></a></h4>
          <p>Created using sequelize and express, this application has login/signup functionality and pages generated via Handlebars.</p>
          <img src='images/screenshot_tech_blog.png' className='project-screenshot'></img>
        </MDBCol>

        <MDBCol id='project-4' className='project-item'>
          <h4><a href='https://johntg96.github.io/waterCalc/' title='visit deployed application'>waterCalc</a>&nbsp;&nbsp;<a href='https://github.com/johntg96/waterCalc' title='go to GitHub repository'><MDBIcon fab icon='github' /></a></h4>
          <p>I developed a website to calculate Sodium Bicarbonate and Calcium Chloride weights for achieving optimal hot tub and pool water balance.</p>
          <ul>
            <li>Created as a hobby project for learning purposes</li>
            <li>I used this tool during my role as a maintenance associate at the YMCA.</li>
          </ul>
          <img src='images/screenshot_waterCalc.png' className='project-screenshot'></img>
        </MDBCol>

      </MDBRow>
      <MDBRow>

        <MDBCol id='project-5' className='project-item'>
          <h4><a href='https://johntg96.github.io/h0ldb1nz/' title='visit deployed application'>h0ldb1nz</a>&nbsp;&nbsp;<a href='https://github.com/johntg96/h0ldb1nz' title='go to GitHub repository'><MDBIcon fab icon='github' /></a></h4>
          <p>I developed a specialized work tool that optimizes the logging of computer hardware and service repair order ticket status (SRO) through a graphical user interface. This tool significantly enhanced my efficiency in performing specific work tasks. Written in vanilla HTML, CSS, and JavaScript then wrapped as a desktop application via Electron. Data is read and saved using local JSON files.</p>
          <ul>
            <li>I wanted to mimic most of the simple, basic functionality of common spreadsheet software.</li>
            <ul>
              <li>e.g. color coding based on value, color coding based on time, autofill based on previous selection criteria, and basic import/export of that data.</li>
              <li>I wanted to target very specific input selection criteria for only this task to highlight parts pairing issues based on timeframe.</li>
              <li>I wanted a simple clutter-free user interface that could be used on a small display and/or weak hardware (e.g. old chromebook running linux).</li>
            </ul>
            <li>After I achieved my primary goals, I utilized the application at work weekly for a period of 6 months, using it to gather data to later make email reports.</li>
          </ul>
          <img src='images/screenshot_h0ldb1nz.png' className='project-screenshot'></img>
        </MDBCol>

        {/* <MDBCol id='project-6' className='project-item'>
          <h4><a href='https://github.com/johntg96/code_quiz'>code_quiz</a></h4>
          <p>A simple timed and graded quiz written using javascript.</p>
        </MDBCol> */}

      </MDBRow>
      {/* MoveableBird is a small super space chicken that the user can drag around if using a touchscreen capable device */}
      <MoveableBird isDragging={isDragging} onMoveableBirdData={handleMoveableBirdData} />
    </MDBContainer>
  )
}