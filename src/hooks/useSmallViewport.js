import React,{useEffect,useState} from "react";

export default function useSmallViewport(width){
    const [isSmallViewport,setIsSmallViewport] = useState(window.innerWidth < width)
    useEffect(() => {
        window.addEventListener("resize",() => {
            setIsSmallViewport(window.innerWidth < width)
        })
    },[window.innerWidth])
    return isSmallViewport
}