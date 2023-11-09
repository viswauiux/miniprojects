import React from 'react'

function SearchBox() {
  return (
    <>
    <div className='mx-28 w-800'>
    <div className=" rounded-2xl text-gray-200 h-10 flex w-3/6 justify-center flex-row bg-slate-700  my-3">
    <div className=" flex justify-center pl-3 items-center ">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        height="18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
        >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            ></path>{" "}
        </g>
      </svg>
    </div>
    <input
     type="text"
     placeholder="Search"
     className={`w-full ml-2 bg-transparent text-sm  focus:border-none focus:outline-none 
     
     `}
     />
  </div>
     </div>
     
     </>
  )
}

export default SearchBox