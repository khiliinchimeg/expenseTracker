import { Home } from "@/icons/Home";
import { Checkbox } from "./ui/checkbox";

export const House = () => {
  const lists = [
    {
      name: "Lending & Renting",
      id: "0",
      desc: "3 hours ago",
      tag: "- 1,000₮"
    },
    {
        name: "Lending & Renting",
        id: "0",
        desc: "3 hours ago",
        tag: "- 1,000₮"
      },
      {
        name: "Lending & Renting",
        id: "0",
        desc: "3 hours ago",
        tag: "- 1,000₮"
      },
      {
        name: "Lending & Renting",
        id: "0",
        desc: "3 hours ago",
        tag: "- 1,000₮"
      },
      {
        name: "Lending & Renting",
        id: "0",
        desc: "3 hours ago",
        tag: "- 1,000₮"
      },
 
  ];
  return (
    <div className="w-full rounded-xl   bg-white">
      <div className="flex px-6 items-center py-4 gap-2">
        <p className="font-semibold text-base">Last Records</p>
      </div>
      <div className="grid px-6 py-8 gap-3 border-t-2">
        {lists?.map((el,i) => (
        <Lending key={i} text={el. name}
        desc={el. desc}
        tag={el. tag}/>    
        ))}  
      </div>
    </div>
  );
};

export const Lending = ({text, desc, tag}) => {
    return (
        <div className="w-full flex rounded-xl border border-[#d0d2d7] px-6 py-5 justify-between ">
             <div className="flex gap-4 items-center">
                <Checkbox className="border border-[#d0d2d7]"/>
                <Home className="px-2 py-2 bg-[#0166FF] text-sm rounded-2xl w-[30px] h-[30px] text-[#FFFFFF]"/>
                <div>
                    <p className="text-base font-normal">{text}</p>
                    <p className="text-xs font-normal text-[#aca9a9]">{desc}</p>
                </div>
             </div>
             <p className="flex items-center text-green-400 ">{tag}</p>
            </div>  
    )
}