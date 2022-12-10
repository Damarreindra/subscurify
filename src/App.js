import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Logged from "./pages/Logged";

function App() {
 
  return (
   <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/home" exact element={<Logged/>}/>
    </Routes>
   </Router>
  );
}

export default App;
