import React from "react";
import './App.css';
import Header from "./components/Header.js"
import Search from "./components/Search.js"
import Results from "./components/Results.js"
import MapComponent from "./components/MapComponent"


function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <MapComponent/>
      <Results/>
    </div>
  );
}

export default App;
