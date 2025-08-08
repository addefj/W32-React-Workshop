import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const App = () => {
  return (
    <div className="bg-light">
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
