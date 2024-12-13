import React from "react";
import bgdr from '../assets/about.png';
import drimg from '../assets/thegooddoctor.jpg';

const DoctorSection = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 p-6 rounded-lg shadow-lg max-w-full mx-auto"
            style={{ backgroundImage: `url(${bgdr})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col md:flex-row items-center rounded-lg shadow-lg max-w-5xl w-full gap-12 bg-slate-50">
                <div className="relative flex-shrink-0 mb-4 md:mb-0">
                    <img
                        src={drimg}
                        alt="Doctor"
                        className="w-52  md:w-96 md:h-96 object-cover shadow-md rounded-r-3xl"
                    />
                    <div className="absolute top-0 right-0 bg-[#08749b] text-white font-bold text-lg py-2 px-4 transform translate-x-1/4 -translate-y-1/4 rounded-bl-lg shadow-lg">
                        <span className="text-2xl font-extrabold">23+ <span className="text-xs font-light"> years</span></span>
                        <div className="text-xs"> of Excellence</div>
                    </div>
                </div>

                <div className="flex-grow md:ml-6 text-center md:text-left">
                    <p className="text-sm font-bold text-green-500 mb-5">About</p>
                    <h2 className="text-2xl font-bold text-[#08749b] mb-3">
                        Best Orthopedic Doctor in Hyderabad
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-3 text-xs font-medium">
                        Dr. Jayini Ram Mohan is one of the best orthopedic doctors in Hyderabad. He has over 23+ years of expertise in orthopedic surgery & Joint Replacement Surgery.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-xs font-medium">
                        Dr. Jayini Ram Mohan is highly trained and has worked in many premier medical institutions across the globe. His skills in performing complex orthopedic surgeries are unparalleled. His major areas of interest include joint replacement surgeries like knee replacement & hip replacement, arthroscopic surgery, trauma, etc.
                    </p>
                    <hr className="font-bold text-[#08749b] mt-5 mb-5" />
                    <div className="flex justify-center md:justify-start space-x-4 mt-4 "> <a href="/appointment" className="flex items-center px-4 py-2 text-green-500 rounded-lg hover:text-green-700 shadow-xl" > <span className="material-icons mr-2">calendar_today</span> Online Appointment </a> <a href="/locations" className="flex items-center px-4 py-2 text-green-500 rounded-lg hover:text-green-700 shadow-xl" > <span className="material-icons mr-2">location_on</span> Our Locations </a> </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorSection;
