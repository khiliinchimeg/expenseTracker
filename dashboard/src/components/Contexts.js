"use context"
import { Context } from "@/components/utils/context"; // Adjust path if needed
import { useContext } from "react"; 
import Link from "next/link";

const Contexts = () => {
    const { bgColor } = useContext(Context);

  const handleClick = () =>{}
    return (
        <div>
            <p>Hello</p>
            <button style={{ backgroundColor: bgColor }}>Click me</button>      
            <Link href="/login">Login</Link>
        </div>
    );
}

export default Contexts;
