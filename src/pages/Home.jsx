import React from 'react';
import Project from '../components/Project'
import About from '../components/About'
import ContactEmail from '../components/ContactEmail'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Contact from './Contact';

export default function Home() {

  return (
    <>
      <About />
      <div id='image-banner-reversed'></div>
      <Project />
      <div id='image-banner'></div>
      {/* <ContactForm /> */}
      <ContactEmail />
      <Footer />
    </>
  )
}