import Splash from "./composants/splash"
import React,{useContext,useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ← make sure to import these
import ProtectedRoute from "./ProtectedRoute";
import Loader from "./composants/loader"
import "./App.css"
import Contact from "./contact";
import Home from "./home"
import Apropos from "./apropos"
import Reservation from "./reservation";
import Demander from "./demander";
import Baradmin from "./composants/baradmin";
import LoginAdmin from "./loginadmin";
import Dashboard from "./dashboard";
import Ouinon from "./composants/ouinon";
import Repondre from "./composants/repondre";
import Admindemande from "./admindemande";
import Adminreservation from "./adminreservation";
import Statistic from "./statistic";
import Espaceclient from "./espaceclient";
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
    <Route path="/reservation" element={<Reservation/>}/>
    <Route path="/demander" element={<Demander/>}/>
    <Route path="/admin" element={<LoginAdmin/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/admindemande" element={<Admindemande/>}/>
    <Route path="/adminreservation" element={<Adminreservation/>}/>
    <Route path="/statistic" element={<Statistic/>}/>
    <Route path="/espaceclient" element={<Espaceclient/>}/>
    </Routes>
    
    </>
    
    
  );
}

export default App;
