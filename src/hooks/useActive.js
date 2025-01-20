import React,{useContext,useEffect} from "react";
import ActiveLinkContext from "../context/ActiveLinkContext";

export default function useActive(curAddress){
    const [active,setActive] = useContext(ActiveLinkContext);
    useEffect(() => {
        setActive(curAddress)
    },[active])
}
