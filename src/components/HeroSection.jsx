import React from 'react';
import dr from '../assets/drhro.png';
import hvideo from '../assets/vdeo.gif';

const HeroSection = () => {
  return (
    <section className="relative bg-[#002283] text-white h-[50vh] opacity-90">
      <div className="container ml-12 flex flex-col md:flex-row gap-12 items-center h-full w-[90vw] md:w-[70vw] lg:w-[45vw]">
        <img
          src={dr}
          alt="Dr. Jayini P Rammohen"
          className="h-full w-auto rounded-lg shadow-lg flex-shrink-0"
          loading="lazy"
        />

        <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left flex-grow z-10">
          <h1 className="text-3xl md:text-4xl font-bold">DR. Jayini P Rammohen</h1>
          <p className="text-2xl md:text-3xl font-light">
            Over 23+ Years Of Excellence <br /> In Orthopedic & <br /> Joint Replacement Surgery
          </p>
          <button
            className="bg-[#009746] hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium"
            aria-label="Book an appointment with Dr. Jayini P Rammohen"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-[55%] md:w-[45%] lg:w-[55%]">
        <img
          className="h-full w-full rounded-r-full shadow-lg object-cover transform -scale-x-100"
          src={hvideo}
          alt="Video Representation"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
