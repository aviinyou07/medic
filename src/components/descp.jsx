import React from 'react';
import { GiKneeCap } from "react-icons/gi";
import body from '../assets/vdeo3.gif';

const Card = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg p-8 hover:bg-gray-100 transition-all">
      <div className="text-3xl text-[#ab5042]">{icon}</div>
      <h3 className="mt-4 text-indigo-900 font-semibold">{name}</h3>
    </div>
  );
};

const Descp = () => {
  return (
    <section className="relative bg-[#048572] h-[50vh] z-10">
      <div className="absolute top-[-2rem] left-0 w-[600px] h-[400px] bg-[#021076] rounded-full opacity-70 shadow-2xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ffffff] rounded-full opacity-60"></div>

      <div className="max-w-screen h-full p-3 flex items-center justify-center absolute top-[10rem] left-0 right-0 bg-slate-50 gap-10 mx-12 shadow-indigo-950">
        <div className="w-full md:w-[70%] h-full">
          <img 
            src={body}
            alt="Example GIF" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" w-[30%] mt-5">
        <div className="w-full text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#048572] text-center">Your Knee Health Matters</h2>
          <p className="mt-4 text-sm text-center font-medium uppercase">Take care of your knee with the best care and support. Explore our services and solutions below.</p>
        </div>
        <div className="grid grid-cols-2  gap-5 m-8">
          <Card icon={<GiKneeCap />} name="Knee Support" />
          <Card icon={<GiKneeCap />} name="Knee Rehab" />
          <Card icon={<GiKneeCap />} name="Knee Strength" />
          <Card icon={<GiKneeCap />} name="Knee Surgery" />
        </div>
      </div>
        </div>
    </section>
  );
};

export default Descp;
