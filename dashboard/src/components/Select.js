
import { Button } from "@/components/ui/button";

import { Arrows } from "@/icons/Arrows";
import { Arrowzuun } from "@/icons/Arrowzuun";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";



import { LastRecord } from "./Home";
import { Food } from "./Food";
import { AddRecord } from "./AddRecord";
export const Selectss = ({}) => {
    return (
        <div className="flex w-full ml-6 ">
          <div className="w-full">
        
    
            <div className="flex w-full  h-fit py-2  justify-between ">
              <div className="flex  items-center">
                <Button className=" bg-slate-200 hover:bg-slate-300 w-8 h-8">
                  <Arrowzuun className=" text-black" />
                </Button>
                Last 30 Days
                <Button className=" w-8 h-8 bg-slate-200 hover:bg-slate-300">
                  <Arrows />
                </Button>
              </div>


              <div className="flex w-full ">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Newest fisrt</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className=" flex w-full h-fit py-3 px-6 border-slate-300 bg-white border rounded-xl  justify-between">
              <div className="flex gap-4">
                <Checkbox className="border-slate-300" /> Select all
              </div>
              <div className="flex text-[#94A3B8]">-35,500₮</div>
            </div>

            <div className="pt-6">
              <div className="font-extrabold font-base">Today</div>
              <LastRecord />
              <Food />
            </div>
            <div>
              <div className="font-extrabold font-base">Yesterday</div>
              <Food />
            </div>
          </div>
        </div>
     

     
    
    
   
    );
} ;