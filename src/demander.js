import React,{useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
import Loader from "./composants/loader";
import Header from "./composants/header";
import Main from "./composants/main";
import Upfooter from "./composants/upfooter";
import Footer from "./composants/footer";
import img3 from "./img/img3.jpg"
function Demander(){
    const navigate=useNavigate();
    const [show,setshow]=useState(0);
    useEffect(()=>{
                    setTimeout(()=>{
                        setshow(1);
                    },2000);
                },[]);
    return(<>
    {show===0?<Loader/>:<>
    <Header at={2} atphone={2}/>
    <Main back={img3}/>
    <Footer/>
    </>}
    </>);
}
export default Demander;