import React from "react";
import Sidebar from "./components/Sidebar";
import Pipe from "./components/Pipe";
import Card from "./components/Card";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex h-screen w-screen flex-col sm:flex-row " >
      <div>
        <Sidebar />
      </div>
      <div className="flex items-center justify-center h-full w-full">
        <Outlet/>
      
      </div>
      <div className="flex sm:items-end sm:mb-5 sm:mr-5 ">
        <Pipe/>
      </div>
    </div>
  );
};

export default App;
