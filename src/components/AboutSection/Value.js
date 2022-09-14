import React from 'react'
import './About.css'
import Rocket from '../../images/value.png'
import Dot from '../../images/dot-3.png'

function Value() {
  return (
    <section>
          <div className='container'>
     
        <div className='row'>
            <div className='col-md-6'>
            <div className='h-tag'>
                <span className='red'>What We Believe In </span>
                <h2>Our Values</h2>
              </div>
            <div className='img-wrap'>
              <img src={Rocket} alt='about-img' className='about-img-2'/>
                </div>
            </div>

            <div className='col-md-6'>
                <div className='para-wrap'>
                
                <p>Inspire360 is founded on four core values: unique purpose, connectedness, excellence, and 
                  integrity. These, in turn, lead to practices that foster personal, family and community growth.
                   
                </p>
             <div className='d-flex dot-box'>
              <div className='d-flex'>
<img src={Dot} alt="dot"/>
<h2>Unique Purpose</h2>
              </div>
              <div className='d-flex'>
<img src={Dot} alt="dot"/>
<h2>Connectedness</h2>
              </div>

             </div>
             <div className='d-flex dot-box'>
              <div className='d-flex' style={{paddingRight:'64px'}}>
<img src={Dot} alt="dot"/>
<h2>Excellence</h2>
              </div>
              <div className='d-flex'>
<img src={Dot} alt="dot"/>
<h2>Integrity</h2>
              </div>

             </div>
                
                </div>

                </div>

        </div>

    </div>
    </section>
  )
}

export default Value