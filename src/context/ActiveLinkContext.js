import React,{createContext} from "react";

const ActiveLinkContext = createContext();

export function ActiveLinkProvider({children}){
    const [active,setActive] = React.useState("");
    return(
        <ActiveLinkContext.Provider value={[active,setActive]}>
            {children}
        </ActiveLinkContext.Provider>
    )
}
export default ActiveLinkContext;