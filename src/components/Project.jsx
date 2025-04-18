import React, {useState} from 'react';
import {  MDBContainer, 
          MDBRow,
          MDBCol,
          MDBIcon
} from 'mdb-react-ui-kit';
import MoveableBird from './MoveableBird';

export default function Project() {

  const [isBirdMoving, setBirdIsMoving] = useState(false);
  const [birdPosition, setBirdPosition] = useState({ x: 0, y: 0 });

  const handleMoveableBirdData = (moving, newBirdPosition) => {
    setBirdIsMoving(moving);
    setBirdPosition(newBirdPosition);
  };

  return (
    <MDBContainer className='mb-5'>

      <h2 id='project-title' className='d-flex justify-content-center'>Web Development Projects</h2>

      <MDBRow>

        <MDBCol id='project-1' className='project-item'>
          <h4><a href='https://thinksync-cd83f331c4e6.herokuapp.com/' title='visit deployed application'>ThinkSync </a>&nbsp;<a href='https://github.com/johntg96/ThinkSync' title='go to GitHub repository'><MDBIcon fab icon='github' /></a></h4>
          <p>Imagine you have a pool of ideas but it is overflowing. Faucets of thoughts continually filling this pool. It is your job to turn off the valves for each idea so you can come to a solid stream of directional flow.</p>
          <div className='d-flex justify-content-center align-content-center'>
            <img src='/images/project-icons/thinksync.ico' style={{width: '3em'}}/>
          </div>
          <p>
          ThinkSync is a website that after creating an account, allows you to narrow down a set of ideas under a general topic or question. All of the entered ideas are then paired together, forcing the user to select a winner from each pair. They are then shuffled, paired again, and the cycle continues until a final winner for your topic or question results. The vote count for each idea and the overall winner is stored in your account.</p>
          <div className='d-flex justify-content-center align-content-center' style={{backgroundColor:'gray'}}>
            <img src='images/screenshot_thinksync.webp' className='project-screenshot'></img>
          </div>
        </MDBCol>

      </MDBRow>
      <MDBRow>

      <MDBCol id='project-2' className='project-item'>
          <h4><a href='https://johntg96.github.io/konsoom/' title='visit deployed application'>konsoom&nbsp;&nbsp;<img src='images/project-icons/konsoom.ico' style={{width: '1.5em'}}/></a>&nbsp;&nbsp;<a href='https://github.com/johntg96/konsoom' title='go to GitHub repository'><MDBIcon fab icon='github' /></a></h4>
          <p>A collaborative project curating a movie and TV series list for future viewing, with cover art, dark mode, and persistent data storage using browser local storage. Data fetched through the OMDB API for comprehensive results.</p>
          <div className='d-flex justify-content-center align-content-center' style={{backgroundColor:'gray'}}>
            <img src='images/screenshot_konsoom.webp' className='project-screenshot'></img>
          </div>
        </MDBCol>

        <MDBCol id='project-3' className='project-item'>
          <h4><a href='https://johntg96.github.io/Weather-Dashboard/' title='visit deployed application'>Weather Dashboard</a>&nbsp;&nbsp;<a href='https://github.com/johntg96/Weather-Dashboard/' title='go to GitHub repository'><MDBIcon fab icon='github' /></a></h4>
          <p>Weather Dashboard fetches weather data from OpenWeatherMap and saves search queries in local storage.</p>
          <div className='d-flex justify-content-center align-content-center' style={{backgroundColor:'gray'}}>
            <img src='images/screenshot_weather_dashboard.webp' className='project-screenshot'></img>
          </div>
        </MDBCol>

        <MDBCol id='project-4' className='project-item'>
          <h4><a href='https://johntg96.github.io/waterCalc/' title='visit deployed application'>waterCalc</a>&nbsp;&nbsp;<a href='https://github.com/johntg96/waterCalc' title='go to GitHub repository'><MDBIcon fab icon='github' /></a></h4>
          <p>I developed a website to calculate Sodium Bicarbonate and Calcium Chloride weights for achieving optimal hot tub and pool water balance.</p>
          <ul>
            <li>Created as a hobby project for learning purposes</li>
            <li>I used this tool during my role as a maintenance associate at the YMCA.</li>
          </ul>
          <div className='d-flex justify-content-center align-content-center' style={{backgroundColor:'gray'}}>
            <img src='images/screenshot_waterCalc.webp' className='project-screenshot'></img>
          </div>
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
          <div className='d-flex justify-content-center align-content-center' style={{backgroundColor:'gray'}}>
            <img src='images/screenshot_h0ldb1nz.webp' className='project-screenshot'></img>
          </div>
        </MDBCol>
      </MDBRow>
      <MoveableBird isDragging={isBirdMoving} onMoveableBirdData={handleMoveableBirdData} />
    </MDBContainer>
  )
}