import React from "react";
import Twitter from "../assets/twitter.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import "../styles/footer.css"

export default function Footer(){
    return(
        <>
            <div>
                <strong>Little Lemon</strong>
            </div>
            <span className="footerline"></span>
            <div>
                <div className="externallinks">
                    <img src={Twitter} alt="Twitter link" width={30} />
                    <img src={Whatsapp} alt="whatsapp link" width={30} />
                    <img src={Facebook} alt="facebook link" width={30} />
                    <img src={Instagram} alt="instagram link" width={30} />
                </div>
                <p>
                    &copy; Little Lemon 2023 All rights reserved
                </p>
            </div>
        </>
    )
}