import React, { useEffect, useRef, useState } from "react";
import useActive from "../hooks/useActive";
import useTitle from "../hooks/useTitle";
import useSmallViewport from "../hooks/useSmallViewport";
import Header from "../Components/Header";
import HamburgerImage from "../assets/7.jpg"
import RainbowcakeImage from "../assets/11.jpg"
import OrientalTacoImage from "../assets/13.jpg"
import BrurccetaImage from "../assets/busrcceta.png"
import GrilledfishImage from "../assets/fish.png"
import GreeksaladImage from "../assets/greek salad.jpg"
import LatteImage from "../assets/Latte.jpg"
import LemondessertImage from "../assets/lemon dessert.jpg"
import PastaImage from "../assets/pasta.png"
import PrawndishImage from "../assets/prawn dish.jpg"
import Highlight from "../Components/Highlight"
import "../styles/menupage.css"

export default function Menu(){
    useActive("Menu")
    useTitle("A wide array of delicious food to choose from.")
    const isSmallViewport = useSmallViewport(600)
    const tabs = ["All","Appetizer","Main","Dessert"];
    const [activeTab,setActiveTab] = useState("All");
    const [seacrh,setSearch] = useState({
        value:"",
        focus: false
    })
    const searchref = useRef(null)
    const handleClick = (item) => {
        setActiveTab(item)
    }
    const [dishes,setDishes] = useState({
        Appetizer:[
            {
                img:LatteImage,
                price: "4.00",
                title:"Latte"
            },
            {
                img:OrientalTacoImage,
                price: "7.99",
                title:"Oriental Taco"
            },
            {
                img:BrurccetaImage,
                price: "5.99",
                title:"Brurcceta"
            }
        ],
        Main:[
            {
                img:PastaImage,
                price: "19.99",
                title:"Pasta"
            },
            {
                img:GrilledfishImage,
                price: "25.50",
                title:"Grilled Fish"
            },
            {
                img:GreeksaladImage,
                price: "15.49",
                title:"Greek salad"
            },
            {
                img:HamburgerImage,
                price: "23.00",
                title:"Hamburger"
            }
        ],
        Dessert:[
            {
                img:PrawndishImage,
                price: "7.99",
                title:"Prawn Cobler"
            },
            {
                img:LemondessertImage,
                price: "10.99",
                title:"Lemon Dessert"
            },
            {
                img:RainbowcakeImage,
                price: "3.99",
                title:"Rainbow Cake"
            },
        ]
    })
    const allDishes = [
        ...dishes.Appetizer,
        ...dishes.Main,
        ...dishes.Dessert
    ]
    const [shuffledDishes,setShuffledDishes] =  useState(
        allDishes
        .map(val => ({val,sort:Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({val}) => val)
    )
    const [seacrhedDishesState,setSeacrhedDishesState] = useState("")
    const handleChange = (e) => {
        setSearch({
            ...seacrh,
            value:e.target.value
        });
    }
    useEffect(() => {
        var seacrhedDishes = []
        allDishes.forEach(item => {
            if(seacrh.value.length > 0){
                if(item.title.includes(seacrh.value)){
                    seacrhedDishes = [...seacrhedDishes,item]
                }
            }
        })
        setSeacrhedDishesState(seacrhedDishes)
        setSearch({
            ...seacrh,
            focus:seacrh.value.length > 0
        });
    },[seacrh.value])
    return(
        <>
         <header>
            <Header />
         </header>
         <main>
            <form role="searchbox" className="menusearchbox">
                <input placeholder="Search" value={seacrh.value} ref={searchref} onChange={handleChange} name="search"/>
            </form>
            <section role="tabpanel" className="menutabs">
                {!isSmallViewport && <h2>Categories:</h2>}
                {tabs.map(item => (
                    <div role="tab" className={activeTab == item ? "activelink menutab":"menutab"} onClick={() => handleClick(item)} key={item}>{item}</div>
                ))}
            </section>
            <section>
                <h2 className="menucontentheader">{activeTab}</h2>
                <section className="highlightsmain" style={{margin:"0 5%",width:"90%"}}>
                    {
                        //if the active tab is all find if the input is focus
                        activeTab === "All"?(
                            //if input is focused get the array of the searched dish if empty return an error message
                            seacrh.focus?(
                                seacrhedDishesState.length == 0?(
                                    <p className="leadtext">Sorry we could'nt find <strong>{seacrh.value}</strong> in our menu</p>
                                ):(
                                    seacrhedDishesState.map(({img,price,title},index) => (
                                        <Highlight key={title + index} title={title} price={price} img={img}/>
                                    ))
                                )
                            ):(
                                shuffledDishes.map(({img,price,title},index) => (
                                    <Highlight key={title + index} title={title} price={price} img={img}/>
                                ))
                            )
                        ):(
                            dishes[activeTab].map(({img,price,title},index) => (
                                <Highlight key={title + index} title={title} price={price} img={img}/>
                            ))
                        )
                    }
                </section>
            </section>
         </main>
        </>
    )
}