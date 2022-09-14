import React from 'react'
import './About.css'
import AboutHead from './AboutHead'
import MissionHead from './MissionHead'
import Value from './Value'
import Vission from './Vission'

function index() {
  return (
   <section className='main-about'>
  <AboutHead/>
  <MissionHead/>
  <Vission/>
  <Value/>
   </section>
  )
}

export default index