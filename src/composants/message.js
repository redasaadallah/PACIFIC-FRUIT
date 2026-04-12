import "../styles/message.css"
import logoo from "../img/logo.png"
function Message(){
    return(<>
    <div id="black"></div>
    <div id="success">
        <img src={logoo}/>
        <h1>Merci pour votre message</h1>
        <h3>Votre demande a été envoyée avec succès.<br/> Notre équipe vous répondra dans les plus brefs délais.</h3>
    </div>
    </>);
}
export default Message;