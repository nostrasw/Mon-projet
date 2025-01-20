import React from "react";
import Testimonials from "./Testimonials";
import Image1 from "../assets/happy-1836445_1920.jpg"
import Image2 from "../assets/male-7275449_1920.jpg"
import Image3 from "../assets/man-839604_1920.jpg"
import Image4 from "../assets/woman-4685862_1920.jpg"
import "../styles/customersay.css"

export default function CustomerSay(){
    const data = [
        {
            img:Image1,
            name:"Kelvin Swapsh",
            role:"Technical Writer",
            rating:4,
        },
        {
            img:Image4,
            name:"Aisha Olawale",
            role:"CEO Kola Tech",
            rating:5,
        },
        {
            img:Image2,
            name:"Tristan Favor",
            role:"Mechanical Engineer",
            rating:5,
        },
        {
            img:Image3,
            name:"Abdulhakeem Mustapha",
            role:"System Analyst",
            rating:4,
        },
    ]
    return(
        <>
            <section className="customersay">
                <h2 className="componenttitletext">What our customers say about us</h2>
                <section className="testimonialsection">
                    {data.map(({img,role,rating,name},i) => (
                        <Testimonials img={img} rating={rating} name={name} role={role} key={name}/>
                    ))}
                </section>
            </section>
        </>
    )
}