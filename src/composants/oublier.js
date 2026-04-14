import "../styles/oublier.css"
import close from "../img/close.png"
import lock from "../img/forgot.png"
import send from "../img/send1.png"
function Oublier({onClose}){
    return(<>
    <div id="black"></div>
    <div id="oublier">
        <div><img onClick={onClose} src={close}/></div>
        <img src={lock}/>
        <p>Entrez votre adresse email administrateur afin de recevoir votre mot de passe.</p>
        <form>
            <div className="wave-group">
        <input required  type="email" className="input" name="venale" />
        <span className="bar"></span>
        <label className="label">
        <span className="label-char" style={{ "--index": 0 }}>Email</span>
        </label>
        </div>
            <button><img src={send}/>Envoyer</button>
        </form>
    </div>
    
    </>);

}
export default Oublier;