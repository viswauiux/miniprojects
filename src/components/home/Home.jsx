import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col md:justify-end lg:flex-row lg:justify-center lg:gap-20  w-full text-gray-300 justify-start gap-2 items-center h-full">
      <div className=" text-md md:text-lg relative flex flex-col my-12 pb-12 md:justify-end md:my-0 md:p-3   md:self-start md:ml-8 ">
      <div className="w-[5px] h-full -z-0 absolute top-0  -left-4" style={{background: "linear-gradient(180deg, #AE0000 0%, rgba(169, 0, 0, 0) 100%)"}}></div>

        <h1 className=" my-">I'M</h1>
        <h1  className="my-2 font-name text-4xl md:text-5xl font-bold">VISWA KIRAN K</h1>
        <h1  className="font-body mb-4">
          UI-UX DESIGNER/ <br /> FRONTEND DEVELOPER
        </h1>
        <div  className="font-body flex gap-2 text-base ">
          <button className="py-1 border-[0.5px] px-2" >Know More</button>
          <button className="flex border-[0.5px] py-1 px-2  gap-2 bg-red-700">
            <h1>Download CV</h1>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_47_77)">
                <path
                  d="M16.125 8.36666C15.5583 5.49166 13.0333 3.33333 10 3.33333C7.59167 3.33333 5.5 4.69999 4.45833 6.69999C1.95 6.96666 0 9.09166 0 11.6667C0 14.425 2.24167 16.6667 5 16.6667H15.8333C18.1333 16.6667 20 14.8 20 12.5C20 10.3 18.2917 8.51666 16.125 8.36666ZM14.1667 10.8333L10 15L5.83333 10.8333H8.33333V7.49999H11.6667V10.8333H14.1667Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_47_77">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-[80%] md:w-[60%] md:self-end md:mr-8 lg:w-[40%]  ">
        <img
            className="-scale-x-100"
          src="https://i.ibb.co/31NZ2xr/Pngtree-teenage-doing-discussion-using-laptop-13016309.png"
          alt="Pngtree-teenage-doing-discussion-using-laptop-13016309"
          border="0"
        />
      </div>
    </div>
  );
};

export default Home;
