import React,{useState,useEffect} from "react";
import useActive from "../hooks/useActive";
import Logo from "../assets/Logo .svg";
import SignupPage from "../Components/SignupPage";
import LoginPage from "../Components/LoginPage";
import "../styles/reservation.css"

export default function Login(){
    const [activeTab,setActiveTab] = useState("Sign up")
    const alt = "Navigation Brand"
    const tabs = ["Sign up","Log in"]
    const handleClick = (item) => {
        setActiveTab(item)
    }
    useEffect(() => {
        document.title = `${activeTab} to little lemon`
    },[activeTab])
    useActive("Login")
    return(
        <>
            <header className="bookingheader">
                <img src={Logo} alt={alt} aria-label={alt}/>
            </header>
            <main style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <section role="tabpanel" className="menutabs logintabs">
                    {tabs.map(item => (
                        <div role="tab" className={activeTab == item ? "activelink menutab":"menutab"} onClick={() => handleClick(item)} key={item}>{item}</div>
                    ))}
                </section>
                <section className='bookingmain loginmain'>
                    <section className="bookingform">
                        <h2>{activeTab} to Little Lemon</h2>
                        <p>Please fill this form to {activeTab}</p>
                        {
                            activeTab === "Sign up"? <SignupPage activeTab={activeTab} /> : <LoginPage activeTab={activeTab} />
                        }
                    </section>
                </section>
            </main>
        </>
    )
}