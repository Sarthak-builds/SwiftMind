import Navbar from "./components/navbar";
import Button from "./components/button";
import FeatureBox from "./components/FeatureBox";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";
import PriceCard1 from "./components/pricecard";
import PriceCard2 from "./components/PRICECARD2.JSX";
import PriceCard3 from "./components/pricecard3.JSX";
import FaqContainer from "./components/faq";
import ScrollLinked from "./components/scroll";


function App() {


  return (
    <>
    
    <div className="min-h-screen w-full bg-[#020617]  flex items-center text-white flex-col overflow-hidden">
<div className="min-h-screen w-full bg-[#020617]  flex items-center text-white flex-col md:px-55 py-5">
  <DotLottieReact
      src="https://lottie.host/6a3a8bec-3eeb-4d63-be5f-0db1d81c7770/McN03ghVyr.lottie"
      loop
      autoplay
       className="w-full -top-15 sm:-top-90 opacity-40 absolute z-10"
    />
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(139,92,246,0.4), transparent)`,
    }}
  />
  {/* <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 via-black/10 to-transparent backdrop-blur-md z-20" /> */}
  <Navbar></Navbar>  
 <ScrollLinked></ScrollLinked>
  
  <motion.div className="flex flex-col items-center sm:gap-8 gap-4 text-center z-10 font-first mt-30 px-10 opacity-0"transition= {{
            duration:2
        }} whileInView={{ opacity: 1 }}>
    <h1 className="md:text-6xl md:px-60 lg:text-7xl lg:px-30 h-fit sm:text-5xl sm:px-70 px-95 text-4xl font-medium">Empower Your Future with Cutting-Edge AI</h1>

  <p className="text-md px-100 sm:text-2xl sm:px-70  md:px-20 text-gray-300">Unlock the power of artificial intelligence to streamline your workflows, boost productivity, and drive innovation with our scalable SaaS platform.</p>
  <Button btntext="Get Started"></Button>
  
   
    <div className=" mt-10 sm:py-3 py-1 sm:px-10 px-5 flex sm:gap-20 gap-6 inset-shadow-sm inset-shadow-indigo-500/50 rounded-4xl justify-around items-center relative w-fit">
     <p className="absolute -top-7 text-gray-400">Trusted by well established Companies </p>
      <span className="px-4" ><img className="lg:w-4 sm:w-3 w-3" src="/X.png"></img></span>
       <span ><img className="sm:w-20 w-15" src="/nvidia.png"></img></span>
        <span ><img className="sm:w-20 w-15" src="/meta.png"></img></span>
         <span ><img className="sm:w-20 w-15" src="/reddit.png"></img></span>
          <span ><img className="sm:w-20 w-15 mr-2" src="/zerodha.png"></img></span>
   
     </div>
      <div className="w-300 h-150 scale-75 lg:scale-100  bg-cover bg-top shadow-xl/60 shadow-gray-700 opacity-60 rounded-3xl -top-15 relative " style={{backgroundImage:`url(/backdrop.png`}}>
     </div>
    
     <div id="features" className="  flex flex-col sm:gap-5 gap-2 font-first rounded-4xl relative -top-5">
      <h1 className="text-xl sm:text-3xl  font-first text-gray-300">Features That Transform Your Workflow</h1>
      <p className="sm:text-2xl px-100 sm:px-0 text-md text-gray-500">Discover how our AI-powered SaaS platform empowers your team to achieve more with intelligent automation, actionable insights, and seamless scalability.</p>
     </div>
  
  
  
</motion.div>
 <div className="flex flex-wrap h-fit gap-12 w-[100vw] justify-center sm:py-12 py-4 text-white ">
        <FeatureBox icon='ri-brain-2-fill' heading=" Intelligent Automation" subheading="Streamline repetitive tasks with AI-driven automation, saving your team hours of manual work and boosting operational efficiency." ></FeatureBox>
        <FeatureBox icon="ri-bubble-chart-line" heading="Real-Time Analytics" subheading="Gain instant, data-driven insights with our advanced AI algorithms, enabling smarter decisions based on data and faster results like a pro."></FeatureBox>
        <FeatureBox icon="ri-funds-line" heading="Scalable Infrastructure" subheading="Grow without limits. Our cloud-based platform adapts to your needs, supporting teams of all sizes with unmatched reliability." ></FeatureBox>
        <FeatureBox icon="ri-command-line" heading="Seamless Integration" subheading="Connect effortlessly with your existing tools and workflows, ensuring a smooth transition and immediate productivity gains." ></FeatureBox>
         <FeatureBox icon="ri-lock-2-line" heading="Enhanced Security" subheading="Protect your data with state-of-the-art security features and compliance standards. Increase your security efficiently" ></FeatureBox>
          <FeatureBox icon="ri-service-line" heading="Performance Optimization" subheading="Boost your system efficiency with AI-optimized performance tuning and monitoring. why? Cuase it's the necessity!" ></FeatureBox>
      </div>
     </div>

   
    <div id="pricing" className="flex flex-col gap-2 justify-center items-center text-shadow-md text-shadow-indigo-800  relative px-4 mt-20 text-center">
      <h1 className="sm:text-4xl text-xl px-10 font-bold"> Unlock Your AI Potential with Flexible Pricing</h1>
      <p className="sm:text-2xl text-md">Find the ideal package to harness AI and drive your success forward.</p>
    </div>
  <div className="flex sm:flex-row flex-col gap-5 mt-10 ">
        <PriceCard1></PriceCard1>
        <PriceCard2></PriceCard2>
        <PriceCard3></PriceCard3>
  </div>
  <div id="faq" className="w-full sm:h-100 flex flex-col sm:flex-row sm:gap-5  justify-center items-center px-40 sm:px-10 my-30 " >
  <motion.div className="w-150 h-100  z-20 bg-cover bg-center opacity-50  " style={{backgroundImage: "url(/faqimg.png)" }} whileHover={{scale:1.05}}></motion.div>
  <div className="w-200 h-120  text-center sm:mt-30 mt-20 relative"> <FaqContainer></FaqContainer></div>
  </div>

  <div id="contact" className="w-full h-90  px-1 py-10 bg-black flex  flex-col items-center sm:justify-around justify-center  gap-5 sm:gap-12 text-center  relative">
  <div className="w-full gap-10 sm:gap-0 pt-10 flex flex-row flex-wrap justify-center items-center sm:justify-evenly text-gray-500 ">
    <ul className=" text-md sm:text-lg font-third text-start">
      <li></li>
       <h1 className=" text-gray-400 hover:text-indigo-400 ">Get in Touch</h1>
        <li className=" text-gray-400 hover:text-indigo-400 ">Phone:797485XXXX</li>
         <li className=" text-gray-400 hover:text-indigo-400 ">Email: sarthakbuilds@fun.com</li>
         <li className=" text-gray-400 hover:text-indigo-400 ">Support Hours: 24/7</li>
    </ul>
     <ul className="text-md sm:text-lg font-third text-start">
      <h1 className=" text-gray-400 hover:text-indigo-400 ">Legal and Policies</h1>
      <li className=" text-gray-400 hover:text-indigo-400 ">Privacy Policy</li>
       <li className=" text-gray-400 hover:text-indigo-400 ">Terms of Service</li>
        <li className=" text-gray-400 hover:text-indigo-400 ">Cookie Policy</li>
    </ul>
    <ul className="text-md sm:text-lg font-third  text-center sm:text-start">

      <li ><a href="https://x.com/Sarthakbuilds" className=" text-gray-400 hover:text-indigo-400" target="_blank">X</a></li>
     
        <li><a href="https://github.com/Sarthak-builds" className=" text-gray-400 hover:text-indigo-400 " target="_blank">Github</a></li>
    </ul>
  </div>
      
   
  <div> 
  <h1 className=" text-gray-400 hover:text-indigo-400 "><a href="https://x.com/Sarthakbuilds" className=" text-gray-400 hover:text-indigo-400" target="_blank">Made by @Sarthakbuilds 🛠️</a></h1>
  <h1 className="text-gray-600"> © 2025 SwiftMind. All rights reserved.</h1>
  </div>
  </div>
   
</div>

    </>
  )
}

export default App
