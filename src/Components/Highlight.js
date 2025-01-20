import React from "react";
import Logo from "../assets/Dish icon.svg"

export default function Highlight({img,title,price}){
    return(
       <article className="highlightitem">
            <figure style={{margin:0}}>
                <img src={img} alt={title}/>
            </figure>
            <section style={{margin:"10px"}} className="highlightitemmain">
                <span role="heading">
                    <h6>{title}</h6>
                    <p>${price}</p>
                </span>
                <p>
                    Esse eiusmod anim fugiat commodo proident non nulla irure est velit irure irure esse officia. In consectetur aliqua elit minim ullamco consectetur proident magna. Qui cillum esse proident mollit commodo do id pariatur anim irure fugiat incididunt.
                </p>
                <a className="highlightfooter">
                    <p>Order a Delivery</p>
                    <img src={Logo} alt="Dish Icon" height={"15px"}/>
                </a>
            </section>
       </article>
    )
}