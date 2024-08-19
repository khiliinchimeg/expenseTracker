"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

import { Arrow } from "@/icons/Arrow";
import { Nemex } from "@/icons/Nemex";
import { Eye } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { SelectContents } from "./SelectContent";


export const Category = ({}) => {
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [id, setid] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/category");
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    getData();
  }, []);

  const createCategory = async () => {
    const newCategory = {
      title,
      amount,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/category",
        newCategory
      );

      setCategory((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };
  console.log("heello nz")

  return (
  
      <div className=" font-normal gap-10 font-base ">
        <ul>
          {category?.map((category, index) => (
            <li key={category.title + index}>
              <div  className="flex justify-between  my-2">
                <h1 className="flex ">
                  <Eye className="text-[#94A3B8]" />
                </h1>
                <p>{category?.title}</p>
                <p className=" flex">
                  <Arrow />
                </p>
              </div>
            </li>
          ))}
        </ul>
        <AlertDialog>
          <AlertDialogTrigger>
            <Nemex/> Add Category
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Add Category</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="flex gap-3">
                  <div className="flex">
                 <SelectContents/>
                  </div>
                  <div className="flex w-full">
                    <Input
                      className="border"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                value={title}
                onClick={createCategory}
                className="w-full bg-[#16A34A] hover:bg-[#16A34A] h-9"
              >
                Add Record
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/*       
        <Input
          className="border"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        /> */}
        {/* <button onClick={createCategory}>hiiiii</button> */}
        {/* <butten onClick={createAccounts}>Create</butten>
         */}

        {/* <Button className=" bg-white text-black"><Nemex className="bg-black"/>Category </Button> */}
      </div>
    
  );
};
