import React from 'react'
import Icon4 from '../../images/eco/icon4.png'
import Icon5 from '../../images/eco/icon5.png'
import Icon6 from '../../images/eco/icon6.png'
import Icon7 from '../../images/eco/icon7.png'
import Icon8 from '../../images/eco/icon8.png'
function Eco() {
  return (
    <>
    
    <div className='container'>
        
        <div className='col-md-12 d-flex d-flex-2 justify-content-center'>
            <div className='eco-box'>
            <div className='eco-sub'>
                <h2>NFT</h2>
                <p>non-fungible token inspire360NFT  </p>
                <img src={Icon4} alt=""/>
                </div>
    
            </div>
    
            <div className='eco-box'>
                <div className='eco-sub'>
                <h2>DAO</h2>
                <p>decentralized autonomous organisation inpire360DAO </p>
                <img src={Icon5} alt=""/>
                </div>
              
    
            </div>
    
    
    
            <div className='eco-box'>
            <div className='eco-sub'>
                <h2>TOOLS</h2>
                <p>ecosystem tools inspire360 bug check, inpire360 portfolio  </p>
                <img src={Icon6} alt=""/>
                </div>
    
            </div>
    
        </div>


        <div className='col-md-8 justify=content-center margin-auto text-center d-flex d-flex-2'>
        <div className='eco-box'>
            <div className='eco-sub'>
                <h2>BLOCKCHAIN</h2>
                <p>inspire360 blockchain  </p>
                <img src={Icon7} alt=""/>
                </div>
    
            </div>
            <div className='eco-box'>
            <div className='eco-sub'>
                <h2>WALLET</h2>
                <p>inspire360 wallet  </p>
                <img src={Icon8} alt=""/>
                </div>
    
            </div>

        </div>
    
        </div>
    
    </>
  )
}

export default Eco