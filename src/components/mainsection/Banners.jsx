import React from 'react'

function Banners() {
  return (
    <>
    <div className="gradi relative flex justify-between rounded-3xl px-6  h-60">
        <div className="flex h-full absolute z-10 justify-center gap-2 flex-col">
          <div className="flex text-2xs w-8   rounded-lg text-white bg-red-600 justify-center items-center">
            <h1 className=" p-1 px-2">NEW</h1>
          </div>
          <div className="text-white text-2xl ">
            <h1>
              Marvel's Spider-Man: <br /> Myles Morales
            </h1>
          </div>
          <div className="bg-slate-700 h-16 p-2 w-60 flex text-sm items-center  justify-between rounded-2xl flex-row">
            <h1 className="text-white ">₹6,999.00</h1>
            <button className="h-full  rounded-xl my-2 px-3 bg-blue-500">
              <h1 className="text-white ">Purchase</h1>
            </button>
          </div>
        </div>
        <div className="absolute z-10 -top-12 right-5">
          <img src={"https://i.ibb.co/ZM9qCKP/spiderman.png"} className="w-72" alt="" />
        </div>
        <div className="w-full z- absolute h-full" style={{background:"radial-gradient(52.7% 52.7% at 49.87% 0%, rgba(255, 212, 102, 0.28) 0%, rgba(255, 230, 166, 0.18) 34.89%, rgba(217, 217, 217, 0) 100%)"}}>
        </div>
      <div className="flex justify-end absolute -bottom-10 right-4 gap-2 my-3 ">
        <button className='h-1 w-4 rounded-md bg-white'></button>
        <button className='h-1 w-3 rounded-md bg-slate-300'></button>
        <button className='h-1 w-3 rounded-md bg-slate-300'></button>
      </div>
      </div>
    </>
  )
}

export default Banners