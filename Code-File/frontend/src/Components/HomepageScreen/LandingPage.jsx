import React from 'react'
import blob from '../../assets/blobanimation.svg'
import AnimatedHeadline from './AnimatedHeadline'

function LandingPage() { 
  return ( 
    <div className="landingContainer container">
    <img src="./pp.webp" alt="" className='blob_a blob1 animated-bounce' />
    <img src="./pp2.webp" alt="" className='blob_a blob2 animated-bounce animated-spin' />
        <div className="landingInfo">
            {/* <h1>CoDeFuSiOn</h1> */}
            <AnimatedHeadline/>
           <p style={{ color: 'pink' }}>CodeFusion — Speak, Snap, Code. All in One.</p>

        </div>
    </div>
  )
}

export default LandingPage