"use context"

import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProver } from "@/components/utils/context";
// import '../styles/globals.css'

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProver>
          <body className={inter.className}>{children}</body>
      </ContextProver>
    
    
     
   
    </html>
  );
}
