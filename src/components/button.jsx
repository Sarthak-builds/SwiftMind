import React from "react";
function Button (props) {
    return ( 
    <button  className="hover:bg-indigo-700  hover:border-none hover: duration-300 pointer w-fit sm:px-7 px-5 sm:h-10 h-8 rounded-3xl z-1 sm:text-base text-sm shadow-indigo-500/20 shadow-sm bg-black border-indigo-700 border-2">{props.btntext}</button>
    )
}

export default Button;