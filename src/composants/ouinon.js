import question from "../img/questionmark.png"
import "../styles/ouinon.css"
function Ouinon({sortir,annuler}){
    return(<>
    <div id="black"></div>
    <div  id="question">
        <img src={question}/>
        <h3>Êtes-vous sûr de vouloir vous déconnecter ?</h3>
        <div>
            <button onClick={sortir}>Oui</button>
             <button onClick={annuler}>Non</button>
        </div>
    </div>
    </>);

}
export default Ouinon;