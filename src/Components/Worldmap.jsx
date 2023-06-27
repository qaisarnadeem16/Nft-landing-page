import React, { useState } from 'react'
import Slider from "react-slick";
import img1 from '../assets/worldmap (1).jpeg'
import img2 from '../assets/worldmap (7).jpeg'
import img3 from '../assets/worldmap (3).jpeg'
import img4 from '../assets/worldmap (6).jpeg'
import img5 from '../assets/worldmap (5).jpeg'
import img6 from '../assets/worldmap (6).jpeg'
import img7 from '../assets/worldmap (7).jpeg'
import img8 from '../assets/worldmap (8).jpeg'
import img9 from '../assets/worldmap (9).jpeg'

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick} className='block  absolute md:text-[2.5rem] text-[1.3rem] text-[#b5d1b3]  md:top-28 bottom-10 right-5 md:right-[-4rem] z-10 hover:text-[#004a8b]'>  <SlArrowRight />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick} className='block  absolute md:text-[2.5rem] text-[1.3rem] text-[#b5d1b3]  md:top-28 bottom-10 left-5 md:left-[-4rem] z-10 hover:text-[#004a8b]'>  <SlArrowLeft />
        </div>
    );
}

const Worldmap = () => {
    const [showImage, setShowImage] = useState(img2)

    const handleClick = (event, imageSrc) => {
        setShowImage(imageSrc);
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
           
           
            <div className="main relative w-100 " id='world'>
            <div className="text-4xl py-10  font-bold text-blue-500 text-center">World map
         </div>
                <div className="arrow text-white text-[2rem] top-5 md:left-16 left-4 absolute z-10">
                    {/* <Link to='/SearchPage'>  <BsArrowLeft /></Link> */}
                </div>
                <div className="flex md:flex-col flex-col-reverse ">
                    <div className="container flex flex-col md:flex-row  ">
                    <div className="carousel w-[50%] md:block hidden   ">
                            <img src={showImage} alt="" className="w-full h-[500px]" />

                        </div>

                        <div className="md:w-[50%]  bg-[#004a8b] relative" >

                            <div className="flex justify-center ">
                                <div className="w-[200px] bg-[#b5d1b3] absolute top-0  p-5">
                                    <div className=" text-2xl font-bold  text-white  text-center ">
                                        <span className=""> World map</span>
                                    </div>
                                </div>


                                <div className=" text-white relative md:top-36 top-10 pb-10 ">

                                    <div className="label text-white pt-6 md:px-10 px-5 text-lg ">
                                      

                                        <div className="py-4 text-xl font-bold text-center">
                                        Your Personal Space in the Metaverse
                                        </div>

                                        <div className="py-2 text-center">
                                        With just a 2ndworld NAME you can claim your own corner of the metaverse, separate from the open world of 2ndworld, where you can build, experiment, host events—whatever you want, it’s your World
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                       

                    </div>

                    <div className=" md:pt-10 md:px-40 w-full">
                        <Slider {...settings} >
                            <div className="w-[19%]  overflow-hidden lg:pl-5 focus:outline-none">
                                <img src={img1} alt="" width='100%' onClick={(event) => handleClick(event, img1)} />
                            </div>

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img2)}>
                                <img src={img2} alt="" width='100%' />
                            </div>

                            <div className="w-[150px] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img3)}>
                                <img src={img3} alt="" width='100%' />
                            </div>

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img4)}>
                                <img src={img4} alt="" width='100%' />
                            </div>
                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img5)}>
                                <img src={img5} alt="" width='100%' />
                            </div>


                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img6)}>
                                <img src={img6} alt="" width='100%' />
                            </div>

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img7)}>
                                <img src={img7} alt="" width='100%' />
                            </div>

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img8)}>
                                <img src={img8} alt="" width='100%' />
                            </div>

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img9)}>
                                <img src={img9} alt="" width='100%' />
                            </div>


                        </Slider>
                    </div>

                </div>


             




            </div>

        </>
    )
}

export default Worldmap
