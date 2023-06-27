import React, { useState } from 'react'
import Slider from "react-slick";
import img1 from '../assets/marketplace (1).jpeg'
import img2 from '../assets/marketplace (2).jpeg'
import img3 from '../assets/marketplace (3).jpeg'
import img4 from '../assets/marketplace (4).jpeg'
import img5 from '../assets/marketplace (5).jpeg'
import img6 from '../assets/marketplace (6).jpeg'
import img7 from '../assets/marketplace (7).jpeg'
import img8 from '../assets/marketplace (8).jpeg'
import img9 from '../assets/marketplace (9).jpeg'
import img10 from '../assets/marketplace (10).jpeg'
import img11 from '../assets/marketplace (11).jpeg'
import img12 from '../assets/marketplace (12).jpeg'
import img13 from '../assets/marketplace (13).jpeg'
import img14 from '../assets/marketplace (14).jpeg'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick} className='block  absolute md:text-[2.5rem] text-[1.3rem] md:text-[#b5d1b3] text-white md:top-28 bottom-10 right-5 md:right-[-4rem] z-10 hover:text-[#004a8b]'>  <SlArrowRight />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick} className='block  absolute md:text-[2.5rem] text-[1.3rem] md:text-[#b5d1b3] text-white  md:top-28 bottom-10 left-5 md:left-[-4rem] z-10 hover:text-[#004a8b]'>  <SlArrowLeft />
        </div>
    );
}

const Marketplace = () => {
    const [showImage, setShowImage] = useState(img1)

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
           
           
            <div className="main relative w-100 " id='marketplace'>
            <div className="text-4xl py-10  font-bold text-blue-500 text-center">NFT Marketplace
         </div>
                <div className="arrow text-white text-[2rem] top-5 md:left-16 left-4 absolute z-10">
                    {/* <Link to='/SearchPage'>  <BsArrowLeft /></Link> */}
                </div>
                <div className="flex md:flex-col flex-col-reverse ">
                    <div className="container flex flex-col md:flex-row  ">


                        <div className="md:w-[40%] h-[500px] bg-[#004a8b] relative " >

                            <div className="flex justify-center">
                                <div className="w-[200px] bg-[#b5d1b3] absolute top-0  p-5">
                                    <div className="text-[12px] text-xl text-bold  text-white  text-center ">
                                        <span className=""> NFT Marketplace</span>
                                    </div>
                                </div>

                                <div className=" text-white relative md:top-32 top-24">

                                    <div className="label text-white pt-6 px-10 text-xl">
                                        <div className="">
                                        With over a billion-dollar market volume, NFT’s are a whole new
world of possibilities for your art, games, music and IP. Turn your works into one-of-a-kind digital products where you (the creator) control the licensing access securely and transparently across all platforms. Finally an all new realm of opportunities made possible by the most flexible and intuitive free market NFT marketplace solution. 2nd World.
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="carousel w-[60%] md:block hidden   ">
                            <img src={showImage} alt="" className="w-full h-[500px]" />

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

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img10)}>
                                <img src={img10} alt="" width='100%' />
                            </div>

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img11)}>
                                <img src={img11} alt="" width='100%' />
                            </div>


                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img12)}>
                                <img src={img12} alt="" width='100%' />
                            </div>


                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img13)}>
                                <img src={img13} alt="" width='100%' />
                            </div>

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, img14)}>
                                <img src={img14} alt="" width='100%' />
                            </div>


                        </Slider>
                    </div>

                </div>


             




            </div>

        </>
    )
}

export default Marketplace
