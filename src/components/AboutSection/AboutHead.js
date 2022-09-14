import React from 'react'
import './About.css'
import About from '../../images/about-1.jpg'

function AboutHead() {
  return (
    <section>
          <div className='container'>
        <div className='header-tag'>
          <span className='red'>Know Us</span>
            <h1 className='red-line'>About</h1>

        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='para-wrap'>
                <h1>We are INSPIRE360</h1>
                <p>We imagine a world where people are inspired to live their dreams tapping into their full potential and reshaping local communities and economices.
                </p>
                <p> we want growth for people, families, communities, local economies for a larger impact</p>
                <p>We build an ecosystem of products that create the conditions financial indipendence and prosperity for everyone.</p>

                </div>
            </div>

            <div className='col-md-6'>
            <div className='img-wrap'>
                    <img src={About} alt='about-img' className='about-img'/>

                </div>

                

                </div>

        </div>

    </div>
    </section>
  )
}

export default AboutHead