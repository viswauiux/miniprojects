import React from "react";
import SideContent from "./components/body/SideContent";
import Main from "./components/body/Main";
import NavbtnContainer from "./components/body/NavbtnContainer";

const MainContainer = () => {
  return (
    <div className=" relative font-body text-gray-300   h-full container m-auto">
      <div className="absolute flex h-full px-5  w-full z-10 ">
        <SideContent />
        <Main />
        <NavbtnContainer />
      </div>
      {/* RedStrip */}
      <div
        className="w-[170px] h-full translate-x-1/2 -z-0 absolute top-0 right-[50%] md:right-[25%]"
        style={{
          background:
            "linear-gradient(180deg, #AE0000 0%, rgba(169, 0, 0, 0) 100%)",
        }}
      ></div>
      <div className=" -z-0 absolute top-0 left-0 text-[104px] font-welcome opacity-5 text-gray-400 font-black "  style={{writingMode:"vertical-lr",transform: 'rotate(180deg)'}}>
        WELCOME
      </div>
      <div className="absolute top-[10%] left-[20%]">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="19.1462"
            y="2.05585"
            width="33.4476"
            height="33.4476"
            transform="rotate(30.7277 19.1462 2.05585)"
            stroke="#AE0000"
            stroke-width="3"
          />
        </svg>
      </div>
      <div className="absolute top-[25%] left-[50%]">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9.14614" y="-1.94415" width="21.0868" height="21.0868" rx="10.5434" transform="rotate(30.7277 9.14614 -1.94415)" stroke="#AE0000" stroke-width="3"/>
</svg>

      </div>
    </div>
  );
};

export default MainContainer;
