import React from 'react'
import game from '../assets/game.jpeg'
import game1 from '../assets/game1.jpeg'
import game2 from '../assets/game2.jpeg'
import game3 from '../assets/game3.jpeg'

const Game = () => {
    return (
        <>
            <div className="py-10" id='game'>


                <div className="text-4xl  font-bold text-blue-500 text-center">Games
                </div>

                <div className="py-5 flex flex-wrap md:flex-row flex-col-reverse">
                    <div className="md:w-[50%] w-full py-5 flex flex-wrap justify-center gap-3 md:px-10 px-5 relative md:top-14">
                        <div className="w-[300px] "><img src={game1} alt="" className='rounded-md' /></div>
                        <div className="md:w-[280px]   "><img src={game3} alt="" className='rounded-md h-40' /></div>

                        <div className="md:w-[280px] w-[300px] "><img src={game2} alt="" className='rounded-md h-44' /></div>


                        <div className="w-[300px]  "><img src={game} alt="" className=' rounded-md h-40' /></div>

                    </div>

                    <div className="md:w-[50%] w-full py-5">
                        <div className="text-xl flex flex-col justify-center items-center md:px-20 relative md:top-auto   px-5">
                            <p className="md:text-2xl text-lg font-bold py-3 text-center">NFTs, or Non-Fungible Tokens, have brought a whole new dimension to the world of gaming </p>
                            <p className="md:text-xl tracking-wide leading-5 text-lg py-3">  These special digital assets represent one-of-a-kind in-game items, characters, or virtual possessions. What makes NFTs different is that they're stored using blockchain technology, ensuring secure ownership and limited availability. This means players can truly own and trade their NFT items outside of the game. NFTs have sparked incredible creativity, allowing game developers and artists to create and sell unique limited edition items, artwork, and collectibles  </p>

                            <p className="md:text-xl relative md:top-5  text-lg py-3">Players now have access to an exciting marketplace where they can buy, sell, and even earn real income through NFT-based gaming. NFTs have transformed gaming, connecting virtual and real-world economies, and offering players a whole new level of enjoyment and opportunity.</p>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game
