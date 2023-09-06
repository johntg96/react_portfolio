import React from 'react';
import Project from '../components/Project'

export default function Home() {

  return (
    <>
      <h3 id='project-title' className='d-flex justify-content-center'>Projects I've Been Working On</h3>
      <Project/>
      <hr className='mt-4'/>
    </>
  )
}