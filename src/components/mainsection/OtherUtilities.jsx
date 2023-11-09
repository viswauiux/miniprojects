import React from "react";

function OtherUtilities() {
  return (
    <div className="flex flex-1 gap-5  items-center ">
      <div className=" flex flex-col items-center justify-center gap-2 border-slate-700 rounded-2xl border  h-44  w-56  gradi">
        <div className="flex w-full justify-between px-5   items-center ">
          <h1 className="text-slate-400 text-sm">Accessories</h1>
          <div className="pl-3 ">
            <svg
              viewBox="0 0 1024 1024"
              height={"18"}
              width={"18"}
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#ffffff"
                  d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="relative h-24 w-24">
         
          <div
            className="h-14 w-32 -left-5 top-5 absolute z-0 gradi rounded-2xl"
            style={{ transform: "skew(-10deg, -10deg)" }}
          ></div>
        </div>
      </div>
      <div className=" border-slate-400 rounded-2xl h-44 flex-1 gradi flex flex-col justify-center items-center ">
          <div className="flex w-full justify-between px-5   items-center ">
            <h1 className="text-slate-400 text-sm">Library</h1>
            <div className="pl-3 ">
              <svg
                viewBox="0 0 1024 1024"
                height={"18"}
                width={"18"}
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#ffffff"
                    d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-around w-full  ">

        <div className=" flex justify-between items-center mx-5">

          <div
            style={{ zIndex: "10" }}
            className=" flex gap-2 rounded-xl my-1  "
          >
           <div className="h-8 w-8 rounded-lg overflow-hidden">
            <img
              className="object-fill translate-y-2"
              src="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/bxSj4jO0KBqUgAbH3zuNjCje.jpg"
              alt=""
            />
          </div>
            <div className="flex flex-col  ">
              <h1 className="text-slate-300 text-xs">CyberPunk</h1>
              <h1 className="text-slate-500 text-2xs">PS$ & PS5</h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-slate-400 text-xs">12 DEC</h1>
            <h1 className="text-slate-500 text-2xs">2020</h1>
          </div>
          <button className=" border border-blue-700 text-blue-500 px-6 h-8 shadow-sm text-sm rounded-xl " >Download</button>
        </div>
        <div className=" flex justify-between items-center mx-5">

          <div
            style={{ zIndex: "10" }}
            className=" flex gap-2 rounded-xl my-1  "
          >
            <div className="h-8 w-8 bg-black flex justify-center items-center rounded-xl overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/elite-unit-special-forces-soldier-camouflage-uniform-holding-assault-rifle-with-laser-sight-aims-target-studio-photo-against-dark-textured-wall_613910-20716.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col  ">
              <h1 className="text-slate-300 text-xs">CyberPunk</h1>
              <h1 className="text-slate-500 text-2xs">PS$ & PS5</h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-slate-400 text-xs">12 DEC</h1>
            <h1 className="text-slate-500 text-2xs">2020</h1>
          </div>
          <button className=" border border-blue-700 text-blue-500 px-6 h-8 shadow-sm text-sm rounded-xl " >Download</button>
        </div>
        <div className=" flex justify-between items-center mx-5">

          <div
            style={{ zIndex: "10" }}
            className=" flex gap-2 rounded-xl my-1  "
          >
            <div className="h-8 w-8 bg-black flex justify-center items-center rounded-xl overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/elite-unit-special-forces-soldier-camouflage-uniform-holding-assault-rifle-with-laser-sight-aims-target-studio-photo-against-dark-textured-wall_613910-20716.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col  ">
              <h1 className="text-slate-300 text-xs">CyberPunk</h1>
              <h1 className="text-slate-500 text-2xs">PS$ & PS5</h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-slate-400 text-xs">12 DEC</h1>
            <h1 className="text-slate-500 text-2xs">2020</h1>
          </div>
          <button className=" border border-blue-700 text-blue-500 px-6 h-8 shadow-sm text-sm rounded-xl " >Download</button>
        </div>
          </div>

      </div>
    </div>
  );
}

export default OtherUtilities;
