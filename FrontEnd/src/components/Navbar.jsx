import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='fixed w-full px-4 top-0 flex justify-between items-center z-50
     py-6 bg-pink-200'>
            <div>
                <Link to={'/'}>
                    <h1>Exclusive</h1>
                </Link>
            </div>
            <div>
                <ul>
                    <Link to={"/"} className="text-lg font-normat text-gra-700">Home</Link>
                </ul>
                <ul>
                    <Link to={"/about"} className="text-lg font-normat text-gra-700">About</Link>
                </ul>
                <ul>
                    <Link to={"/contact"} className="text-lg font-normat text-gra-700">Contact</Link>
                </ul>
                <ul>
                    <Link to={"/signup"} className="text-lg font-normat text-gra-700">Signup</Link>
                </ul>

            </div>
            <div>
                <div>
                    <input type="text" placeholder='Haa bee kya chahiyee' />
                    <img  alt="" />
                </div>
            </div>

        </nav>
    )
}

export default Navbar