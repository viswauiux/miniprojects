import React from "react";

function MostPlayedgames() {
  return (
    <div   >
      <h1 className="text-slate-400 text-sm my-3">Most played games</h1>
        <div className="flex justify-between gap-5">
      <div className="flex flex-col gap-3" >
        <div className="h-24 w-56 overflow-hidden rounded-3xl">
          <img className="" src="https://assets.gqindia.com/photos/5f0e9a7bd2f3b1e4851c4ccd/16:9/w_2240,c_limit/top-image-ghost-of-tsushima-lead-image.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">Ghost of Tsushima</h1>
          <h1 className="text-slate-400 text-2xs">112Hrs</h1>
        </div>
      </div>
      <div className="flex flex-col gap-3" >
        <div className="h-24 w-56  overflow-hidden rounded-3xl">
          <img className="" src="https://image.api.playstation.com/vulcan/img/rnd/202009/2923/LyLrdlIfqiVzvynWJGtNfbU8.png" alt="" />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">Horizon Zero Dawn</h1>
          <h1 className="text-slate-400 text-2xs">86hrs</h1>
        </div>
      </div>
      <div className="flex flex-col gap-3" >
        <div className="h-24 w-56  overflow-hidden rounded-3xl">
          <img className="" src="https://gamingbolt.com/wp-content/uploads/2020/06/ratchet-and-clank-rift-apart-image-6.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-slate-300 text-xs">Ratchet and Clank</h1>
          <h1 className="text-slate-400 text-2xs">35Hrs</h1>
        </div>
      </div>
      </div>
    </div>
  );
}

export default MostPlayedgames;
