import React from 'react'
import Icon1 from '../../images/eco/icon1.png'
import Icon2 from '../../images/eco/icon2.png'
import Icon3 from '../../images/eco/icon3.png'

function Ecosystem() {
  return (
    <section>
    <div className='container'>
    <div className='header-tag'>
          <span className='red'>Overview Of the projects</span>
            <h1 className='fs-40'>inspire360 blockchain ecosystem  🌐</h1>

        </div>
        </div>

  <div className='container'>
    <div className='col-md-12 d-flex d-flex-2 justify-content-center'>
        <div className='eco-box'>
        <div className='eco-sub'>
            <h2>DeFi</h2>
            <p>Enabling Financial Access with DeFi for people  </p>
            <img src={Icon1} alt=""/>
            </div>

        </div>

        <div className='eco-box'>
            <div className='eco-sub'>
            <h2>PLAY</h2>
            <p>play-to-earn blockchain gaming platform  </p>
            <img src={Icon3} alt=""/>
            </div>
          

        </div>



        <div className='eco-box'>
        <div className='eco-sub'>
            <h2>DEX</h2>
            <p>Multi-network decentralized exchange  </p>
            <img src={Icon2} alt=""/>
            </div>

        </div>

    </div>




    </div>
   
    </section>
  )
}

export default Ecosystem