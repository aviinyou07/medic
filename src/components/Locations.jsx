import React from "react";
import bgdr from '../assets/vdeo2.gif';

const Locations = () => {
    return (
        <div className="relative bg-cover bg-center min-h-[70vh] z-40" style={{ backgroundImage: `url(${bgdr})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-65 flex flex-col items-center h-full">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mt-12">Our Locations</h1>
                    <p className="mt-6 text-sm font-light ">
                        We offer comprehensive medical & surgical treatments for a vast range of orthopaedic conditions under one roof. <br />
                        We are available round the clock to ensure timely treatment for all orthopaedic emergencies.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center mt-8 space-x-48 absolute bottom-[-5rem] z-10">
                    <div className="flex flex-col items-center  rounded-3xl shadow-xl mx-auto bg-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=KothagudaMapEmbedURL"
                            width="500"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Kothaguda Clinic Map"
                            className="rounded-t-lg"
                        ></iframe>
                        <div className="">
                            <h2 className="text-xl font-bold text-center text-[#08749b] mt-3">KOTHAGUDA CLINIC</h2>
                            <p className="mt-2 text-center text-gray-600">
                                5th Floor, Above Sachdev Sports, Tirumala’s Subash Arcade<br />
                                H.I-62/1 Kondapur, X Roads, Kothaguda, Hyderabad, <br /> Telangana 500084
                            </p>
                            <div className="mt-4 flex justify-center">
                                <button className="bg-green-500 text-white py-3 px-6 rounded-3xl flex items-center mb-5">
                                    <span className="material-icons mr-2">location_on</span> Get Direction
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center rounded-lg shadow-xl max-w-lg mx-auto bg-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=KothagudaMapEmbedURL"
                            width="500"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Kothaguda Clinic Map"
                            className="rounded-t-lg"
                        ></iframe>
                        <div className="">
                            <h2 className="text-xl font-bold text-center text-[#08749b] mt-3">KOTHAGUDA CLINIC</h2>
                            <p className="mt-2 text-center text-gray-600">
                                5th Floor, Above Sachdev Sports, Tirumala’s Subash Arcade<br />
                                H.I-62/1 Kondapur, X Roads, Kothaguda Hyderabad, <br /> Telangana 500084
                            </p>
                            <div className="mt-4 flex justify-center">
                                <button className="bg-green-500 text-white py-3 px-6 rounded-3xl flex items-center mb-5">
                                    <span className="material-icons mr-2">location_on</span> Get Direction
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;
