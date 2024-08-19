"use client"
import Link from "next/link";
import { useState, } from "react";
import { Logo } from "@/icons/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formik, useFormik } from "formik";





const Signs = () => {

    const formik = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
            email: "",
        },
   onSubmit: (values) => {
    alert(`first name: ${formik.values.firstName} ${formik.values.lastName} ${formik.values.email}`);
    console.log("first messange", formik.values)
   },
   validate: values => {
    let errors = {};
    if(!values.firstName) {
        errors.firstName = "baihgui";
    }
    if(!values.lastName) {
        errors.lastName = "baihgui";
    }
    if(!values.email) {
        errors.email = "baihgui";
    }

   },
   
   
       
  
})
console.log("firs", formik.values)
    return(
        <div className="w-screen h-screen ">
      
            <form className="flex flex-col"  
            onSubmit={formik.handleSubmit}>
  <div className="flex w-full h-screen">
        <div className="flex w-full items-center justify-center h-full">
            <div className="w-96  h-fit">
             <h1 className="flex justify-center items-center text-3xl font-extrabold"><Logo/>Geld</h1>

             <div className="pt-10">
                <h1 className="font-semibold text-2xl flex justify-center">Create Geld account</h1>
                <p className="flex justify-center">Sign up below to create your Wallet account</p>
             </div>
             <div className="pt-10 ">
                <Input   type="text"
              placeholder="firstname"
            //  name = "firstname"
            //  className=""
            //  value={formik.values.firstName}
            //  onChange= {formik.handleChange }
            />
             <Input 
             type="firstname"
             placeholder="firstname"
             name = "firstname"
             className=""
             value={formik.values.firstName}
             onChange= {formik.handleChange }
             />
             <Input
              type="lastname"
              placeholder="lastname"
               className="mt-4"
               name = "lastname"
               value={formik.values.lastName}
               onChange= {formik.handleChange }
               
               />
             <Input
              type="email"
               placeholder="email"
                className="mt-4"
                name = "email"
                value={formik.values.email}
                onChange= {formik.handleChange }
                />
             {/* <Input type="password" placeholder="password" className="mt-4"/>
             <Input type="Re-assword" placeholder="Re-assword" className="mt-4"/> */}
             <Button className="w-full bg-[#0166FF] mt-4 rounded-3xl">Log in</Button>

             </div>
             <div className="flex justify-center items-center pt-10">Already have account?
                <Link href={`/login`}> <Button className=" bg-white text-[#0166FF] hover:bg-white" type="log in">log in</Button></Link>
               
               
             </div>
            </div>
        </div>
        <div className="flex  w-full h-full  bg-[#0166FF]"></div>
        </div>
        </form>
        </div>
        
   
    )
}

export  default Signs;