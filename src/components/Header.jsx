import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-3 flex justify-center items-center flex-col bg-slate-500 text-white'>
        <h1 className='text-3xl'>Viswa Kiran Kathi <span className='text-sm'>  ( Mini Projects )</span></h1> 
        <Link to='/myprojects' className='bg-slate-300 text-slate-500 px-4 py-1 my-4 rounded-xl' >My Projects</Link>
    </div>
  )
}

export default Header