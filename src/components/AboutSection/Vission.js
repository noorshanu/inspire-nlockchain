import React from 'react'
import './About.css'
import About from '../../images/vision.png'
import Circle4 from '../../images/circle-4.png'
import Side from '../../images/side.png'

function Vission() {
  return (
    <section>
      <img src={Circle4} alt='' className='crl4' />
      <img src={Side} alt='' className='clr5'/>
          <div className='container'>
     
        <div className='row'>
            <div className='col-md-6'>
                <div className='para-wrap'>
                
                <p>We imagine a world where people are inspired to live their dreams tapping into 
                  and unleashing their full potential and reshaping local families, communities and economies.

   </p>
                <p> We believe in a world where everyone can prosper and unleash their gift to contribute and have an impact in their communities,
                   their cities, their countries and in the world.</p>
                

                </div>
            </div>

            <div className='col-md-6'>
            <div className='h-tag'>
                <span className='red'>The Change We Want</span>
                <h2>Our Vision </h2>
              </div>
            <div className='img-wrap'>
                    <img src={About} alt='about-img' className='about-img'/>

                </div>

                

                </div>

        </div>

    </div>
    </section>
  )
}

export default Vission