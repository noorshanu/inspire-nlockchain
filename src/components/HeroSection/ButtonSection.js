import React from 'react'
import Circle2 from '../../images/circle-2.png'

function ButtonSection() {
  return (
    <section className='hero-btn mt-35'>
        <img src={Circle2} alt='' className='crl-2'/>
    <div className='container btn-box'>
            <div className='row'>
                <div className='col-md-2'>
                   

                </div>
                <div className='col-md-2'>
                    <div className='btn-wrap'>
                        <a className='btn-hero' href='/'>AUDIT</a>
                    </div>

                </div>

                <div className='col-md-2'>
                    <div className='btn-wrap'>
                        <a className='btn-hero' href='/'>WHITEPAPER</a>
                    </div>

                </div>
        
                <div className='col-md-2'>
                    <div className='btn-wrap'>
                        <a className='btn-hero' href='/'>CONTRACT</a>
                    </div>

                </div>
                <div className='col-md-2'>
                    <div className='btn-wrap'>
                        <a className='btn-hero' href='/'>LOCK</a>
                    </div>

                </div>
                <div className='col-md-2'>
                   

                </div>

            </div>

        </div>
        </section>
  )
}

export default ButtonSection