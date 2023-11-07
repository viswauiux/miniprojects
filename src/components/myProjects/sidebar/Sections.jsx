import React from 'react'

function Sections({title,icon,menu}) {
  return (
    <div>
          <div className="my-1 rounded-lg  flex items-center md:justify-start justify-center  hover:bg-slate-200 hover:cursor-pointer   ">
             <div className='m-2' title={title}>{icon}</div>
            <h1 className={`font-medium text-sm ${menu?"block":"hidden"}`}>{title} </h1>
          </div>
    </div>
  )
}

export default Sections