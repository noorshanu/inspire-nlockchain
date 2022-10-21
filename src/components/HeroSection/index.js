import React from 'react'
import './Hero.css'
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import ButtonSection from './ButtonSection';


function HeroSection() {
  return (
    <section>
        <div className='container'>


{/* 
            <div className='col-md-8 second-box'>
                <div className='row box-table'>
                    <div className='col-md-3 side-border'>
                        <p>Price</p>
                        <span>0.03$</span>

                    </div>
                    <div className='col-md-3 side-border'>
                    <p>Market Cap</p>
                        <span>10093 $</span>

                    </div>
                    <div className='col-md-3 side-border'>
                    <p>Holders</p>
                        <span>5667</span>

                    </div>
                    <div className='col-md-3'>
                    <p>Total Supply</p>
                        <span>100,000,000</span>

                    </div>

                </div>

            </div> */}
            {/* <div className='third-box'>
                <p>Reimagine finance to live a fully inspired live and impact people, families, Communities and local economies.</p>
            </div>
            <div className='text-center mt-35'>
            <a className='btn-btn-main' href='/'>BUY</a>
            </div> */}

            <ButtonSection/>
            
        </div>

    
    </section>
  )
}

export default HeroSection