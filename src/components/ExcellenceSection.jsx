import React from 'react';

const ExcellenceSection = () => {
    return (
        <div className="bg-gray-50 py-12 flex items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-800 flex items-center justify-center">
                        <p className="text-white text-2xl sm:text-3xl font-bold">23</p>
                    </div>
                    <p className="text-teal-800 text-lg sm:text-xl font-bold">
                        Years Excellence In Orthopedics
                    </p>
                </div>
                <div className="flex items-center justify-center mt-6 sm:mt-0 space-x-8">
                    <div className="text-center">
                        <p className="text-teal-800 text-2xl sm:text-3xl font-bold">40,000+</p>
                        <p className="text-red-600 text-sm">Happy Patients</p>
                    </div>
                    <div className="text-center">
                        <p className="text-teal-800 text-2xl sm:text-3xl font-bold">25,000+</p>
                        <p className="text-red-600 text-sm">Ortho Surgeries</p>
                    </div>
                    <div className="text-center">
                        <p className="text-teal-800 text-2xl sm:text-3xl font-bold">12</p>
                        <p className="text-red-600 text-sm">Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExcellenceSection;
