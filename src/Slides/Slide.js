import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
const Slides=()=>{

    return (
        <div>
          <div className="flex ">
      <div className="basis-[12%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[88%] border m-[20px]">
        <Dashboard></Dashboard>
      </div>
    </div>
        </div>
    )
}

export default Slides;