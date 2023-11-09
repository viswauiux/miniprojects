import React from 'react'
import SideSection from './SideSection'
import MainSection from './MainSection'
import TopNavbar from './TopNavbar'

function SectionContainer() {
  return (
    <div className='h-full  flex flex-col  w-full'>
        <TopNavbar/>
        <div className='flex justify-between  h-screen'>
        <MainSection/>
        <SideSection/>
        </div>
    </div>
  )
}

export default SectionContainer