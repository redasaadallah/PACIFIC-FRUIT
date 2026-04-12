import React,{useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
import Loader from "./composants/loader";
import Header from "./composants/header";
import Main from "./composants/main";
import Upfooter from "./composants/upfooter";
import Footer from "./composants/footer";
import img5 from "./img/img5.jpg"
import "./styles/reservation.css"
import img8 from "./img/img8.jpg"
import login from "./img/login.png"

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
    <Header at={3} atphone={3}/>
    <Main back={img5}/>
    {/* ================================================ */}
    <div id="res1">
        <div>
            <hr></hr>
            <h1>Accéder à ma <span className="span">réservation</span></h1>
        </div>
        <h3>Si votre demande de réservation a déjà été acceptée, vous pouvez accéder à votre espace client pour consulter les détails de votre réservation.</h3>
    </div>
    <form id="formres">
        <div>
            <img src={login}/>
            <h3>Connexion à votre espace</h3>
        </div>
        <div>
        <div className="wave-group">
        <input required  type="number" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>CIN</span>
        </label>
        
        
        </div>
        <div className="wave-group">
        <input required  type="number" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>Code de réservation</span>
        </label>
       
        </div>
        <button>Code de réservation oublié ?</button>
        </div>
        <div>
            <button>Accéder à ma réservation</button>
            <hr/>
            <button>Contactez-nous</button>
        </div>
    </form>
    {/* ================================================ */}
    <div id="res2">
        <div>
            <div>
            <h1>Pourquoi <span className="span">réserver</span> chez <span className="span">nous ?</span></h1>
            </div>
        </div>
        <div>
            <div>
                <img src={img8}/>
                <p>Processus simple et rapide</p>
            </div>
            <div>
                 <div>
                <img src={img8}/>
                <p>Confirmation rapide</p>
            </div>
             <div>
                <img src={img8}/>
                <p>Conditions optimales de conservation</p>
            </div>
            </div>
             <div>
                <img src={img8}/>
                <p>Espaces adaptés à vos besoins</p>
            </div>
        </div>
    </div>
    <Upfooter/>
    
    <Footer/>
    </>}
    </>);
}
export default Reservation;