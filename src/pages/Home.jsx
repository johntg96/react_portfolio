import React from 'react';
import Project from '../components/Project'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <About />
      <div id='image-banner-reversed'></div>
      <Project />
      <div id='image-banner'></div>
      <Footer />
    </>
  )
}