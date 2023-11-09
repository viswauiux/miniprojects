import React from "react";

function ChatSection() {
  return (
    <div className="  w-full  rounded-3xl bottom-0 absolute  overflow-hidden shadow-lg ">
      <div className="flex justify-between px-7 chatGradient  items-center">
        <div className="flex flex-col pt-5 pb-2 h-16  ">
          <h1 className="text-slate-400 text-2xs">Party Chat</h1>
          <h1 className="text-slate-300 text-xs">Scott Pilgrims + 7 Others</h1>
        </div>
        <div className="flex">
          <div className=" flex justify-center pl-3 items-center ">
            <svg
              viewBox="0 0 24 24"
              height="20"
              width="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V12C16 13.6569 14.6569 15 13 15H11C9.34315 15 8 13.6569 8 12V6Z"
                  stroke=""
                  strokeWidth="1.2"
                ></path>{" "}
                <path
                  d="M19 11V12C19 15.3137 16.3137 18 13 18H11C7.68629 18 5 15.3137 5 12V11"
                  stroke=""
                  strokeWidth="1.2"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M12 18L12 21"
                  stroke=""
                  strokeWidth="1.2"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className=" flex justify-center pl-3 items-center ">
            <svg
              viewBox="0 0 24 24"
              height={"20"}
              width={"20"}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              strokeWidth="1"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z"
                  fill="c"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className=" flex flex-row-reverse px-7 items-center h-16   justify-between chatGradient">
        <div className="flex justify-center items-center">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="shadow-lg rounded-full hover:cursor-pointer hover:shadow-blue-400"
            height={"38"}
            width={"38"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="url(#paint0_linear_87_7225)"
              ></circle>{" "}
              <path
                d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                fill="white"
              ></path>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_87_7225"
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#2563eb"></stop>{" "}
                  <stop offset="1" stopColor="#2563eb"></stop>{" "}
                </linearGradient>{" "}
              </defs>{" "}
            </g>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className={`w-full bg-transparent text-sm  focus:border-none focus:outline-none 
     `}
        />
      </div>
    </div>
  );
}

export default ChatSection;
