import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeNav } from "../../utils/toggleslice";

const NavbtnContainer = () => {

    const nav = useSelector(state=>state.nav.nav)
    const toggle =  useSelector(state=>state.navToggle.nav)
    const dispatch = useDispatch()
    {console.log(toggle)}
    return (
        <div className="flex  h-full items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-4">
        
        {
            nav.map((item,index)=>(
                        <Link to={item.title}>
                <button onClick={()=>dispatch(changeNav(item.title))} key={index} className={`  p-[8px] rounded-full ${item.title==toggle?" border-2 border-red-700  ":'' } `} >
                            {item.title==toggle&&console.log(item.title)}
                        <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                            cx="3"
                            cy="3"
                            r="3"
                            transform="matrix(-1 0 0 1 6 0)"
                            fill={toggle==item.title?`#AE0000`:`#ffffff`}
                        />
                        </svg>
      </button>
        </Link>
            ))
        }
      </div>
    </div>
  );
};

export default NavbtnContainer;
