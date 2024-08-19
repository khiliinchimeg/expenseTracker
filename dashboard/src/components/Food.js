import { Checkbox } from "@/components/ui/checkbox"
import { Fooods } from "@/icons/Fooods";
import { Home } from "@/icons/Home";

export const Food = () => {
  const lists = [
    {
      name: "Food & Drinks",
      desc: "14:00",
      tag: "- 1,000₮"
    },
    {
        name: "Food & Drinks",
        desc: "14:00",
        tag: "- 1,000₮"
      },
      {
        name: "Food & Drinks",
        desc: "14:00",
        tag: "- 1,000₮"
      },
   
 
  ];
  
    return (
        <div className="w-full rounded-xl   bg-white ">
          <div className="flex px-6 items-center mt-3">
            
          </div>
          <div className="grid ">
            {lists?.map((el,i) => (
            <Foods key={i} text={el. name}
            desc={el. desc}
            tag={el. tag}/>    
            ))}  
          </div>
        </div>
      );
    };

export const Foods = ({text, desc, tag}) => {
    return (
        <div className="w-full flex rounded-xl border border-[#d0d2d7] px-6 py-5 justify-between  mt-3">
             <div className="flex gap-4 items-center">
                <Checkbox className="border border-[#d0d2d7]"/>
                <Fooods className="px-2 py-2 bg-[#0166FF] text-sm rounded-2xl w-[30px] h-[30px] text-[#FFFFFF]"/>
                <div>
                    <p className="text-base font-normal">{text}</p>
                    <p className="text-xs font-normal text-[#aca9a9]">{desc}</p>
                </div>
             </div>
             <p className="flex items-center text-green-400 ">{tag}</p>
            </div>  
    )
}