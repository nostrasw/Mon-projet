import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import HighlightSection from "../Components/HighlightSection";
import CustomerSay from "../Components/CustomerSay";
import Chicago from "../Components/Chicago";
import Footer from "../Components/Footer";
import useActive from "../hooks/useActive";
import useTitle from "../hooks/useTitle";

export default function Home(){
    useActive("Home");
    useTitle("Welcome to Little Lemon")
    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <HeroSection shouldHaveButton={true}/>
                <HighlightSection />
                <CustomerSay />
                <Chicago isAboutPage={false}/>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}