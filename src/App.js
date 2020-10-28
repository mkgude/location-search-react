import React from "react";
import './App.css';
import Header from "./components/Header.js"
import Search from "./components/Search.js"
import Results from "./components/Results.js"

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <Results/>
    </div>
  );
}

export default App;
