import React from "react";
import Qoute from "../assets/left-quote-svgrepo-com.svg"

export default function Testimonials({img,name,role,rating}){
    const arrayRange = (start, stop, step) =>
        Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );
    const stars = arrayRange(1,5,1);
    const givenStars = arrayRange(1,rating,1)
    const ref = React.useRef([]);
    React.useEffect(() => {
        givenStars.map((t,i) => {
            ref.current[i].style.color = "#f4ce14";
            ref.current[i].innerText = "★"
        })
    },[givenStars])
    return(
        <article className="testimonial">
            <blockquote>
                <img src={Qoute} alt={Qoute} width={40}/>
                <p>Veniam quis nostrud irure incididunt et eu occaecat esse consectetur Lorem reprehenderit laborum deserunt dolore. Consequat magna consequat laboris sint veniam pariatur fugiat minim esse dolor exercitation.</p>
            </blockquote>
            <img src={img} alt={name + " image"}/>
            <h6>{name}</h6>
            <p>{role}</p>
            <span className="testimonialline" />
            <div>
                {stars.map((item,index) => (
                    <span id={item} key={item} className="ratings" ref={
                        (el) => {
                            ref.current[index] = el;
                        }
                    }>
                       ☆
                    </span>
                ))}
            </div>
        </article>
    )
}