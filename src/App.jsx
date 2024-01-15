import React from "react";
import Sidebar from "./components/sidebar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex h-screen w-screen flex-col sm:flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="flex items-center justify-center h-full w-full">
        <Home />
      </div>
    </div>
  );
};

export default App;
