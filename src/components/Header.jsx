import React from "react";
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <header>
      <div className="bg-white py-3 border-b border-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-[1.25rem]">
          <div className="mb-3 md:mb-0">
            <img
              src={logo}
              alt="Logo"
              className="h-10 md:h-12"
            />
          </div>

          <div className="text-center md:text-right text-sm font-semibold text-[#444444]">
            <p>For Appointments</p>
            <p className="flex justify-center md:justify-end items-center space-x-2">
              <img
                src="https://img.icons8.com/color/48/000000/whatsapp.png" 
                alt="WhatsApp"
                className="h-6 w-6"
              />
              <span>+91 - 9137464646</span>
            </p>
          </div>
        </div>
      </div>

      <nav className="bg-[#08749b] text-white">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center py-3 px-4 md:px-6">
          <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 text-sm font-medium text-center md:text-left">
            <li className="hover:text-blue-300 cursor-pointer relative">
              <a href="/" className="active:underline">HOME</a>
            </li>
            <li className="hover:text-blue-300 cursor-pointer relative">
              <a href="#about" className="active:underline">ABOUT</a>
            </li>
            <li className="hover:text-blue-300 cursor-pointer relative">
              <a href="#services" className="active:underline">OUR SERVICES</a>
            </li>
            <li className="hover:text-blue-300 cursor-pointer relative">
              <a href="#education" className="active:underline">PATIENT EDUCATION</a>
            </li>
            <li className="hover:text-blue-300 cursor-pointer relative">
              <a href="#contact" className="active:underline">CONTACT</a>
            </li>
          </ul>

          <button
            className="bg-[#009746] hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium mt-3 md:mt-0"
          >
            SECOND OPINION
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
