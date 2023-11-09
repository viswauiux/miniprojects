import React from "react";
import Banners from "./Banners";
import MostPlayedgames from "./MostPlayedgames";
import OtherUtilities from "./OtherUtilities";

function MainSContainer() {
  return (
    <div className="mx-28 relative flex flex-col gap-5  h-full ">
      <Banners/>
      <MostPlayedgames/>
      <OtherUtilities/>
    </div>
  );
}

export default MainSContainer;
