import React, { useEffect, useRef } from "react";

function BannerCard({ cards,activeCard,setActiveCard }) {
const opAnimation = useRef()    
// const [op,setOp]=useState('opacity')
    useEffect(()=>{
        // setOp('opacity')
        opAnimation.current.className='opacity'
        let time =  setTimeout(()=>{
           if(activeCard===3){setActiveCard(1)} 
           else{
             setActiveCard(activeCard+1)}
         },5000)
         return()=>{
           clearTimeout(time)
           opAnimation.current.className=''
         }
       },[activeCard])
     
 
  return (
    <>
      {cards.map((item) => (
        <div   key={item.id}>
        { item.id == activeCard && <>
         <div  ref={opAnimation} >

          <div className="flex h-full absolute z-10 justify-center gap-2 flex-col">
            <div className="flex text-2xs w-8   rounded-lg text-white bg-red-600 justify-center items-center">
              {item.new&&<h1 className=" p-1 px-2">NEW</h1>}
            </div>
            <div className="text-white text-2xl ">
              <h1>
                {item.title}
              </h1>
            </div>
            <div className="bg-slate-700 h-16 p-2 w-60 flex text-sm items-center  justify-between rounded-2xl flex-row">
              <h1 className="text-white ">{item.price}</h1>
              <button className="h-full  rounded-xl my-2 px-3 bg-blue-500">
                <h1 className="text-white ">Purchase</h1>
              </button>
            </div>
          </div>
          <div className="absolute z-10 -top-12 right-5">
            <img
              src={item.image}
              className="w-72"
              alt=""
            />
          </div>
          <div
            className="w-full z- absolute h-full"
            style={{
              background:
                item.accent,
            }}
          ></div>
         </div>

        </>}
        </div>
      ))}
    </>
  );
}

export default BannerCard;
