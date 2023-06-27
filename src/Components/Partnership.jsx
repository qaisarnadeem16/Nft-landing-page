import React from 'react'
import partner from '../assets/partner.jpeg'
import partner1 from '../assets/partner1.jpeg'
import partner2 from '../assets/partner2.jpeg'
import partner3 from '../assets/partner3.jpeg'

const Partnership = () => {
    return (
        <>
            <div className="py-10" id='realstate'>

                <div className="text-4xl  font-bold text-blue-500 text-center">Partnership
                </div>

                <div className="py-5 flex flex-wrap">
                    <div className="md:w-[50%] w-full py-5">
                        <div className="text-xl flex flex-col justify-center items-center md:px-20  px-5">
                            <p className="md:text-2xl text-lg font-bold py-3 text-center">NFTs, or Non-Fungible Tokens, are unique digital assets that represent ownership or authenticity for specific content. </p>
                            <p className="md:text-xl tracking-wide leading-5 text-lg py-3">  Unlike cryptocurrencies, NFTs are indivisible and carry distinct information, making them easily distinguishable. They use blockchain technology to establish transparent ownership and compensate creators in art, music, gaming, and more. NFTs have revolutionized the art industry, enabling artists to sell digital artwork while retaining control and provenance. They also allow musicians to release limited edition albums and offer fans exclusive support.   </p>

                            <p className="md:text-xl relative md:top-10 text-lg py-3"> In gaming, NFTs give players true ownership of in-game items. NFTs create scarcity and value in the digital world, leveraging blockchain for transparency and security in establishing ownership and authenticity.</p>


                        </div>
                    </div>
                    <div className="md:w-[50%] w-full py-5 flex flex-wrap justify-center gap-3 md:px-10 px-5 relative top-14">
                        <div className="md:w-[280px] relative md:right-4 "><img src={partner} alt="" className='md:h-[30vh] h-[17.5vh] rounded-md w-[300px]' /></div>
                        <div className="md:w-[280px] relative "><img src={partner3} alt="" className='rounded-md md:h-[30vh] h-[18vh] w-[300px]' /></div>
                        <div className="w-[300px] relative md:right-4"><img src={partner2} alt="" className='md:h-[30vh] rounded-md' /></div>
                        <div className="md:w-[250px] relative "><img src={partner1} alt="" className='rounded-md md:h-[30vh]' /></div>
                        {/* <div className="md:w-[270px] relative "><img src={real} alt="" className='md:h-[28vh] rounded-md' /></div> */}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Partnership
