import React from 'react'
import './About.css'
import Rocket from '../../images/rocket.png'

function MissionHead() {
  return (
    <section>
          <div className='container'>
        {/* <div className='header-tag-2'>
            <h1 className=''>OUR MISSION</h1>

        </div> */}
        <div className='row'>
            <div className='col-md-6'>
              <div className='h-tag'>
                <span className='red'>Where We are Going</span>
                <h2>Our Mission </h2>
              </div>
            <div className='img-wrap'>
              <img src={Rocket} alt='about-img-2' className='about-img-2'/>
                </div>
            </div>

            <div className='col-md-6'>
                <div className='para-wrap'>
                
                <p>Inspire360’s mission is to build a platform of financial system that creates conditions of prosperity—for everyone, every people, every family, and every community. It starts here.
                  We believe in a gift economy.
                </p>
                <p> we want growth for people, families, communities, local economies for a larger impact</p>
                
                </div>

                </div>

        </div>

    </div>
    </section>
  )
}

export default MissionHead