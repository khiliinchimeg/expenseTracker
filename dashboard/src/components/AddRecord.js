"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { SelectContents } from "./SelectContent";

export const AddRecord = ({ }) => {
  const [record, setRecord] = useState([]);
  const [title, setTitle] = useState("");
  const [color, setcolor] = useState("");
  const [id, setid] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/record");
        setRecord(response.data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    getData();
  }, []);

  const createRecord = async () => {
    const newRecord = {
      title,
      // amount,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/record",
        newRecord
      );

      setRecord((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };
    return(
    <div>
      <div className="w-full border border-slate-300  rounded-sm my-5"></div>
    <div className="flex  h-fit w-full gap-12">
    <div className="flex  w-full ">
       
            <Tabs defaultValue="account" className="w-full">
  <TabsList className="w-full    bg-[#F3F4F6]">

    <TabsTrigger value="Expense" className=" text-black w-full rounded-full ">Expense1</TabsTrigger>
    <TabsTrigger value="Income" className=" text-black rounded-full w-full">Income2</TabsTrigger>
    
  </TabsList>
  
  <TabsContent value="Expense" className="w-full  my-5">
   
  
  
          {record?.map((record, index) => (
            <li key={record.title + index}>
              <div  className="flex justify-between  my-2">
                <h1 className="flex ">
                
                </h1>
                <p>{record?.title}</p>
                <p className=" flex">
                 
                  {console.log("hhhhh")}
                </p>
              </div>
            </li>))}
    
            <Input
                      className="border"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
  <Input type="₮ 000.00" placeholder="₮ 000.00"  className="h-20"></Input >
  
  <div className="pt-6 pb-2 text-black font-[roboto] ">Category</div>
  <div className="pt-2">
  <SelectContents/>

  </div>

  <div className="flex w-full h-fit  border mt-3">
    <div className="flex w-full">
      <p className="">Date

   {/* <DatePickerDemo/> */}
   <div>
   <Button variant="outline">Button</Button>
   </div>
   </p>
  
    </div>
    <div className="flex w-full">

    <p>Date
      <div>
    <Button variant="outline">Button</Button>
    </div>
    </p>
    </div>
   
  </div>
  <Button variant="outline" className="w-full mt-4 rounded-3xl bg-[#0166FF] text-white hover:bg-[#0166FF] hover:text-white font-normal  leading-6"   value={title}
                onClick={createRecord}
                
                
               >Add Record</Button>


  </TabsContent>
  <TabsContent value="Income" className=" my-5">
  <Input type="₮ 000.00" placeholder="₮ 000.00"  className="h-20 "></Input >
  
  <div className="pt-6 pb-2 text-black font-[roboto] ">Category</div>
  <div className="pt-2">
  <SelectContents/>
  {console.log("select")}

  </div>

  <div className="flex w-full h-fit  border mt-3">
    <div className="flex w-full">
      <p className="">Date

   {/* <DatePickerDemo/> */}
   <div>
   <Button variant="outline">Button</Button>
   </div>
   </p>
  
    </div>
    <div className="flex w-full">

    <p>Date
      <div>
    <Button variant="outline">Button</Button>
    </div>
    </p>
    </div>
   
  </div>
  <Button variant="outline" className="w-full mt-4 rounded-3xl bg-[#16A34A] text-white hover:bg-[#16A34A] hover:text-white font-normal  leading-6">Add Record</Button>


  </TabsContent>
</Tabs>


    

</div>



     
        <div className="flex  w-full h-full">
     <div className="w-full">
     <p className="text-[#1F2937] text-base">Payee</p>

     <div className="pt-2">
 <SelectContents/>

  </div>

  <p className="text-[#1F2937] text-base mt-4">Note</p>
  <Textarea  className="h-full mt-3"/>


     </div>

        </div>
        </div>
        </div>
    )
      
}