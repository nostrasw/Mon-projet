import React from "react";
import Img from "../assets/restauranfood.jpg"
import LitlleLemonBtn from "./LittleLemonBtn";
import useSmallViewport from "../hooks/useSmallViewport";
import "../styles/herosection.css"

export default function HeroSection({shouldHaveButton}){
    const isSmallViewport = useSmallViewport(680);
    return(
        <>
            <section className="herosection">
                <article className="herosectioninfo">
                    <h2 className="titletext">Little Lemon</h2>
                    <h6 className="leadtext">Chicago</h6>
                    <p className="highlighttext">Proident veniam esse mollit cillum. Excepteur cupidatat ipsum ipsum quis nulla. Ut in nulla occaecat minim consequat officia enim magna.</p>
                    {
                        shouldHaveButton && <LitlleLemonBtn text={"Reserve a Table"} anchor={"/little_lemon/bookings"}/>
                    }
                </article>
                {
                    !isSmallViewport &&
                    <figure>
                        <img src={Img} alt="Hero section image"/>
                    </figure>
                }
            </section>
        </>
    )
}