import React,{useContext,useState,useEffect,useRef} from "react";
import Logo from "../assets/Logo .svg";
import { Link } from "react-router-dom";
import ActiveLinkContext from "../context/ActiveLinkContext";
import useSmallViewport from "../hooks/useSmallViewport";
import "../styles/header.css"

export default function Header(){
    const [active,setActive] = useContext(ActiveLinkContext)
    const [isOpenDrawer,setIsOpenDrawer] = useState(false)
    const isSmallViewport = useSmallViewport(750);
    const navdrawer = useRef(null)
    const navItem = [
        {
            name:"Home",
            anchor:"/"
        },
        {
            name:"About",
            anchor:"/about"
        },
        {
            name:"Menu",
            anchor:"/menu"
        },
        {
            name:"Reservation",
            anchor:"/bookings"
        },
        {
            name:"Login",
            anchor:"/login"
        },
    ]
    const alt = "Navigation Brand";
    const onOpen = () => {
        setIsOpenDrawer(navdrawer.current.checked)
    }
    useEffect(() => {
        const root = document.querySelector("#root")
        if(isOpenDrawer){
            root.classList.add("stop-scroll")
        }else{
            root.classList.remove("stop-scroll")
        }
    },[isOpenDrawer])
    return(
        <>
            <img src={Logo} alt={alt} aria-label={alt}/>
            {
                isSmallViewport&&
                <div aria-label="on Click for drawer" role="button" className="navdrawercontainer">
                    <input type="checkbox" name="navdrawer" id="navdrawer" ref={navdrawer} onClick={onOpen}/>
                    <label htmlFor="navdrawer" className="navlabel"></label>
                </div>
            }
            <nav role={isSmallViewport? "drawer":"navigation"} style={{left:isSmallViewport && (isOpenDrawer? 0:"-300px")}}>
                <ul>
                    {navItem.map((item,index) => {
                        return(
                            <li key={index}>
                                <Link to={`/little_lemon${item.anchor}`} className={active === item.name? "activelink":""}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}