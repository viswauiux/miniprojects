import React from "react";

function Socialsection() {
  return (
    <div className="mx-7">
      <div className="flex justify-between my-6 ">
        <h1 className="text-slate-400 text-sm">Social</h1>
        <div className="pl-3 ">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width={"18"}
            height={"18"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M7 10L12 15L17 10"
                stroke="#e5e7eb"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div
        style={{ zIndex: "10" }}
        className="p-4  rounded-xl bg-slate-800 shadow-lg "
      >
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">Rocket League update</h1>
          <h1 className="text-slate-400 text-2xs">12mins remaining</h1>
        </div>
      </div>
    </div>
  );
}

export default Socialsection;
