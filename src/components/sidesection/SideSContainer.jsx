import React from 'react'
import Socialsection from './groups/Socialsection'
import Onlinesection from './groups/Onlinesection'
import Partiessection from './groups/Partiessection'
import ChatSection from './groups/ChatSection'

function SideSContainer() {
  return (
    <div className='w-72 h-full gradi relative rounded-3xl text-white  border-t-gray-500 border-t' >
        <Socialsection/>
        <Onlinesection/>
        <Partiessection/>
        <ChatSection/>
    </div>
  )
}

export default SideSContainer