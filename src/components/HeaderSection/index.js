import React from 'react'
import './Header.css'
import Blue from '../../images/blue.png'
import Red from '../../images/red.png'
import Circle from '../../images/circle-3.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function HeaderSection() {
  return (
    <div className='container'>

      <img src={Blue} alt='blue' className='blue-side'/>
      <img src={Circle} alt='cir' className='top-circle'/>
      <img src={Red} alt='blue' className='red-side'/>
         <Carousel  showArrows={false}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={false}
        autoPlay={true}
        interval={6100}>
        <div className='head-text'>
            <h1>
            Live A life <br/>Of impact.
            </h1>

            <p>INSPIRE360 is founded on four core values: unique purpose,<br/> connectedness, excellence, And integrity. These, in turn, lead to <br/>practices that foster personal, family and community growth.
</p>

        </div>
        <div className='head-text'>
            <h1>
            Live A life <br/>Of impact.
            </h1>

            <p>INSPIRE360 is founded on four core values: unique purpose,<br/> connectedness, excellence, And integrity. These, in turn, lead to <br/>practices that foster personal, family and community growth.
</p>

        </div>
        <div className='head-text'>
            <h1>
            Live A life <br/>Of impact.
            </h1>

            <p>INSPIRE360 is founded on four core values: unique purpose,<br/> connectedness, excellence, And integrity. These, in turn, lead to <br/>practices that foster personal, family and community growth.
</p>

        </div>
        </Carousel>
        </div>
  )
}

export default HeaderSection