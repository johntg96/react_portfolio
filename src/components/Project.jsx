import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Project() {

  return (
    <MDBContainer>
      <MDBRow>

        <MDBCol id='project-1' className='project-item shadow-3'>
          <h4>konsoom</h4>
          <p>A collaborative project curating a movie and TV series list for future viewing, with cover art, dark mode, and persistent data storage using browser local storage. Data fetched through the OMDB API for comprehensive results.</p>
          <img src='images/screenshot_konsoom.png' className='project-screenshot'></img>
        </MDBCol>

        <MDBCol id='project-2' className='project-item shadow-3'>
          <h4>h0ldb1nz</h4>
          <p>I developed a specialized work tool that optimizes the logging of computer hardware and service repair order ticket status (SRO) through a graphical user interface. This tool significantly enhanced my efficiency in performing specific work tasks. It possesses the capability to generate tabular data in both JSON and CSV formats. It's important to note that this is a front-end application exclusively.</p>
          <img src='images/screenshot_h0ldb1nz.png' className='project-screenshot'></img>
        </MDBCol>
        
        <MDBCol id='project-3' className='project-item shadow-3'>
          <h4>Weather Dashboard</h4>
          <p>This web application utilizes openweathermap's free API to present forecast data. It offers information on current weather conditions, including temperature, wind speed, and humidity, along with a 5-day forecast.</p>
          <img src='images/screenshot_weather_dashboard.png' className='project-screenshot'></img>
        </MDBCol>

      </MDBRow>
      <MDBRow>

        <MDBCol id='project-4' className='project-item shadow-3'>
          <h4>tech_blog</h4>
          <p>Created using sequelize and express, this application has login/signup functionality and pages generated via Handlebars.</p>
        </MDBCol>

        <MDBCol id='project-5' className='project-item shadow-3'>
          <h4>waterCalc</h4>
          <p>I designed a website to calculate Sodium Bicarbonate and Calcium Chloride weights for achieving optimal hot tub and pool water balance. Initially created for personal use during my role as a maintenance associate at the YMCA.</p>
          <img src='images/screenshot_waterCalc.png' className='project-screenshot'></img>
        </MDBCol>

        <MDBCol id='project-6' className='project-item shadow-3'>
          <h4>code_quiz</h4>
          <p>A simple timed and graded quiz written using javascript.</p>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  )
}