import React from 'react'
import SectionContainer from './SectionContainer'
import SideMenu from './SideMenu'

function Body() {
  return (
    <div className='2xl:container m-auto flex justify-between h-full' >
        <SideMenu/>
        <SectionContainer/>
    </div>
  )
}

export default Body