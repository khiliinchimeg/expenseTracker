"use client"
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/icons/Logo";
import { Nemex } from "@/icons/Nemex";

export const Navbar = ({}) => {
  return (
    <div className="w-screen  bg-white  py-5">
      <div className="w-full   h-fit   border-e-red-200  flex justify-around items-center">
        <div className=" flex gap-4  items-center  ">
          <Logo />
          <Link href={`/dashboard`}>
          <Button className="bg-white text-black hover:bg-white"> <p className="font-normal">Dachboard</p></Button>
         
          </Link>
          <Link href={`/`}>
          <Button className="bg-white text-black hover:bg-white"> <h1 className="font-semibold">Records</h1></Button>
         
          </Link>
       
        </div>

        <div className=" flex gap-4 ">
          <Button className="bg-blue-600  rounded-3xl font-normal gap-2">
            <Nemex /> Record
          </Button>

          <div className=" ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};
