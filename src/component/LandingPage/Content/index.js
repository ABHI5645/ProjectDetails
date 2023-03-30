import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap';

function Content() {
  return (
    <div>
      <div className="main">
        <div className="title">
            <h1 className='text-color:white'>Welcome to WeTransfer</h1>
        </div>
       
        <div >Transfer ideas. <b>Transform the world.</b></div>
      
         <div ><div >
        </div>
        <div className="cookie">By accepting our cookies, you directly help us to expand our pledge to the planet. This year alone, WeTransfer has committed to planting over 175,000 trees, and we’re just getting started. You’ll have a positive impact by simply experiencing our award-winning ads. </div>
        <div className="cookie-notice">Our website uses cookies to improve performance, service, and to better understand your needs. By accepting our third-party cookies, we and our partners are able to offer you more relevant advertising on and outside of our website(s) and apps.</div>
        <Button style={{marginRight:'10px'}}>I accept</Button>
        <Button style={{marginRight:'10px'}} className='gg' variant="outline-secondary"  color='white'>Manage cookies</Button>
        <a>No thanks</a></div></div>
        </div>
   
  )
}

export default Content;
