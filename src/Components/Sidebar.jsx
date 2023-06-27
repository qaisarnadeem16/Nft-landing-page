import React, { useState } from 'react';
import HeroSection from './HeroSection';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#b5d1b] overflow-y-auto transition duration-300 ease-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:w-50 md:static md:block`}
            >
                {/* Sidebar content */}
                <nav className="flex flex-col items-center py-5 gap-2 font-bold">

                    <a className="px-6 py-2 text-gray-600 hover:bg-gray-200  rounded-md" href="/">
                        <h1 className="text-blue-500 text-xl font-bold">Logo</h1>
                    </a>
                    <a className="px-6 py-2 text-gray-600 hover:text-lg hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-300"
                        href="#marketplace">
                        NFT Marketplace
                    </a>

                    <a className="px-6 py-2 text-gray-600 hover:text-lg hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-300"
                        href="#game">
                        Game Events
                    </a>

                    <a className="px-6 py-2 text-gray-600 hover:text-lg hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-300"
                        href="#world">
                     Map
                    </a>


                    <a className="px-6 py-2 text-gray-600 hover:text-lg hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-300"
                        href="#dnn">
                       Real Estate
                    </a>


                    <a className="px-6 py-2 text-gray-600 hover:text-lg hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-300"
                        href="#dnn">
                       Game
                    </a>


                    <a className="px-6 py-2 text-gray-600 hover:text-lg hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-300"
                        href="#dnn">
                        Shopping
                    </a>

                    <a className="px-6 py-2 text-gray-600 hover:text-lg hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-300"
                        href="#dnn">
                       Partnership
                    </a>
                    <a className="px-6 py-2 text-gray-600 hover:text-lg hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-300"
                        href="#dnn">
                       Elite Club
                    </a>

                    <a className="px-6 py-2 text-gray-600 hover:text-lg hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-300"
                        href="#dnn">
                       About Us
                    </a>


                   
                </nav>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Top bar */}
                <header className="flex  items-center py-4 px-6 bg-white md:hidden  ">
                    {/* Toggle button */}
                    <button
                        className="mobile-menu-button md:hidden focus:outline-none focus:bg-gray-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen
                                    ? 'M6 18L18 6M6 6l12 12'
                                    : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </header>

                {/* Main content */}
                <main className="flex  items-center justify-center ">
                    {/* Add your page content here */}
                 <HeroSection/>
                </main>
            </div>
        </div>
    );
};

export default Sidebar;
