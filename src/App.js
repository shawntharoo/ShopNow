import React from "react";
import "./index.css";
import Header from "./components/Appbar/Appbar";
import Home from "./components/Home/Home"

const App = () => {
  return(
    <React.StrictMode>
    <Header></Header>
    <Home></Home>
    </React.StrictMode>
  )
}


export default App
