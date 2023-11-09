import React from 'react'
import SectionContainer from './SectionContainer'
import SideMenu from './SideMenu'

function Body() {
  return (
    <div className=' m-auto flex  justify-between h-full'  style={{Width:"1180px"}}>
        <SideMenu/>
        <SectionContainer/>
    </div>
  )
}

export default Body