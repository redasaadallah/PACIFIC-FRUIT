import "./styles/loginadmin.css"
import france from "./img/france.png"
import arow from "./img/arowupdown.png"
import logo from "./img/logoo.png"
import img12 from './img/img12.png'
import login from "./img/login.png"
import {useNavigate} from "react-router-dom"
function LoginAdmin(){
    const navigate=useNavigate();
    const connecter=()=>{
        navigate("/dashboard")
    }
    return(<>
    <div id="la1">
        <div>
            <img src={logo}/>
            <div>
                <hr/>
                <h1>Espace<span className="span">Administrateur</span></h1>
            </div>
        </div>
        <div>
            <button>Espace Client</button>
            <button><img src={france} alt=""/>France <img src={arow} alt=""/></button>
        </div>
    </div>
    <h1 id="la2">Cet espace est réservé à l’administration de la plateforme.</h1>
    <div id="la3">
        <div><img src={img12}/></div>
        <form>
            <div>
                <img src={login} />
                <h3>Veuillez vous connecter pour accéder au tableau de bord.</h3>
            </div>
            <div>
                <div className="wave-group">
        <input required  type="text" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>Email administrateur</span>
        </label>
        </div>
        <div className="wave-group">
        <input required  type="text" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>Mot de passe</span>
        </label>
        </div>
        <p>Mot de passe oublié ?</p>
            </div>
            <button onClick={connecter}>Se connecter</button>
        </form>
    </div>
    </>);
}
export default LoginAdmin;