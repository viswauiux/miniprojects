import React from 'react'

function Onlinesection() {
  return (
    <div className=' mx-7'> 
        <div className="flex justify-between my-3 ">
         <h1 className="text-slate-400 text-xs">ONLINE . 3</h1>
        </div>
      <div className="flex flex-col gap-1">

      <div
        style={{ zIndex: "10" }}
        className=" flex gap-2 rounded-xl my-1  "
      >
        <div className='h-8 w-8 bg-black flex justify-center items-center rounded-xl overflow-hidden'>
            <img src="https://img.freepik.com/free-photo/elite-unit-special-forces-soldier-camouflage-uniform-holding-assault-rifle-with-laser-sight-aims-target-studio-photo-against-dark-textured-wall_613910-20716.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">Bongfather</h1>
          <h1 className="text-slate-400 text-2xs">Playing Rocket League</h1>
        </div>
      </div>
      <div
        style={{ zIndex: "10" }}
        className=" flex gap-2 rounded-xl my-1 "
      >
        <div className='h-8 bg-black  w-8 flex justify-center items-center rounded-xl overflow-hidden'>
            <img src="https://img.freepik.com/premium-photo/close-up-studio-photo-private-security-service-contractor-holding-assault-rifle-with-laser-sight-aims-target_613910-20812.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">MrJam</h1>
          <h1 className="text-slate-400 text-2xs">Playing Nair Autometa</h1>
        </div>
      </div>
      <div
        style={{ zIndex: "10" }}
        className=" flex gap-2 rounded-xl my-1   "
      >
        <div className='h-8 w-8 flex bg-black  justify-center items-center rounded-xl overflow-hidden'>
            <img className='object-fill' src="https://img.freepik.com/free-photo/terrorist-military-uniform-skull-balaclava-holding-pistol-knife-looks-camera-with-menacing-look-studio-photo-against-dark-textured-wall_613910-20880.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">GhostToast</h1>
          <h1 className="text-slate-400 text-2xs">Watching Netflix</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Onlinesection