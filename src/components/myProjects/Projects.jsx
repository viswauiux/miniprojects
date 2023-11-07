import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <> 
    <div className='h-screen flex justify-center items-center'>
            <Link to={'/sidebar'} className=' p-24 rounded-3xl bg-slate-800 text-white shadow-lg shadow-slate-500 hover:bg-slate-600'>My SideBar</Link>
        </div> 
    
    </>
    )
}

export default Projects