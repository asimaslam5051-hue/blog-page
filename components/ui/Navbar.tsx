"useclient"
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Sheet,
 
  SheetContent,
  
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./components/theme-button";
const Navbar = () => {
    return(
       <nav className="bg-background/50 p-4 sticky top-0 backdrop-blur border-b z-10">
        <div className="container mx-auto flex justify-between items-center">
            <Link href={"/"}><div className="text-lg font-bold">
                AsimBlog
            </div></Link>
            <div className="hidden md:flex space-x-4 items-center">
               <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Home
               </Link>
               <Link href="/about" className="hover:scale-105 hover:font-semibold transittion-transform duration-300">About
               </Link>
               <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Blog
               </Link>
                <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact
                </Link>
                <div className="flex item-center">
                    <Button className="mx-1" variant="outline">Login</Button>
                    <Button className="mx-1" variant="outline">Signup</Button>
                    <ModeToggle/>
                </div>
            </div>
            <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox= "0 0 24 24" xmlns="http://www.w3.org/2000/SVG">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </SheetTrigger>
                <span className="px-4">
                    <ModeToggle />
                </span>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="font-bold my-4">AsimBlog</SheetTitle>
                    
                    <div className=" flex flex-col gap-6">
                            <Link href="/Home">Home
                            </Link>
                            <Link href="/about">About
                            </Link>
                            <Link href="/blog">Blog
                            </Link>
                            <Link href="/contact">Contact
                            </Link>
                            <div>
                               <Button className="mx-1 text-xs" variant="outline">Login</Button>
                               <Button className="mx-1 text-xs" variant="outline">Signup</Button>
                             
                            </div>
                    </div>
                   
                  </SheetHeader>
                </SheetContent>
            </Sheet>
                
            </div>
        </div>
       
       </nav>
    
    )
}
 export default Navbar
