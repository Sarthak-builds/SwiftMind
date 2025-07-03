import React from "react";
import Button from "./button";
import { motion, useScroll } from "framer-motion"

function Navbar() {
 const { scrollYProgress } = useScroll();
 

   const handleLogoClick = (e) => {
    e.preventDefault(); 
    window.location.reload(); 
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth"})
    }
  }
return ( <motion.div className="text-white text-md  w-full sm:h-15 h-12 sm:px-10 md:px-20 px-4 sm:gap-1 outline-0 flex justify-between text-center items-center z-40 font-first fixed top-0  bg-black border-b-0 border-b-indigo-900 opacity-0" transition= {{
            duration:2
        }} whileInView={{ opacity: 1 }}>
    {/* <motion.div className=" bg-indigo-700 fixed top-13 left-0 h-5 origin-left " 
    style= {{
    scaleX:scrollYProgress}}> </motion.div> */}
<div>
        <a href="#" className="pointer flex justify-center items-center  font-first  text-gray-400 " onClick={handleLogoClick}><i class="ri-reactjs-line h-fit w-10 m-1  bg-black sm:text-2xl text-base  "></i>SWIFTMIND</a> 
</div>   
<div className=" pointer hidden md:flex gap-12 text-gray-300 z-40">
        <a href="#" onClick={()=>handleScroll("features")}><button className="hover:text-indigo-400 hover: duration-100 ">Features</button></a>
         <a href="#" onClick={()=>handleScroll("pricing")}><button className="hover:text-indigo-400 hover: duration-100 ">Pricing</button></a>
          <a href="#" onClick={()=>handleScroll("faq")}><button className="hover:text-indigo-400 hover: duration-100 ">FAQs</button></a>
           <a href="#" onClick={()=>handleScroll("contact")}><button className="hover:text-indigo-400 hover: duration-100 ">Contact</button></a>
            
</div>
<div className="z-40">
    <Button btntext="Login"></Button>
</div>
    
    </motion.div>)
}
export default Navbar;