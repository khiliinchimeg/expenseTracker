

"use client"
import Link from "next/link";
import { Logo } from "@/icons/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import React from "react";
import { useFormik } from "formik";



const Login = () =>{
    // const [email ]
   
    return(
        <div className="w-screen h-screen m-auto ">
        <div className="flex container h-[900px]  rounded-2xl shadow-2xl ">

        <div className="flex w-full items-center justify-center h-full">
            <div className="w-96  h-fit">
             <h1 className="flex justify-center items-center text-3xl font-extrabold"><Logo/>Gelddfghn</h1>

             <div className="pt-10">
                <h1 className="font-semibold text-2xl flex justify-center">Welcome Back</h1>
                <p className="flex justify-center">Welcome back, Please enter your details</p>
             </div>
             <div className="pt-10 ">
             <Input type="email" placeholder="Email" className=""/>
            
             <Input type="password" placeholder="password" className="mt-4"/>
             <Button className="w-full bg-[#0166FF] mt-4 rounded-3xl">Log in</Button>

             </div>
             <div className="flex justify-center items-center pt-10">Don’t have account?

                <Link href={`/signs`}> <Button className=" bg-white text-[#0166FF]  hover:bg-white">Sign up</Button></Link>
               
               
             </div>
            </div>
        </div>
        <div className="flex  w-full h-full  bg-[#0166FF]"></div>
        </div>
        
    </div>
    )
}

export  default Login;