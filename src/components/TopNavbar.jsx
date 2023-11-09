import React from 'react'
import SearchBox from './topsearchbar/SearchBox'
import Useruitilities from './topsearchbar/Useruitilities'

function TopNavbar() {
  return (
    <div className='w-full my-3 justify-between flex'>
      <SearchBox/>
      <Useruitilities/>
    </div>
  )
}

export default TopNavbar