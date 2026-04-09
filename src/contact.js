import React,{useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
import Loader from "./composants/loader";
import Header from "./composants/header";
import Main from "./composants/main";
import Upfooter from "./composants/upfooter";
import Footer from "./composants/footer";
import img7 from "./img/img7.jpg"
import "./styles/contact.css"
import imgco1 from "./img/imgcontact1.png"
import call from "./img/imgcon2.png"
import mail from "./img/imgcon3.png"
import location from "./img/imgcon4.png"
import linkedin from "./img/imgcon5.png"
import web from "./img/imgcon6.png"
function Contact(){
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
    {/* -------------------------------- */}
    <div id="contact1">
        <div><div>
            <hr/>
            <h1><span className="span">Nos</span> coordonnées</h1>
            </div>
            <h3>Pour toute information ou demande concernant nos services, vous pouvez nous contacter via les coordonnées suivantes</h3>
            
        </div>
        <div>
            <div>
                <img src={imgco1}/>
            </div>
            
            <div>
                <div>
                    <img src={call}/><p>+212 562030301</p>
                </div>
                <div>
                    <img src={mail}/><p>info.PACIFICFRUIT@gmail.com</p>
                </div>
                <div>
                    <img src={location}/><p>SIDI BARNOUSSI-CASABLANCA</p>
                </div>
                <div>
                    <img src={linkedin}/><p>PACIFIC FRUIT</p>
                </div>
                <div>
                    <img src={web}/><p>www.pacificfruit.ma</p>
                </div>
                
            </div>
        </div>
    </div>
    {/* ======================================= */}
    <div id="contact2">
        <div>
            <div>
                <hr/>
                <h1></h1>
                <h3></h3>
            </div>
        </div>
        <div>
            <form></form>
            <div>
                <img/>
            </div>
        </div>
    </div>
    {/* ======================================= */}
    <Footer/>
    </>}
    </>);
}
export default Contact;