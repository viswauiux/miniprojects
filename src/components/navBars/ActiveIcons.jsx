import React from "react";

function ActiveIcons({ item,activeStatus,setActivetitle }) {
  return (
    <button title={item.title} onClick={()=>setActivetitle(item.title)} className={`w-10  h-10 flex my-2 justify-center  items-center ${activeStatus?" bg-blue-600 shadow-3xl shadow-blue-200":""} rounded-xl `}>
      {activeStatus? item.active:item.inactive}
    </button>
  );
}

export default ActiveIcons;
