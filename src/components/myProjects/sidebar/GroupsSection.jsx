import React from 'react'

const GroupsSection = ({icon,title,color,menu}) => {
  return (
    <div>
          <div className={`my-1 rounded-lg  flex items-center ${menu?"justify-start":"justify-center"} hover:bg-slate-200 hover:cursor-pointer    `}>
             <div className={`m-2 rounded-full p-1 `} title={title} style={{backgroundColor:color}}>{icon}</div>
            <h1 className={`font-medium text-sm ${menu?"block":"hidden"}`}>{title} </h1>
          </div>
    </div>
  )
}

export default GroupsSection