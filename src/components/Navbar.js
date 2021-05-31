import React, { useState } from 'react'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header id="home">
          <nav className="mx-0 my-2 py-2.5 px-4 flex flex-col justify-between items-center lg:flex-row lg:mx-60 lg:border-b border-pink-300">
              <div className="w-full flex items-center justify-between border-b border-pink-300 lg:border-b-0">
                  <div className="text-2xl font-medium"> 
                      <a href="#a" className="text-pink-400 hover:text-pink-600">Portfolio</a>
                  </div>
                  <div>
                      <button onClick={() => setIsOpen(!isOpen)} className="text-pink-400 focus:outline-none block lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />    
                        </svg>
                      </button>
                  </div>
              </div>
              <div>
                  <div className={`${!isOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row py-4 lg:py-0`}>
                      <a href="#home" className="block px-2 py-4 lg:py-0 text-pink-400 hover:text-pink-600 font-medium">Home</a>
                      <a href="#about" className="block px-2 py-4 lg:py-0 text-pink-400 hover:text-pink-600 font-medium">About</a>
                      <a href="#port" className="block px-2 py-4 lg:py-0 text-pink-400 hover:text-pink-600 font-medium">Portfolio</a>
                      <a href="#contact" className="block px-2 py-4 lg:py-0 text-pink-400 hover:text-pink-600 font-medium">Contact</a>
                  </div>
              </div>
          </nav>
        </header>
    )
}

export default Navbar
