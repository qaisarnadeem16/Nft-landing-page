import React from 'react'
import img1 from '../assets/game (1).jpeg'
import img2 from '../assets/game (2).jpeg'
// import img3 from '../assets/game (3).jpeg'
import img4 from '../assets/game (4).jpeg'
import img5 from '../assets/game (5).jpeg'

const GameCenter = () => {
    return (
        <>
            <div className="py-10" id='game'>
                <div className="text-4xl  font-bold text-blue-500 text-center">Game Center
                </div>

                <div className="py-5 flex flex-wrap">
                    <div className="md:w-[50%] w-full py-5">
                        <div className="text-xl flex flex-col justify-center items-center md:px-20  px-5">
                            <p className="md:text-2xl text-lg font-bold py-3 text-center">Welcome to the exciting world of Metaverse gaming with VR and AR technology! </p>
                            <p className="md:text-xl text-lg py-3">With the ever-evolving technology, gaming has gone beyond the traditional boundaries of screens. It has opened a whole new world of immersive gaming experiences where you can become a part of the game. The Metaverse is the perfect example of this, as it blends virtual reality, augmented reality, and real-life scenarios in a way that feels incredibly real. </p>

                            <p className="md:text-xl text-lg py-3">The possibilities are endless in the Metaverse. You can explore different universes, take part in live events, and collaborate with other players from all over the world. The VR and AR technologies give you the sensation that you are really inside the game, making it an exciting and fun experience. </p>


                        </div>
                    </div>
                    <div className="md:w-[50%] w-full py-5 flex flex-wrap justify-center gap-3 md:px-10 px-5 relative">
                        <div className="w-[300px] relative md:top-36"><img src={img1} alt="" className='rounded-xl' /></div>
                        <div className="w-[300px]"><img src={img2} alt="" className='rounded-xl' /></div>


                    </div>
                </div>


                <div className="py-5 flex flex-wrap md:flex-row flex-col-reverse">
                    <div className="md:w-[50%] w-full py-5 flex flex-wrap justify-center gap-3 md:px-10 px-5 relative">
                        <div className="w-[300px]"><img src={img5} alt="" className='rounded-xl' /></div>
                        <div className="w-[300px] relative md:top-20"><img src={img4} alt="" className='rounded-xl' /></div>
                    </div>
                    <div className="md:w-[50%] w-full py-5  ">

                        <div className=" flex flex-col justify-center !items-center md:px-16  px-5 md:mt-10">

                            <p className="md:text-2xl text-lg py-3">Whatever your interests may be, there's sure to be something for you in the Metaverse. From action-packed adventure games to mystical worlds of fantasy, everything is available at your fingertips. </p>

                            <p className="text-lg md:text-2xl py-3">So, don't wait any longer and join the Metaverse gaming world today. Immerse yourself in a new reality and explore endless possibilities. Let's check it out! </p>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default GameCenter
