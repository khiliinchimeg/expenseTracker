"use client"
import axios from 'axios';
import { useEffect, useState } from "react";



import { Checkbox } from "@/components/ui/checkbox";
import { Home } from "@/icons/Home";

export const LastRecord = () => {


    const [record, setRecord] = useState([]);
    const [title, setTitle] = useState("");
    const [color, setcolor] = useState("");
    const [id, setid] = useState("");
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get("http://localhost:3001/category");
          setRecord(response.data);
        } catch (error) {
          console.error("Error fetching record:", error);
        }
      };
  
      getData();
    }, []);
  
    const createRecord = async () => {
    
      const newRecord = {
        title,
        
      };
  
      try {
        const response = await axios.post(
          "http://localhost:3001/record",
          newRecord
        );
  
        setRecord((prev) => [...prev, response.data]);
      } catch (error) {
        console.error("Error creating account:", error);
      }
    };
  const lists = [
    {
      name: "Lending & Renting",
      id: "0",
      desc: "3 hours ago",
      tag: "- 1,000₮",
    },
  ];
  return (
    <div className="w-full rounded-xl   bg-white ">
      <div className="flex px-6 items-center mt-3"></div>
      <div className="grid ">
        {lists?.map((el, i) => (
          <Lending key={i} text={el.name} desc={el.desc} tag={el.tag} />
        ))}
      </div>
    </div>
  );
};

export const Lending = ({ text, desc, tag }) => {
  return (
    <div className="w-full flex rounded-xl border border-[#d0d2d7] px-6 py-5 justify-between ">
      <div className="flex gap-4 items-center">
        <Checkbox className="border border-[#d0d2d7]" />
        <Home className="px-2 py-2 bg-[#0166FF] text-sm rounded-2xl w-[30px] h-[30px] text-[#FFFFFF]" />
        <div>
        <div></div>
          <p className="text-base font-normal">{text}</p>
          <p className="text-xs font-normal text-[#aca9a9]">{desc}</p>
        </div>
      </div>
      <p className="flex items-center text-green-400 ">{tag}</p>
    </div>
    
  );
};
