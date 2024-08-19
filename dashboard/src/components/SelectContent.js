import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
export const SelectContents = ({}) => {
     return(
        <div>
    <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">hi</SelectItem>
                        <SelectItem value="dark">D</SelectItem>
                        <SelectItem value="system">q</SelectItem>
                      </SelectContent>
                    </Select>
        </div>
     )
}