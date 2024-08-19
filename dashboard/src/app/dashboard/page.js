"use client";
import { Navbar } from "@/components/Navbar";
import { LeadingBot } from "@/icons/LeadingBot";
import { Leading } from "@/icons/Leanding";

import { LogoWhite } from "@/icons/LogoWhite";

import { Tseg } from "@/icons/Tseg";
import { Wifi } from "@/icons/Wifi";


import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
 
import { ChartConfig, ChartContainer } from "@/components/ui/chart"


import React from "react";
import { Component } from "@/components/Charts";
// import { House } from "@/components/house";

const Dashboard = () => {

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
      ]
       
      const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "#2563eb",
        },
        mobile: {
          label: "Mobile",
          color: "#60a5fa",
        },
      } 
  return (
    <div className="w-full h-fit  ">
      <Navbar />
      <div className="bg-slate-100     w-full h-fit  pt-6  ">
        <div className=" container h-fit  mx-auto">
          <div className="flex w-full h-fit ml-4">
            <div className=" flex w-full ">
              <div className="w-full h-56 bg-blue-500 rounded-2xl py-9 px-9">
                <div className=" text-[white] flex   text-2xl	 gap-3 items-center">
                  <LogoWhite /> Geld
                </div>

                <div className="flex justify-between mt-20">
                  <div className="flex">
                    <p>Cash</p> <h1>10,000,00</h1>
                  </div>
                  <div className="flex">
                    <Wifi />
                  </div>
                </div>
              </div>

              <div className="flex w-full h-fit rounded-2xl py-4 px-6  bg-white  ml-6 ">
                <div className="w-full">
                  <div className="w-full  h-fit  flex items-center gap-3 ">
                    {" "}
                    <Tseg /> Your Income
                  </div>

                  <div className="border border-slate-200 w-full mt-4"></div>

                  <div className="pt-4 ">
                    <h1 className="flex items-start text-4xl font-semibold leading-10">
                      1,200,000₮
                    </h1>
                    <p className="text-[#64748B]  text-lg pt-3">
                      Your Income Amount
                    </p>
                  </div>

                  <div className="flex items-center  gap-3 pt-6">
                    <Leading /> 32% from last month
                  </div>
                </div>
              </div>
              <div className="flex w-full ml-5 ">
                <div className="flex w-full h-fit rounded-2xl py-4 px-6  bg-white ">
                  <div className="w-full">
                    <div className="w-full  h-fit  flex items-center gap-3 ">
                      <Tseg /> Total Expenses
                    </div>

                    <div className="border border-slate-200 w-full mt-4"></div>

                    <div className="pt-4 ">
                      <h1 className="flex items-start text-4xl font-semibold leading-10">
                        -1,200,000₮
                      </h1>
                      <p className="text-[#64748B]  text-lg pt-3">
                        Your Income Amount
                      </p>
                    </div>

                    <div className="flex items-center  gap-3 pt-6">
                      <LeadingBot /> 32% from last month
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>



       
        <div className="flex w-full h-fit mt-6 bg-white">

            <div className="flex  w-full  py-">
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>                    
                
                 </div>
            <div className="flex w-full h-fit rounded-2xl">
<Component className="w-full"/>
            </div>
            
            </div>


            <div><House/></div>
            </div>
      </div>
    </div>
  );
};

export default Dashboard;
