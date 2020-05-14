import React from "react";
import "./App.css";

//Own Components
import Routes from "./Routes";
import Loader from "./loader/Loader";

function App() {
  return (
    <div className="App">
      {/* <Loader />*/}
      <Routes />
    </div>
  );
}

export default App;
