import React, { useState } from 'react';
import {  MDBContainer,
          MDBRow, 
          MDBCol,
          MDBInput,
          MDBBtn,
          MDBTextArea
        } from 'mdb-react-ui-kit';
import { sendCustomEmail } from './email';

export default function ContactForm() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      }
    });
  };

  const handleSendEmail = () => {
      sendCustomEmail(details);
  };

  return (
    <>
      <h2 className='mt-5 d-flex flex-nowrap justify-content-center align-items-center'>Contact Me</h2>

      <MDBContainer className='mt-4 mb-5 d-flex justify-content-center align-items-center'>
        <MDBCol>
          <MDBRow className='mb-3'>
            <MDBInput
              label="name"
              type="text"
              id="name"
              name="name"
              value={details.name}
              onChange={handleDetailsChange}
              required
              contrast
              className='input-box'
            />
          </MDBRow>
        <MDBRow  className='mb-3'>
          <MDBInput
              label="email"
              type="email"
              id="email"
              name="email"
              value={details.email}
              onChange={handleDetailsChange}
              required
              contrast
              className='input-box'
            />
        </MDBRow>
        <MDBRow>
          <MDBTextArea
            label="message"
            id="message"
            name="message"
            value={details.message}
            onChange={handleDetailsChange}
            required
            contrast
            className='input-box'
          ></MDBTextArea>
        </MDBRow>
        <MDBBtn className='mt-4' 
                disabled={!details.name || !details.email || !details.message}
                onClick={handleSendEmail}
        >
          Send Email
        </MDBBtn>
      </MDBCol>
      </MDBContainer>
    </>
  );
}

