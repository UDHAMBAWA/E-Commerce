import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [activeMenu, setActiveMenu]=useState("Home");
    return (
        <nav className='fixed w-full px-4 top-0 flex justify-between items-center z-50
     py-6 bg-purple-300'>
            <div>
                <Link to={'/'}>
                <h1 className='text-xl font-bold md:text-4xl text-black'>Exclusive</h1>

                </Link>
            </div>
            <div>
  <ul className='hidden md:flex items-center gap-6'>
    <li>
      <Link 
        to="/"
        onClick={() => setActiveMenu("Home")}
        className={`text-lg font-normal text-gray-700 ${
          activeMenu === "Home" ? "border-b-2 border-black" : ""
        }`}
      >
        Home
      </Link>
    </li>
    <li>
      <Link 
        to="/about"
        onClick={() => setActiveMenu("About")}
        className={`text-lg font-normal text-gray-700 ${
          activeMenu === "About" ? "border-b-2 border-black" : ""
        }`}
      >
        About
      </Link>
    </li>
    <li>
      <Link 
        to="/contact"
        onClick={() => setActiveMenu("Contact")}
        className={`text-lg font-normal text-gray-700 ${
          activeMenu === "Contact" ? "border-b-2 border-black" : ""
        }`}
      >
        Contact
      </Link>
    </li>
    <li>
      <Link 
        to="/signup"
        onClick={() => setActiveMenu("Signup")}
        className={`text-lg font-normal text-gray-700 ${
          activeMenu === "Signup" ? "border-b-2 border-black" : ""
        }`}
      >
        Signup
      </Link>
    </li>
  </ul>
</div>

            <div className='flex items-center gap-4'>
                <div className='relative flex items-center' >
                    <input type="text"
                        placeholder='Haa bee kya chahiyee'
                        className='outline-none pl-10 py-2 bg-gray-50 rounded-sm w-full'
                    />
                    <img src={assets.search}
                        className='absolute left-3 top-1/2 transform 
                    -translate-y-1/2 cursor-pointer w-5 h-5' alt="" />
                </div>
                <Link to={"/wish"}>
                    <img src={assets.wish}
                        className='cursor-pointer w-6 h-6 p-1 rounded'
                        alt="" />
                </Link>
                <Link to={'/Cart'}>
                    <div className='relative'>
                        <img src={assets.cart}
                            className='w-6 h-6 cursor-pointer' alt="" />
                        <div className='absolute -top-1 -right-1
                         bg-red-500 text-white text-sm rounded-full w-4 h-4 text-center flex 
                         items-center justify-center curson-pointer'>0</div>
                    </div>
                </Link>
                <Link to={'/login'}>
                    <img src={assets.user} alt="" />
                </Link>
            </div>

        </nav>
    )
}

export default Navbar