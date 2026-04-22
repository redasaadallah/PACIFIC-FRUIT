import "../styles/baradmin.css"
import logo from "../img/logo.png"
import homefilled from "../img/home.png"
import ad1 from "../img/ad1.png"
import ad2 from "../img/ad2.png"
import ad3 from "../img/ad3.png"
import ad4 from "../img/ad4.png"
import logout from "../img/log-out.png"
import {useNavigate} from "react-router-dom"

function Baradmin(){
    const navigate=useNavigate();
    return(<>
    <div id="baradmin">
        <img src={logo}/>
        <div>
        <div>
            <img src={homefilled}/>
            <button onClick={()=>{navigate("/dashboard")}} className="b" id="in">Accueil</button>
        </div>
        <div>
            <img src={ad1}/>
            <button onClick={()=>{navigate("/admindemande")}} className="b">Demandes</button>
        </div>
        <div>
            <img src={ad2}/>
            <button className="b" onClick={()=>{navigate("/adminreservation")}}>Réservations</button>
        </div>
        <div>
            <img src={ad3}/>
            <button className="b" onClick={()=>{navigate("/statistic")}}>Statistiques</button>
        </div>
        <div>
            <img src={ad4}/>
            <button className="b">Paramètres</button>
        </div>
        </div>
        <div>
            <img src={logout}/>
            <button className="b">Se déconnecter</button>
        </div>
    </div>
    </>);
}
export default Baradmin;