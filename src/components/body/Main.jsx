import React from 'react'
import Home from '../home/Home'

const Main = () => {
  return (
    <div className='flex-1 relative'>
         <div className=" absolute top-0 flex gap-4 my-4  right-0">
            <h1 className='cursor-pointer'>About Me</h1>
            <h1 className='cursor-pointer'>Contact </h1>
        </div>
        <Home/>
    </div>
  )
}

export default Main