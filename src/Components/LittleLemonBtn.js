import React from "react";
import { Link } from "react-router-dom";

export default function LitlleLemonBtn({text,anchor}){
    return(
        <button className="littlelemonbtn">
            <Link to={anchor} aria-label="on Click">
                {text}
            </Link>
        </button>
    )
}