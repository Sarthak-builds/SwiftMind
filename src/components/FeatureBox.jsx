import React from "react";
import {motion} from "motion/react";
function FeatureBox (props) {

    return (
        <motion.div className=" w-76 sm:w-100 h-fit  sm:px-6 px-3 sm:py-5 py-3 flex flex-col justify-start items-start text-start gap-3 rounded-2xl sm:mt-5  inset-shadow-sm inset-shadow-indigo-600 opacity-0" whileInView={{ opacity: 1 }} whileHover= {{scale:1.1}} transition= {{
            duration:0.5
        }} layoutId="modal" >
         
         <h1 className="sm:text-xl text-md ">{props.heading}</h1>
         <p className="text-gray-400">{props.subheading}</p>
         <i className={` ${props.icon} self-end`}></i>
        </motion.div>
    )
}
export default FeatureBox;