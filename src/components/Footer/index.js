import React from 'react'
import './Footer.css'
import FooterLogo from '../../images/logo.png'
function Footer() {
  return (
    <>
    <footer>
      <div className='container'>
        
          <div className='footer-box'>
            <div className='footer-sub '>
            <div className='row'>
              <div className='col-md-3'>
               <img src={FooterLogo} alt="FooterLogo" />
               <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
              </div>

              <div className='col-md-3 text-center justify-content-center'>
               <div>
               <a href='/' className='foot-btn'>Buy</a>
               </div>
             
              </div>


              <div className='col-md-3'>
                <div>
                  <a href='/'><p>About</p></a>
                  {/* <a href='/'><p>tokenomics</p></a> */}
                  <a href='/'><p>roadmap</p></a>
                  <a href='/'><p>contract</p></a>


                </div>
             
              </div>


              <div className='col-md-3'>
              <div>
                  <a href='/'><p>About</p></a>
                  {/* <a href='/'><p>tokenomics</p></a> */}
                  <a href='/'><p>roadmap</p></a>
                  <a href='/'><p>contract</p></a>


                </div>
              </div>

            </div>

          </div>

        </div>
        <div className='text-center'>
          <p>Copyright © Inspire360   2022</p>

        </div>

      </div>
      
    </footer>
    </>
  )
}

export default Footer