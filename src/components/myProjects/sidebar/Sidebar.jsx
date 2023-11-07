import React from 'react'
import { Link } from 'react-router-dom'
import Window from './Window'

const Sidebar = () => {
  return (
    <>
    <div className='h-screen relative bg-slate-700' > <Window/></div>
    <Link to='/myprojects' className='absolute bottom-0 rounded-2xl bg-white right-0 m-4 border '>
        <div className='flex p-2'>
        <div
            className={`w-6 h-6 rounded-full  `}
            style={{ backgroundColor: "red" }}
          >
            { 
              <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            
        }
          </div>
            <h1 className='text-base ml-2'>Check My Other Projects</h1>
        </div>
        </Link>
    </>
  )
}

export default Sidebar