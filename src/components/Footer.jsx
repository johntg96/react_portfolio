import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='footer text-center'>
      <MDBContainer className='p-3 pb-0'>
        <section className='pb-3'>

          <MDBBtn outline color="warning" className='m-2' href='https://www.linkedin.com/in/johntg96/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="warning" className='m-2' href='https://github.com/johntg96' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  )
}