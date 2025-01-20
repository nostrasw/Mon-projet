import React from "react";
import Image1 from "../assets/Mario and Adrian A.jpg"
import Image2 from "../assets/restaurant.jpg"
import "../styles/chicago.css"

export default function Chicago({isAboutPage}){
    return(
        <section className={isAboutPage? "componentstart":"chicago"} id="chicago">
            <h2 className="componenttitletext">Who are we?</h2>
            <section className="chicagomain">
                <article className="chicagotext">
                        <h2 className="titletext">Little Lemon</h2>
                        <h6 className="leadtext">Chicago</h6>
                        <p className="highlighttext">
                            Lorem aute irure exercitation velit elit cillum sunt sunt. Anim esse adipisicing ullamco sit Lorem fugiat culpa. Nulla officia sunt id ea ut proident nisi aliquip mollit. Sint minim est aliquip elit adipisicing nisi id amet in laboris. Anim magna in mollit velit enim do cupidatat eu nostrud et exercitation nulla.
                        </p>
                        <p className="highlighttext">
                            Occaecat pariatur adipisicing do ullamco labore veniam do mollit cupidatat tempor ex. Ullamco non id proident dolore irure aliqua do velit dolore. Dolore ipsum ea labore consectetur exercitation irure adipisicing voluptate enim qui voluptate. Ullamco ea sint et adipisicing.
                        </p>
                </article>
                <figure>
                    <img src={Image2} alt="About little lemon image" />
                    <img src={Image1} alt="About little lemon image" />
                </figure>
            </section>
        </section>
    )
}