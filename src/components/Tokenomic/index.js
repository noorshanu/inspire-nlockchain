import React from 'react'
import './Tokonomic.css'
import Side from '../../images/lowest.png'


import Token from './Token'


function Tokonomic() {
  return (
    <section>
      <img src={Side} alt=''  className='toko-side'/>
          <div className='container'>
          <div className='header-tag'>
          <span className='red'>How It Works</span>
            <h1 className='red-line2'>Tokenomics</h1>

        </div>
        </div>
        <div className='container'>
       
            <div className='col-md-12 d-flex justify-content-center flex-row-2' style={{gap:'4rem'}}>
      <div className='d-flex  '>
        <div className='side-line'>&nbsp;</div>
        <div>
        <span className='red'>Name</span>
          <h2> INSPIRE360</h2>
          </div>
        

      </div>
      <div className='d-flex  '>
      <div className='side-line'>&nbsp;</div>
        <div>
          
        <span className='red'>decimals</span>
          <h2> 18</h2>
          </div>
        

      </div>

      <div className='d-flex  '>
      <div className='side-line'>&nbsp;</div>
        <div>
        <span className='red'>Symbol</span>
          <h2> INSP</h2>
          </div>
        

      </div>

      <div className='d-flex  '>
      <div className='side-line'>&nbsp;</div>
        <div>
        <span className='red'>Total Supply</span>
          <h2>100,000,000</h2>
          </div>
        

      </div>
            </div>


            <div className='row justify-content-center gap-5' >
              <div className='m-box'>
                <div className='s-box'>    <h2>30 M</h2></div>
            
              </div>

              <div className='m-box'>
                <div className='s-box'>    <h2> M</h2></div>
            
              </div>

              <div className='m-box'>
                <div className='s-box'>    <h2> M</h2></div>
            
              </div>
              <div className='m-box'>
                <div className='s-box'>    <h2> M</h2></div>
            
              </div>

            </div>

      
  <Token/>
        </div>
      

       
   
    </section>
  )
}

export default Tokonomic