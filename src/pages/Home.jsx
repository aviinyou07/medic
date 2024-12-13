import React from 'react'
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import DoctorSection from "../components/DoctorSection";
import ExcellenceSection from "../components/ExcellenceSection";
import Locations from "../components/Locations";
import Descp from "../components/descp";
import Specialties from "../components/Specialties";
import Footer from "../components/footer";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Testimonial />
            <DoctorSection />
            <ExcellenceSection />
            <Locations />
            <Descp />
            <Specialties />
            <Footer />

        </>
    )
}

export default Home