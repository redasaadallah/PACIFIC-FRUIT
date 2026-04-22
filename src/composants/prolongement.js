import "../styles/prolongement.css"
import clos from "../img/close.png"
import extention from "../img/extension.png"
function Prolongement({close,onhundlesubmit}){

    return(<>
    <div id="black"></div>
    <div id="pro">
        <div>
            <img onClick={close} src={clos}/>
        </div>
        <div>
            <img src={extention}/>
            <h1>Demande de prolongement</h1>
        </div>
        <form onSubmit={onhundlesubmit}>
            <label>Entrez le nombre de jours</label>
            <input required type="number"/>
            <button>Envoyer</button>
        </form>
        <p>Date de fin de votre réservation après prolongation : 02/02/2026</p>
    </div>
    </>)

}
export default Prolongement;