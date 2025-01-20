import React from "react";
import Header from "../Components/Header";
import useActive from "../hooks/useActive";
import useTitle from "../hooks/useTitle";
import HeroSection from "../Components/HeroSection";
import Chicago from "../Components/Chicago";
import History from "../Components/History";
import OurMission from "../Components/OurMission";
import AboutFounder from "../Components/AboutFounder";
import Footer from "../Components/Footer";
import "../styles/aboutpage.css"

export default function About(){
    useActive("About")
    useTitle("What to know more about little lemon?")
    return(
        <>
         <header>
            <Header />
         </header>
         <main>
            <HeroSection shouldHaveButton={false} />
            <Chicago isAboutPage={true} />
            <History />
            <OurMission />
            <AboutFounder />
         </main>
         <footer>
            <Footer />
         </footer>
        </>
    )
}