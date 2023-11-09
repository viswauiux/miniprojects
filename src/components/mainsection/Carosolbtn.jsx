import React from 'react'

function Carosolbtn({activeCard,setActiveCard,item}) {
  return (
    <>
    {
        
        item.id===activeCard?<button  className='h-1 w-5  rounded-md bg-blue-500 '></button>:<button onClick={()=>{setActiveCard(item.id)}} className='h-1 w-3 rounded-md bg-white'></button>
    }
    </>
  )
}

export default Carosolbtn