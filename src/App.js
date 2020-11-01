import React from "react";
import './App.css';
import Header from "./components/Header.js"
import Search from "./components/Search.js"
import Results from "./components/Results.js"
import MapComponent from "./components/MapComponent"
// import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"


function App() {
//   const libraries = ["places"]
//     const {isLoaded, loadError} = useLoadScript ({
//   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//   libraries,
// });
// if (loadError) return "Error loading maps";
// if (!isLoaded) return "Loading Maps"
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
