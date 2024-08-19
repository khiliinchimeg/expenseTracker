"use client"
import { createContext, useState } from "react";


export const Context = createContext(null);
export const ContextProver = ({children }) => {
    const [bgColor, setBgColor] = useState("red")
    const name = ""
    return(
        <Context.Provider value={{bgColor, setBgColor}}>
            {children}
        </Context.Provider>
    )
}