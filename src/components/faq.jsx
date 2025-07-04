import { useState } from "react";
import React from "react";
import {motion} from "motion/react";
const FaqContainer = () => {
    const[val,setVal] = useState(null); //for index logic

     const faqs = [
    {
      question: "What is your AI SaaS platform?",
      answer:
        "Our AI SaaS platform is a cloud-based solution that leverages cutting-edge artificial intelligence to automate tasks, provide real-time analytics, and drive innovation for businesses of all sizes.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "The free trial allows you to explore our Basic Plan features for 14 days. No credit card is required, and you can upgrade to a paid plan anytime during or after the trial.",
    },
    {
      question: "Can I integrate with my existing tools?",
      answer:
        "Yes, our Pro and Enterprise plans offer seamless integration with popular tools like Slack, Google Workspace, and more. Contact us for custom integration options.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide email support for the Basic Plan, 24/7 email and chat support for Pro, and priority support with a dedicated account manager for Enterprise customers.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We implement advanced security measures, including encryption and compliance with GDPR and HIPAA standards, especially for Enterprise users.",
    },
  ];

    return (
        <motion.div className="w-full h-full p-6 z-30 relative -top-12 opacity-0" transition= {{
            duration:2
        }} whileInView={{ opacity: 1 }}>
            <h1 className="text-2xl  sm:text-3xl font-bold text-white">Frequently Asked Questions</h1>
            <div className="w-full h-fit flex flex-col gap-2 justify-center items-center text-start mt-5"
            >
              {faqs.map((faq, index)=>{
               return ( <div key= {index} className=" w-full h-fit border-b border-gray-600 font-first py-2 px-50  sm:px-0" 
               onClick={()=>setVal(val===index ? null: index)}> 
                    <h3 className=" text-md sm:text-2xl font-medium px-6 py-2 text-gray-400">{faq.question}<span> {val===index ?"": "+"} </span></h3>
                    {val===index && (<motion.p className="px-4 py-3 text-sm sm:text-md "  initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }}>{faq.answer}</motion.p>)}
                </div>
               )
               })}
            </div>
        </motion.div>
    )
}
export default FaqContainer;