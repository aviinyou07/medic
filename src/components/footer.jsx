import React from "react";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="w-full lg:w-1/3 flex justify-center items-center  mb-6 lg:mb-0">
            <img src={logo} alt="Logo" className="w-24 h-24" />
          </div>
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-left">
            <p className="text-gray-700 text-sm font-medium leading-6 mb-4">
              Dr. Jayini Ram Mohan is one of the most renowned orthopedic doctors in Hyderabad.
              He is one of the leading knee replacement surgeons in Hyderabad with over 23+ years
              of expertise in orthopedics & knee replacement surgery.
            </p>
            <div className="mb-4">
              <h4 className="text-gray-800 font-bold">Address</h4>
              <div className="w-16 h-[2px] bg-black mb-2"></div>
              <p className="text-sm text-gray-700 mb-2 font-medium">
                5th Floor, Above Sachdev Sports, Sri Tirumala's Subash Arcade,<br />
                H1-62/1 Kondapur, X Roads, Kothaguda, Hyderabad, Telangana 500084
              </p>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Plot 10/D, RISE Commercial Complex, 3rd Floor,<br />
                Over Van Lavino Cafe, Opp. to APARNA SAROVAR GRANDE, Nallagandla, Telangana 500019
              </p>
            </div>
            <div className="text-sm text-gray-700">
              <p className="flex items-center justify-center lg:justify-start font-medium mb-2">
                <span className="material-icons text-black mr-2">phone</span> +91 - 9137464646
              </p>
              <p className="flex items-center justify-center lg:justify-start font-medium">
                <span className="material-icons text-black mr-2">email</span> abc@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
            <h3 className="text-gray-800 font-bold text-xl mb-4">Our Services</h3>
            <ul className="text-sm text-gray-700 font-medium">
              <li className="mb-2">TKR Surgery</li>
              <li className="mb-2">THR Surgery</li>
              <li className="mb-2">Arthroscopy</li>
              <li className="mb-2">Sports Medicine</li>
              <li className="mb-2">General Ortho</li>
              <li className="mb-2">Shoulder Arthroscopy</li>
              <li className="mb-2">Robotic Knee Replacement</li>
              <li>Trauma</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-600 text-sm">
          &copy; 2024 Avin. All Rights Reserved.
        </div>
    </div>

  );
};

export default Footer;
