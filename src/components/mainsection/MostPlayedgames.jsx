import React from "react";

function MostPlayedgames() {
  return (
    <div   >
      <h1 className="text-slate-400 text-sm my-3">Most played games</h1>
        <div className="flex justify-between gap-5">
      <div className="flex flex-col gap-3" >
        <div className="h-24  overflow-hidden rounded-3xl">
          <img className="" src="https://assets.gqindia.com/photos/5f0e9a7bd2f3b1e4851c4ccd/16:9/w_2240,c_limit/top-image-ghost-of-tsushima-lead-image.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">Ghost of Tsushima</h1>
          <h1 className="text-slate-400 text-2xs">112Hrs</h1>
        </div>
      </div>
      <div className="flex flex-col gap-3" >
        <div className="h-24   overflow-hidden rounded-3xl">
          <img className="" src="https://assets.gqindia.com/photos/5f0e9a7bd2f3b1e4851c4ccd/16:9/w_2240,c_limit/top-image-ghost-of-tsushima-lead-image.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">Ghost of Tsushima</h1>
          <h1 className="text-slate-400 text-2xs">112Hrs</h1>
        </div>
      </div>
      <div className="flex flex-col gap-3" >
        <div className="h-24   overflow-hidden rounded-3xl">
          <img className="" src="https://assets.gqindia.com/photos/5f0e9a7bd2f3b1e4851c4ccd/16:9/w_2240,c_limit/top-image-ghost-of-tsushima-lead-image.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">Ghost of Tsushima</h1>
          <h1 className="text-slate-400 text-2xs">112Hrs</h1>
        </div>
      </div>
      </div>
    </div>
  );
}

export default MostPlayedgames;
