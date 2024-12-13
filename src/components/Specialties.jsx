import React from "react";
import bg from '../assets/vdeo4.gif'
import bandage from '../assets/bandages.png'

const Specialties = () => {
    return (
        <div
            className="bg-cover bg-center min-h-[90vh] flex flex-col relative"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col items-center absolute top-[10rem] left-0 right-0">
                <h2 className="text-3xl font-bold text-white mt-10">
                    OUR <span className="text-black">SPECIALITIES</span>
                </h2>
                <div className="w-28 h-1 bg-white mt-5 "></div>
                <div className="w-16 h-1 bg-white mb-8 mt-2" ></div>

                <div className="flex bg-white shadow-md w-full max-w-7xl">
                    <div className="flex space-x-8 overflow-x-auto gap-5">
                        <div className="flex flex-col items-center text-blue-500 bg-[#08749b] p-6 px-8">
                            <img src="" alt="General" className="w-8 h-8 mb-2" />
                            <span className="font-medium text-sm">GENERAL</span> 
                        </div>
                        <div className="flex flex-col items-center text-gray-500 p-6 px-8">
                            <img src="/path-to-icon/knee.png" alt="Knee" className="w-8 h-8 mb-2" />
                            <span className="font-medium text-sm">KNEE</span>
                        </div>
                        <div className="flex flex-col items-center text-gray-500 p-6 px-8">
                            <img src="/path-to-icon/shoulder.png" alt="Shoulder" className="w-8 h-8 mb-2" />
                            <span className="font-medium text-sm">SHOULDER</span>
                        </div>
                        <div className="flex flex-col items-center text-gray-500 p-6 px-8">
                            <img src="/path-to-icon/hand.png" alt="Hand" className="w-8 h-8 mb-2" />
                            <span className="font-medium text-sm">HAND, WRIST & ELBOW</span>
                        </div>
                        <div className="flex flex-col items-center text-gray-500 p-6 px-8">
                            <img src="/path-to-icon/hip.png" alt="Hip" className="w-8 h-8 mb-2" />
                            <span className="font-medium text-sm">HIP</span>
                        </div>
                        <div className="flex flex-col items-center text-gray-500 p-6 px-8">
                            <img src="/path-to-icon/foot.png" alt="Foot and Ankle" className="w-8 h-8 mb-2" />
                            <span className="font-medium text-sm">FOOT & ANKLE</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center max-w-7xl shadow-md">

                    <div className="w-full lg:w-1/2">
                        <img
                            src={bandage}
                            alt="Specialty"
                            className="shadow-md"
                        />
                    </div>


                    <div className="w-full px-16">
                        <h3 className="text-2xl font-medium text-white mb-2">Specialities</h3>
                        <h2 className="text-2xl font-bold text-white mb-4">GENERAL</h2>
                        <p className="text-white text-sm font-semibold mb-4">
                            Orthopaedics is the medical specialty that focuses on injuries and
                            diseases of your body’s musculoskeletal system. This complex system
                            includes your bones, joints, ligaments, tendons, muscles, and
                            nerves, allowing you to move, work, and be active.
                        </p>
                        <ul className="list-disc text-white font-semibold text-sm ml-4 mb-4">
                            <li>Common Fractures</li>
                            <li>Limb Reconstruction</li>
                        </ul>
                        <button className="bg-[#009043] text-white text-2xl font-medium px-6 p-4 rounded-lg hover:bg-green-700">
                            View Details
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Specialties;
