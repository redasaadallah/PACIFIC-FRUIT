import "../styles/repondre.css"
import close from "../img/close.png"
import send from "../img/send1.png"
function Repondre(){
    return(<>
    <iv id="black"></iv>
    <div id="repondre">
        <div>
            <img src={close}/>
        </div>
        <h1>SAADALLAH REDA</h1>
        <h3>Objet : Demande d’information sur le stockage frigorifique</h3>
        <p>Bonjour,
        Je souhaite obtenir plus d’informations concernant vos services de stockage frigorifique. Je voudrais savoir quelles sont les capacités disponibles, les conditions de réservation ainsi que les documents nécessaires pour effectuer une demande.
        Je vous remercie d’avance pour votre retour.
        Cordialement,Ahmed El Mansouri</p>
        <textarea placeholder="Répondre"></textarea>
        <button><img src={send}/>Envoyer</button>
    </div>
    </>);
}
export default Repondre;
