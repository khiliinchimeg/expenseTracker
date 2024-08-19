"use client"
import { Navbar } from "@/components/Navbar";
import {Header} from "@/components/Header";
import { Context } from "@/components/utils/context"; 
import { useContext } from "react"; 


import Link from "next/link";
import { Cate } from "@/components/Cate";
import { Select, Selectss } from "@/components/Select";




export default function Home() {
  const { bgColor, setBgColor } = useContext(Context);
  const handleClick = () =>{
    setBgColor(bgColor === "red" ? "green" : "red")
  };

  
  return (
   <div className="w-full bg-white">
       <p>Hello</p>
            <button  onClick={handleClick}style={{ backgroundColor: bgColor }}>Click hi</button>      
            <Link href="/login">Login</Link>
    
      <Navbar/>
      <Header/>
      <Cate/>
      {/* <Selectss/> */}
     
    
      
      
      </div>
     
   
  );
}
