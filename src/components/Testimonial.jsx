import React from 'react';
import testimonialbg from '../assets/testimonialbg.png';
import testimonial2 from '../assets/testimonial2.png';
import googlerew from '../assets/googlerew.webp';


const TestimonialSection = () => {
    return (
        <div
            className="flex items-center bg-cover bg-center py-10 sm:px-6 lg:px-16 "
            style={{ backgroundImage: `url(${testimonialbg})` }}
        >
            <div className=" bg-[#08749b] bg-opacity-80 rounded-2xl shadow-xl flex flex-col sm:flex-row mx-16">
                <div className="flex flex-col items-center sm:flex-row p-2">
                    <div className="p-6 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                        <img
                            src={testimonial2}
                            alt="Reviewer"
                            className="w-42 object-cover rounded-full"
                        />
                        <p className="text-xl font-black text-center mt-4">Charita Tallapaka</p>
                    </div>
                    <div className="px-6">
                        <blockquote className="mt-4">
                            <p className="text-5xl text-gray-800 font-bold">&ldquo;</p>
                            <p className="text-base font-light text-[#000000] p-5">
                                Dr. Rammohen was fantastic with my knee pain. They listened
                                carefully, explained my treatment options clearly, and the
                                recommended medication has already made a huge difference! I'm so
                                happy to be back to my daily routine with less pain. Highly
                                recommend.
                            </p>
                            <p className="text-4xl text-gray-800 font-bold text-right">&rdquo;</p>
                        </blockquote>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-6 sm:mt-0 sm:ml-auto bg-white opacity-90">
                <div className="flex flex-col items-center px-20">
                    <img
                        src={googlerew}
                        alt="Google Review"
                        className="w-96"
                    />
                    <div className="mt-4 text-center">
                        <p className="text-lg font-semibold text-gray-800">1000+</p>
                        <div className="flex justify-center">
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default TestimonialSection;
