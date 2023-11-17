import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {

    const [toggler,setToggler]= useState(true)
    function toggleHandler() {
        setToggler(toggle=>!toggle)
    }

  return (
    <div className=" flex-auto  overflow-hidden">
        { 
            toggler?
            null
            :
            
            <div
            className=" absolute text-xl top-0 z-20 bg-gray-300 h-full w-full flex flex-col items-end  md:flex gap-2 p-24 left-0"
            style={{
                background: " rgba(0, 0, 0, 0.75)",
                backdropFilter: "blur(10.7px)",
            }}
            >
            
            <h1 className="cursor-pointer">About Me</h1>
            <h1 className="cursor-pointer">Contact </h1>
          </div>

        }
   
 <button className={`absolute z-30 right-16 top-10 ${toggler?"rotate-180":""} `} onClick={()=>toggleHandler()} >
 <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 3.61215C25.2319 3.61215 31.5 9.88009 31.5 17.6121C31.5 25.3441 25.2319 31.6121 17.5 31.6121C9.76801 31.6121 3.5 25.3441 3.5 17.6121C3.5 9.88009 9.76801 3.61215 17.5 3.61215Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.4834 23.2121L19.7674 19.194C19.9892 18.9943 20.1665 18.7505 20.2879 18.4779C20.4093 18.2053 20.4722 17.9105 20.4722 17.6121C20.4722 17.3138 20.4093 17.0185 20.2879 16.7459C20.1665 16.4735 19.9892 16.2295 19.7674 16.03L15.4834 12.0121" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
 </button>
      <Outlet/>
    </div>
  );
};

export default Main;
