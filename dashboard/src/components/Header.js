import { Nemex } from "@/icons/Nemex";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Category } from "./Category";
import { Slider } from "@/components/ui/slider";
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { LastRecord } from "./Home";
import { Food } from "./Food";
import { AddRecord } from "./AddRecord";
import { Selectss } from "./Select";



import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"






export const Header = () => {
  return (
    <div className=" w-screen    bg-slate-50 ">
      <div className="w-full  h-fit   pt-5 container flex">
        <div className="flex  h-fit border border-slate-200 w-[282px] py-6 px-4 bg-white rounded-xl ">
          <div>
            <div className="gap-8 ">
              <h1 className="font-extrabold font-base">Records</h1>
     

 
              <Dialog>
                <DialogTrigger className="w-[250px]  h-8 bg-[#0166FF] mt-8 flex items-center justify-center rounded-2xl">
                  <Nemex /> Add
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle  >Add Record</DialogTitle>
                    <DialogDescription>
                      <AddRecord />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog> 
            </div>
            <div className="flex w-[250px] mt-8">
              <Input />
            </div>

            <div className="pt-6">
              <h1 className="font-extrabold font-base">Types</h1>

              <div className="gap-3 mt-4 font-base ">
                <RadioGroup defaultValue="option-one ">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one bg-[#1F2937]">All</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two bg-[#1F2937]">Income</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-tree" id="option-tree" />
                    <Label htmlFor="option-two bg-[#1F2937]">Expense</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="w-full h-fit mt-6">
                <div className="flex justify-between">
                  <h1 className="flex font-extrabold font-base ">Category</h1>
                  <p className="flex text-slate-500">Clear</p>
                </div>

                <div className="mt-4  ">
                  <Category />
                </div>

                <div className="w-full h-fit my-4 ">
                  <h1 className="font-extrabold font-base">Amount Range</h1>
                  <div className="flex gap-1 mt-8">
                    <div className="flex">
                      <Input />
                    </div>
                    <div className="flex">
                      <Input />
                    </div>
                  </div>
                  <div className="mt-6 bg-[#0166FF] border-[#0166FF]">
                    <Slider
                      defaultValue={[33]}
                      max={100}
                      step={1}
                      className="bg-[#0166FF]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className=" w-full ml-6 ">
       

<div><Selectss/></div>
</div>
         </div>
      <div />
    </div>
  );
};
