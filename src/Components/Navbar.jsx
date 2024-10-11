import React, { useState } from 'react';
import navIcon from './../assets/image (1).png';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickedMenu= ()=>{
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="bg-[rgba(0,0,0,0.8)]  dark:bg-gray-900 font-sans  shadow-sm shadow-cyan-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3  md:w-full ">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse md:ms-20">
            <img src={navIcon} className="h-12 w-12 bg-black rounded-full hover:rounded-none transition-all duration-300 shadow-md shadow-cyan-500" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white ">Badr Daghash</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between  md:ms-[35%] ${isMenuOpen ? 'block' : 'hidden'}  w-full  md:flex md:w-auto md:order-1`} id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
             dark:bg-gray-800  ">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 md:px-3 md:py-1.5 rounded-lg md:hover:bg-transparent md:hover:text-cyan-600
                   md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent  transition-colors duration-300 ${isActive ?
                      'bg-cyan-600 bg-opacity-50 text-white' : 'text-cyan-400 hover:text-cyan-600'
                    }`
                  }
                  onClick={handleClickedMenu}

                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 px-3 md:px-3 md:py-1.5 rounded-lg md:hover:bg-transparent md:hover:text-cyan-600
                   md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent  transition-colors duration-300 ${isActive ?
                      'bg-cyan-600 bg-opacity-50 text-white' : 'text-cyan-400 hover:text-cyan-600'
                    }`
                  }
                  onClick={handleClickedMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `block py-2 px-3 md:px-3 md:py-1.5 rounded-lg md:hover:bg-transparent md:hover:text-cyan-600
                   md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent  transition-colors duration-300 ${isActive ?
                      'bg-cyan-600 bg-opacity-50 text-white' : 'text-cyan-400 hover:text-cyan-600 '
                    }`
                  }
                  onClick={handleClickedMenu}

                >
                  Contact
                </NavLink>
              </li>
            

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
