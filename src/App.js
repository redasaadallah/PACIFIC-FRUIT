import Splash from "./composants/splash"
import React,{useContext,useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ← make sure to import these
import ProtectedRoute from "./ProtectedRoute";
import Loader from "./composants/loader"
import "./App.css"
import Contact from "./contact";
import Home from "./home"
import Apropos from "./apropos"
function App() {
  const[splash,setsplash]=useState(0);
      useEffect(()=>{
          setTimeout(()=>{
              setsplash(1);
          },4000);
      },[]);
  const [step, setstep]=useState(1);
  return (
    <>
    <Routes>
    <Route path="/" element={<Splash/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/apropos" element={<Apropos/>} />
    <Route path="/contact" element={<Contact/>} />

    </Routes>
    
    </>
  );
}

export default App;
