import React from 'react';
import Project from '../components/Project'
import About from '../components/About'

export default function Home() {

  return (
    <>
      <Project />
      <hr className='mt-4 hr hr-blurry'/>
      <About />
      <hr className='mt-4 hr hr-blurry'/>
    </>
  )
}