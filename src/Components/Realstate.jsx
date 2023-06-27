import React from 'react'
import real from '../assets/real.jpeg'
import real1 from '../assets/real1.jpeg'
import real2 from '../assets/real2.jpeg'
import real3 from '../assets/real3.jpeg'
import real4 from '../assets/real4.jpeg'

const Realstate = () => {
    return (
        <>

            <div className="py-10" id='realstate'>

                <div className="text-4xl  font-bold text-blue-500 text-center">Real Estate
                </div>

                <div className="py-5 flex flex-wrap ">
                    <div className="md:w-[50%] w-full py-5 ">
                        <div className="text-xl flex flex-col justify-center items-center md:px-20  px-5">
                            <p className="md:text-2xl text-lg font-bold py-3 text-center">NFTs, or Non-Fungible Tokens, are changing how real estate works. </p>
                            <p className="md:text-xl tracking-wide leading-5 text-lg py-3"> They are unique digital assets that prove ownership or authenticity of a property. NFTs use blockchain technology for secure and transparent records. What's cool is that NFTs allow people to buy small parts of expensive properties, making real estate more accessible.   </p>
                             
                            <p className="md:text-xl relative md:top-10 text-lg py-3">They also make ownership transfers faster and simpler, without the need for middlemen or lots of paperwork.  NFTs have the potential to revolutionize real estate, offering exciting opportunities for buyers and sellers.</p>


                        </div>
                    </div>
                    <div className="md:w-[50%] w-full py-5 flex flex-wrap justify-center gap-3 md:px-10 px-5 relative">
                        <div className="md:w-[250px] "><img src={real3} alt="" className=' rounded-md h-36' /></div>
                        <div className="md:w-[250px] "><img src={real4} alt="" className='rounded-md' /></div>
                        <div className="md:w-[600px] flex justify-center "><img src={real1} alt="" className=' rounded-md' /></div>
                        <div className="md:w-[250px]"><img src={real2} alt="" className='rounded-md h-36' /></div>
                        <div className="md:w-[250px] relative "><img src={real} alt="" className='h-36 rounded-md' /></div>

                    </div>
                </div>


          

            </div>
        </>
    )
}

export default Realstate
