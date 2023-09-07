import React, { useState } from 'react';
import {  MDBContainer,
          MDBRow, 
          MDBCol,
          MDBInput,
          MDBBtn,
          MDBTextArea
        } from 'mdb-react-ui-kit';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here, fetch call to server
    console.log('Form submitted with data:', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <h2 className='mt-5 d-flex flex-nowrap justify-content-center align-items-center'>Contact Me</h2>

      <MDBContainer className='mt-4 d-flex justify-content-center align-items-center'>
        <MDBRow>
          <MDBCol>

          </MDBCol>
          <MDBCol>
            
          </MDBCol>
          <MDBCol>
            
          </MDBCol>
        </MDBRow>
        <form onSubmit={handleSubmit}>
          <div>
            <MDBInput
              label="name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              contrast
              className='input-box'
            />
          </div>
          <div>
            <MDBInput
              label="email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              contrast
              className='input-box'
            />
          </div>
          <div>
            <MDBTextArea
              label="message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              contrast
              className='input-box'
            ></MDBTextArea>
          </div>
          <MDBBtn className='mt-4' type="submit">Submit</MDBBtn>
        </form>
      </MDBContainer>
    </>
  );
}

