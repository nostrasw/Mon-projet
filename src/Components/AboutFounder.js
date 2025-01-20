import React from "react";
import Image from "../assets/Mario and Adrian b.jpg"

export default function AboutFounder(){
    return(
        <section className="articlestyle">
            <article>
                <h2 className="componenttitletext">Little lemon's Founder</h2>
                <p className="highlighttext">
                    Eu nulla laboris aliquip quis sunt fugiat deserunt nostrud cillum. Nostrud occaecat quis ut et adipisicing veniam labore nulla. Pariatur excepteur aute consequat proident. Enim laborum labore minim proident magna irure cillum dolore. Proident sunt occaecat magna mollit culpa ex incididunt et. Enim voluptate ex sit eu qui. Anim adipisicing excepteur officia reprehenderit cupidatat magna elit non laboris amet.
                </p>
                <figure>
                    <img src={Image} alt="Little lemon's CEO Adrian and Head Chef Mario" width={"400px"}/>
                    <figcaption>Little lemon's CEO Adrian and Head Chef Mario</figcaption>
                </figure>
            </article>
        </section>
    )
}