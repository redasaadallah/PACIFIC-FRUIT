import React,{useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
import Loader from "./composants/loader";
import Header from "./composants/header";
import Main from "./composants/main";
import Upfooter from "./composants/upfooter";
import Footer from "./composants/footer";
import img7 from "./img/img7.jpg"
function Reservation(){
    const navigate=useNavigate();
    const [show,setshow]=useState(0);
    useEffect(()=>{
                    setTimeout(()=>{
                        setshow(1);
                    },2000);
                },[]);
    return(<>
        {show===0?<Loader/>:<>
    <Header at={4} atphone={4}/>
    <Main back={img7}/>
    <Footer/>
    </>}
    </>);
}
export default Reservation;