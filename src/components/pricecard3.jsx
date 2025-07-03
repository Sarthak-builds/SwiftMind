 import React from "react";
 import {motion} from "motion/react";
 function PriceCard3 () {

    return (
        <motion.div className="scale-90 overflow-hidden w-85 h-150 rounded-3xl shadow-lg ring-1 ring-indigo-600 bg-cover bg-center z-20  p-5 flex flex-col justify-between relative top-8 opacity-0" whileHover= {{scale:1.05}} transition= {{
            duration:0.5
        }}  whileInView={{ opacity: 1 }}>
           <div  style={{backgroundImage:"url(/src/assets/priceimg.jpg)"}} className="w-full h-50 bg-cover bg-center rounded-3xl opacity-30 absolute top-0 left-0">
           </div> 

            <div className="flex flex-col gap-1 z-30 px-2 mt-2 text-gray-100">
                <h1 className="text-3xl">SuperPRO Plan</h1>
           <h4>Perfect for SaaS Builders</h4>
             <h1 className="text-5xl my-3 font-bold"> $99 <sub className="text-xl -top-1 text-gray-400 font-medium">/month</sub></h1> 
            </div>
            <ul className="  px-4 flex flex-col gap-2 text-md text-gray-300 list-disc mt-5">
                <li>Enterprise-Level Automation</li>
                <li>Comprehensive Real-Time Analytics</li>
                <li>Unlimited User License</li>
                <li>100GB+ Storage</li>
                <li>Email Support</li>
               <li>Advanced Security & Compliance (e.g., GDPR, HIPAA)</li>
               <li>Onboarding & Training Sessions</li>
               <li>Unlimited Custom Workflow Templates</li>

            </ul>
            <button  className="bg-indigo-700 pointer w-full px-5 h-10 rounded-xl z-1 text-base mb-10 hover:bg-indigo-500 hover:border-none hover: duration-300 pointer">Become a Pro</button>
        </motion.div>
    )
 }
 export default PriceCard3;