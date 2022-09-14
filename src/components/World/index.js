import React from 'react'
import Map from '../../images/map.png'
import Edu from '../../images/icons/icon7.png'
import Icon1 from '../../images/icons/icon1.png'
import Icon2 from '../../images/icons/icon2.png'
import Icon3 from '../../images/icons/icon3.png'
import Icon4 from '../../images/icons/icon4.png'
import Icon5 from '../../images/icons/icon5.png'
import Icon6 from '../../images/icons/icon6.png'
function index() {
  return (
    <section className='Icon-sec'>
    <div className='container'>
    <div className='header-tag'>
          <span className='red'>How We Impact The World</span>
            <h1 className='fs-40'>Physical World Projects  🌎</h1>

        </div>
        </div>

  <div className='container'>
    
  <div className='row' >
      <div className='col-md-6'>
        <div className='world-p'>
        <p>Several initiatives to empower people and communities are planned as physical
          worlds project. The project will be governed by the Inspire360 DAO governance token who will decide
           the timing, location and conditions of these projects. </p>

        </div>
    

      </div>

      <div className='col-md-6'>
    <div className='world-i'>
    <img src={Map} alt="map" className='world-img'/>
    </div>
 



          </div>

  </div>

<h3 className='world-h'>These include following sectors:-</h3>
  <div className='row'>

    <div className='col-md-12 d-flex  d-flex-2 justify-content-center'>
     <div className='world-box'>
      <div className='cold'>
      <div className='world-sub-box'>
        <img src={Edu} alt="edu"/>

      </div>
      <h2>InspireEducation
</h2>
<p>Schools, Universities, Institutes for Entreprenuers</p>
      </div>
      </div>


      
      <div className='world-box'>
        <div className='cold'>
        <div className='world-sub-box'>
        <img src={Icon1} alt="edu"/>

      </div>
      <h2>InspireHealth
</h2>
<p>Cantres & Hospitals</p>
</div>
      </div> 
      <div className='world-box'>
        <div className='cold'>
        <div className='world-sub-box'>
        <img src={Icon2} alt="edu"/>

      </div>
      <h2>Inspire
Agro Business
</h2>
<p>Integrated Projects, Farming, Poultry.</p>
      </div>  </div>

    </div>

  </div>
  <div className='row' style={{marginTop:'10%'}}>

<div className='col-md-12 d-flex d-flex-2 justify-content-center'>
 <div className='world-box'>
  <div className='cold'>
  <div className='world-sub-box'>
    <img src={Icon3} alt="edu"/>

  </div>
  <h2>InspireEducation
</h2>
<p>Schools, Universities, Institutes for Entreprenuers</p>
  </div>
  </div>


  
  <div className='world-box'>
    <div className='cold'>
    <div className='world-sub-box'>
    <img src={Icon4} alt="edu"/>

  </div>
  <h2>InspireHealth
</h2>
<p>Cantres & Hospitals</p>
</div>
  </div> 
  <div className='world-box'>
    <div className='cold'>
    <div className='world-sub-box'>
    <img src={Icon5} alt="edu"/>

  </div>
  <h2>Inspire
Agro Business
</h2>
<p>Integrated Projects, Farming, Poultry.</p>
  </div>  </div>

</div>
</div>
<div className='col-md-12 d-flex  d-flex-2 justify-content-center' style={{marginTop:'10%'}}>
 <div className='world-box'>
  <div className='cold'>
  <div className='world-sub-box'>
    <img src={Icon6} alt="edu"/>

  </div>
  <h2>InspireEducation
</h2>
<p>Schools, Universities, Institutes for Entreprenuers</p>
  </div>
  </div>
  </div></div>

 
 

</section>
  )
}

export default index