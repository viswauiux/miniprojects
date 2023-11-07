import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className='h-screen relative' > welcome to Sidebar</div>
    <Link to='/myprojects' className='absolute bottom-0 right-0 m-4 border '><div>
            {"<"}
            <h1>Back to Projects</h1>
        </div></Link>
    </>
  )
}

export default Sidebar