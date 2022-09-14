import React from 'react'
import ICO from '../../images/ico.png'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'

function Roadmap() {
  return (
    <section>
    <div className='container '>
      <div className='road-box'>
      <div className='header-tag'>
          <span className='red'>Where We Are Going</span>
            <h1 className='red-line3'>RoadMap</h1>

        </div>
  <div className='container mb-10'>
    <div className='d-flex justify-content-space-between text-center ' >
      <h2>STEP 1 | Q1</h2>
      <div className='bottom-b'>&nbsp;</div>
    </div>
  <div className='row' style={{marginTop:"3.5%" , marginBottom:"2.5%"}}>
      <div className='col-md-6'>
      
          <div className='img-road'>
  <img src={ICO} alt="ico"/>
</div>


      </div>

      <div className='col-md-6 road-h'>
      
    
        
          <h4>ICO pre launch</h4>
         
        
           <h4>ICO fair launch</h4>
        
      
          <h4>White paper release</h4>
       
         <h4>Hard Cap 2,000 BNB</h4>
   
  <h4>Listing on CMC, CG and others </h4>
         
      
           <h4>5,000 TG members & 3,000 Twitter followers</h4>
 
          <h4>Initial paid marketing start </h4>
         
         
          <h4>Establisation of International Community Organisations </h4>
         


          </div>

  </div>
  </div>

  <Step2/>
  <Step3/>
  <Step4/>
  <Step5/>
  <Step6/>
  </div>
</div>
</section>
  )
}

export default Roadmap