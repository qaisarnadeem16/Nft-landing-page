import React from 'react'
import video from '../assets/Cyan Green Abstract NFT Marketplace Video.mp4'

const HeroSection = () => {
    return (
        <>
        <div className="w-full h-70 relative" style={{ paddingBottom: '56.25%' }}>
      <video
        className="absolute top-0 left-0 w-full h-full"
    // controls
        autoPlay
        loop
        
      >
        <source src={video} type="video/mp4" />
    {/* //    <source src={video} type="video/mp4" /> */}
      </video>
    </div>
        </>
    )
}

export default HeroSection
