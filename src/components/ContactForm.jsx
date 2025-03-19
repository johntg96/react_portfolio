// Working implementation, but imo overdone -> Not currently in use.

import React, { useState } from 'react';
import {  MDBContainer,
          MDBRow, 
          MDBCol,
          MDBInput,
          MDBBtn,
          MDBTextArea,
          MDBModal,
          MDBModalDialog,
          MDBModalContent,
          MDBModalHeader,
          MDBModalTitle,
          MDBModalBody,
          MDBModalFooter
        } from 'mdb-react-ui-kit';
import { sendCustomEmail } from './email';

export default function ContactForm() {

  // // MDB Bootstrap Modal
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  // Form data
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      }
    });
  };

  const handleSendEmail = async () => {
    let emailRegex = /^[a-z0-9]+@(?!.*@)[a-z]+\.[a-z]{2,3}$/;

    if (!emailRegex.test(details.email)) {
      // invalid email
      handleShowModal();
    } else {
      // valid email
      try {
        await sendCustomEmail(details);
        setStatus(200);
        setDetails({
          name: '',
          email: '',
          message: ''
        });
      } catch (err) {
        console.error('Error sending email:', err);
        setStatus(500);
      }
    }
  };

  return (
    <>
      <h2 className='mt-5 d-flex flex-nowrap justify-content-center align-items-center' id="contact-me-title">Contact Me</h2>

      <MDBContainer className='mt-4 mb-5 d-flex justify-content-center align-items-center'>
        <MDBCol>
          <MDBRow className='mb-3 ms-2 me-2'>
            <MDBInput
              label="name"
              type="text"
              id="name"
              name="name"
              value={details.name}
              onChange={handleDetailsChange}
              required
              className='input-box'
            />
          </MDBRow>
          <MDBRow  className='mb-3 ms-2 me-2'>
            <MDBInput
                label="email"
                type="email"
                id="email"
                name="email"
                value={details.email}
                onChange={handleDetailsChange}
                required
                className='input-box'
              />
          </MDBRow>
          <MDBRow className='ms-2 me-2'>
            <MDBTextArea
              label="message"
              id="message"
              name="message"
              value={details.message}
              onChange={handleDetailsChange}
              required
              className='input-box'
            ></MDBTextArea>
          </MDBRow>
          <MDBBtn className='mt-4 ms-2'
                  color='warning'
                  rounded
                  style={{color:"black", fontWeight:"bold", outline:"0.1em solid grey"}}
                  disabled={!details.name || !details.email || !details.message}
                  onClick={handleSendEmail}
          >
            Send Email
          </MDBBtn>
          {status !== null && (
            <div>
              {/* Let user know if email was sent successfully or not*/}
              {status === 200 ? (
                <p className='emailSendStatus'>Email sent <span style={{color:'#lightblue'}}>successfully</span></p>
              ) : (
                <p className='emailSendStatus'><span style={{color:'red'}}>Error</span> sending email</p>
              )}
            </div>
          )}
        </MDBCol>
        <MDBModal show={showModal} onHide={handleCloseModal}>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader style={{backgroundColor:'#991a1a', color:'white'}} className='d-flex justify-content-center'>Invalid Email</MDBModalHeader>
              <MDBModalBody style={{backgroundColor:'#661313', color:'white'}} className='d-flex justify-content-center'>
                <em>Please enter a valid email address.</em>
              </MDBModalBody>
              <MDBModalFooter style={{backgroundColor:'#661313', color:'white'}} className='d-flex justify-content-center'>
                <MDBBtn color='danger' onClick={handleCloseModal}>Dismiss</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </MDBContainer>
    </>
  );
}

