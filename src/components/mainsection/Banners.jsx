import React, { useEffect, useState } from 'react'
import BannerCard from './BannerCard'
import Carosolbtn from './Carosolbtn'

function Banners() {
  const [cards]= useState([
    {
      new:true,
      id:1,
      title:<>Marvel's spider-man: <br/> Myles Morales</>,
      image:"https://i.ibb.co/ZM9qCKP/spiderman.png",
      accent:"radial-gradient(52.7% 52.7% at 49.87% 0%, rgba(255, 212, 102, 0.28) 0%, rgba(255, 230, 166, 0.18) 34.89%, rgba(217, 217, 217, 0) 100%)",
      price:"₹6,990"
    },
    {
      new:true,
      id:2,
      title:<>Marvel's Ironman: <br/> Tony Stark</>,
      image:"https://i.ibb.co/PMMpz9r/iron.png",
      accent:"radial-gradient(52.7% 52.7% at 49.87% 0%, rgba(255, 102, 102, 0.28) 0%, rgba(255, 166, 166, 0.18) 34.89%, rgba(217, 217, 217, 0) 100%)",
      price:"₹9,990"
    },
    {
      new:true,
      id:3,
      title:<>Marvel's Thor: <br/> Ragnarok</>,
      image:"https://i.ibb.co/CQ8g18d/thor.png",
      accent:" radial-gradient(52.7% 52.7% at 49.87% 0%, rgba(102, 154, 255, 0.28) 0%, rgba(166, 212, 255, 0.18) 34.89%, rgba(217, 217, 217, 0) 100%)",
      price:"₹8,990"
    }
  ])
  const [activeCard,setActiveCard] = useState(cards[0].id)

  

  return (
    <>
    <div className="gradi relative flex flex-row  rounded-3xl px-6  h-60">
      <BannerCard cards={cards } activeCard={activeCard} setActiveCard={setActiveCard} /> 
      <div className="flex justify-end absolute -bottom-10 right-4 gap-2 my-3 ">
        {
          cards.map((item)=>(<Carosolbtn key={item.id} activeCard={activeCard} setActiveCard={setActiveCard} item={item}/>))
        }
        {/* <button className='h-1 w-4 rounded-md bg-white'></button>
        <button className='h-1 w-3 rounded-md bg-slate-300'></button>
        <button className='h-1 w-3 rounded-md bg-slate-300'></button> */}
      </div>
      </div>
    </>
  )
}

export default Banners